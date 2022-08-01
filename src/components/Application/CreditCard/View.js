import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import FlipCard from "react-native-flip-card";
import creditcardutils from "creditcardutils";

export const CreditCard = (props) => {

  const height = props.height || 190;
  const width = props.width || 300;
  const fontSize = props.fontSize || 15;
  const fontColor = props.fontColor || '#FFFFFF';
  const flipped = props.flipped ? props.flipped : false;
  const borderRadius = props.borderRadius || 20;
  const frontImage = props.frontImage || require('./assets/card-front.png');
  const backImage = props.backImage || require('./assets/card-back.png');


  let cardTypeIcon = null

  switch (creditcardutils.parseCardType(props.number)) {
  case 'amex':
    cardTypeIcon = require('./assets/american-express.png');
    break;
  case 'dinersclub':
    cardTypeIcon = require('./assets/diners-club.png')

    break;
  case 'discover':
    cardTypeIcon = require('./assets/discover.png')

    break;
  case 'jcb':
    cardTypeIcon = require('./assets/jcb.png')
    break;
  case 'maestro':
    cardTypeIcon = require('./assets/maestro.png')
    break;
  case 'mastercard':
    cardTypeIcon = require('./assets/mastercard.png')

    break;
  case 'unionpay':
    cardTypeIcon = require('./assets/unionpay.png')
    break;
  case 'visa':
    cardTypeIcon = require('./assets/visa.png')

    break;
  case 'visaelectron':
    cardTypeIcon = require('./assets/visa-electron.png')
    break;
  }

    return (
      <View style={{ height: height, width: width }}>
        <FlipCard
          style={props.cardStyles}
          flipHorizontal={true}
          flipVertical={false}
          flip={flipped}
        >
          <View style={props.frontStyles}>
            <View style={{ height: height, width: width }}>
              <ImageBackground
                source={frontImage}
                style={styles.imageBackground}
                imageStyle={{ borderRadius: borderRadius }}
              >
                <View style={styles.imageContainer}>

                  <View style={styles.cardTypeIconContainer}>
                    {
                      cardTypeIcon &&
                      <Image
                        source={cardTypeIcon}
                        style={styles.cardTypeIcon}
                        resizeMode="contain"
                      />
                    }

                  </View>


                  <View style={{ flexGrow: 1 }} />

                  <Text
                    style={{
                      fontSize: fontSize * 1.5,
                      color: fontColor,
                    }}
                  >
                    {creditcardutils.formatCardNumber(String(props.number))}
                  </Text>


                  <View style={styles.rowContainer}>
                    <View style={styles.groupContainer}>
                      {/*{props.since && (*/}
                      {/*  <>*/}
                      {/*    <Text*/}
                      {/*      style={{*/}
                      {/*        ...styles.groupLabel,*/}
                      {/*        fontSize: props.fontSize * 0.7,*/}
                      {/*        color: props.fontColor,*/}
                      {/*        textAlign: 'right',*/}
                      {/*      }}*/}
                      {/*    >*/}
                      {/*      CUSTOMER{'\n'}SINCE*/}
                      {/*    </Text>*/}

                      {/*    <Text*/}
                      {/*      style={{*/}
                      {/*        fontSize: props.fontSize * 0.7,*/}
                      {/*        color: props.fontColor,*/}
                      {/*      }}*/}
                      {/*    >*/}
                      {/*      {props.since}*/}
                      {/*    </Text>*/}
                      {/*  </>*/}
                      {/*)}*/}

                      <Text
                        style={{
                          fontSize: fontSize,
                          marginTop: 5,
                          color: fontColor,
                        }}
                      >
                        {props.name}
                      </Text>
                    </View>



                    <View style={styles.groupContainer}>
                      {props.expiration !== "" && (
                        <>
                          <Text
                            style={{
                              ...styles.groupLabel,
                              fontSize: fontSize * 0.7,
                              color: fontColor,
                              textAlign: 'center',
                            }}
                          >
                            VALID{'\n'}THRU
                          </Text>

                          <Text
                            style={{
                              fontSize: fontSize * 0.7,
                              color: fontColor,
                            }}
                          >
                            {creditcardutils.formatCardExpiry(props.expiration)}
                          </Text>
                        </>
                      )}
                    </View>

                  </View>

                </View>
              </ImageBackground>
            </View>
          </View>

          <View style={props.backStyles}>
            <View style={{ height: height, width: width }}>
              <ImageBackground
                source={backImage}
                style={styles.imageBackground}
                imageStyle={{ borderRadius: 15 }}
              >
                <View style={{ height: '45%' }} />

                <View style={{ flexDirection: 'row' }}>
                  <View style={{ width: '82%' }} />

                  <Text style={{ fontSize: fontSize, alignSelf: 'center' }}>
                    {props.cvc}
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </View>
        </FlipCard>
      </View>
    );
};

const styles = StyleSheet.create({
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  groupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '2%',
  },
  groupLabel: {
    textAlignVertical: 'center',
    marginRight: '2%',
  },
  imageContainer: {
    padding: 15,
    flex: 1,
  },
  cardTypeIconContainer: {
    justifyContent: 'center',
    height: 27,
    width: 27 * (125 / 80),
    alignItems: 'center',
    alignSelf: "flex-end"
  },
  cardTypeIcon: {
    height: 25,
    width: 25 * (125 / 80),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
