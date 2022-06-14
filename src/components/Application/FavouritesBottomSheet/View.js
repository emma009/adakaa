import React, { useRef, useState } from "react";

import { FlatList, Image, Text, TouchableOpacity, useColorScheme, View } from "react-native";

import AppConfig from "../../../../branding/App_config";
import AppInput from "../AppInput/View";
import Globals from "../../../utils/Globals";
import { Styles } from "./Style";
import AppButton from "../AppButton/View";
import { useTheme } from "@react-navigation/native";
import { commonDarkStyles } from "../../../../branding/carter/styles/dark/Style";
import { commonLightStyles } from "../../../../branding/carter/styles/light/Style";

const assets = AppConfig.assets.default;

export const FavouritesBottomSheet = (props) => {

  //Theme based styling and colors
  const scheme = useColorScheme();
  const { colors } = useTheme();
  const itemStyles = Styles(scheme, colors);
  const globalStyles = scheme === "dark" ? commonDarkStyles(colors) : commonLightStyles(colors);

  //Internal states

  // viewType : 0 = Empty List
  // viewType : 1 = Create New List
  // viewType : 2 = Favourite List
  const [viewType, setViewType] = useState(2);
  const [favouriteList, setFavouriteList] = useState(Globals.favouritesList);
  const [selectedFavouriteList, setSelectedFavouriteList] = useState(Globals.favouritesList[0].itemLabel);


  //References
  let textInputRef = useRef();

  return (
    <View style={itemStyles.container}>

      <TouchableOpacity
        onPress={() => {

          let tempViewType = viewType;

          if (tempViewType === 2) {
            tempViewType = -1;
          }

          setViewType(tempViewType + 1);

        }}
        style={itemStyles.headerContainer}>
        <View style={itemStyles.headerImageContainer}>
          <Image source={assets.cart_regular_icon} style={itemStyles.headerImage}
                 resizeMode={"contain"} />
        </View>

        <Text
          style={itemStyles.headerTitle}>{viewType === 0 ? "Saved to Default List" : viewType === 1 ? "Create new List" : "Saved to " + selectedFavouriteList}</Text>

      </TouchableOpacity>

      <View style={itemStyles.emptyTextContainer}>

        {/*Empty Text*/}

        {
          viewType === 0 &&

          <Text style={itemStyles.emptyText}>{"You've not created any lists. Create a new list."}</Text>

        }

        {/*Create New List Item*/}

        {
          viewType === 1 &&

          <View style={itemStyles.inputContainer}>
            <AppInput
              textInputRef={r => (textInputRef = r)}
              leftIcon={assets.cart_regular_icon}
              {...globalStyles.secondaryInputStyle}
              placeholder={"Enter your list title"}
              onChangeText={(value) => {
              }}
            />


            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={itemStyles.listContainer}
              data={favouriteList}

              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={[itemStyles.colorListItemContainer, { backgroundColor: item.backgroundColor }]}
                    onPress={() => {

                      setFavouriteList((favouriteList) => {

                        favouriteList.map((favouriteItem, favouriteIndex) => {

                          if (index === favouriteIndex) {
                            favouriteItem.selected = true;
                          } else {
                            favouriteItem.selected = false;
                          }

                        });

                        return [...favouriteList];

                      });

                    }}>

                    {
                      item.selected &&
                      <Image source={assets.tick_icon}
                             style={itemStyles.colorListIcon}
                             resizeMode={"contain"} />
                    }

                  </TouchableOpacity>
                );
              }}
            />


          </View>
        }


        {
          viewType === 2 &&
          <FlatList
            showsVerticalScrollIndicator={false}
            style={itemStyles.listContainer}
            data={favouriteList}

            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    props.onItemSelect();
                  }}
                  style={[
                    itemStyles.textListContainer, {
                      backgroundColor: item.selected ? scheme === "dark" ? colors.borderColorLight : colors.secondaryBackground : "transparent",
                    }]}>
                  <Text style={itemStyles.textListItem}>{item.itemLabel}</Text>
                </TouchableOpacity>

              );
            }}
          />
        }


      </View>


      <View style={itemStyles.createNewListButton}>

        <AppButton
          title={"Create a New List"}
          onPress={() => {
            if (viewType === 2) {
              setViewType(1);
            } else {
              setViewType(2);
            }
          }}
        />

      </View>


    </View>


  );


};
