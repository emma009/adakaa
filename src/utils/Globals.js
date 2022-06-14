import Routes from "../navigation/Routes";
import {Animated} from "react-native";
import AppConfig from "../../branding/App_config";
import assets from "../../branding/carter/assets/Assets";
import {CommonActions} from "@react-navigation/native";
import Config from "../../branding/carter/configuration/Config";

const colors = AppConfig.lightColors.default;

class Globals {


    static SAFE_AREA_INSET = {}

    static intro1Items = [
        {
            title: "Welcome to Carter grocery application",
            subtitle: "Carter online grocery store is the no. 1 grocery application in the world",
            headerImg: assets.intro1
        },
        {
            title: "Best quality grocery at your doorstep",
            subtitle: "Carter online grocery store where we deliver everything on time.",
            headerImg: assets.intro2
        },
        {
            title: "Peace of mind same day delivery guaranteed!",
            subtitle: "We dispatch all the order within two hours of the order being placed.",
            headerImg: assets.intro3
        },
        {
            title: "Big savings with seasonal discounts in all products",
            subtitle: "We believe in providing best competitive prices to all of our customers.",
            headerImg: assets.intro4
        },
    ];

    static intro2Items = [
        {
            title: "Welcome to Carter grocery application",
            subtitle: "Carter online grocery store is the no. 1 grocery application in the world",
            headerImg: assets.intro1_img1
        },
        {
            title: "Best quality grocery at your doorstep",
            subtitle: "Carter online grocery store where we deliver everything on time.",
            headerImg: assets.intro1_img2
        },
        {
            title: "Peace of mind same day delivery guaranteed",
            subtitle: "We dispatch all the order within two hours of the order being placed.",
            headerImg: assets.intro1_img3
        },
        {
            title: "Big savings with seasonal discounts in all products",
            subtitle: "We believe in providing best competitive prices to all of our customers.",
            headerImg: assets.intro1_img4
        },
    ];

    static intro3Items = [
        {
            title: "Welcome to Carter grocery application",
            subtitle: "Carter online grocery store is the no. 1 grocery application in the world",
            headerImg: assets.intro2_img1
        },
        {
            title: "Best quality grocery at your doorstep",
            subtitle: "Carter online grocery store where we deliver everything on time.",
            headerImg: assets.intro2_img2
        },
        {
            title: "Peace of mind same day delivery guaranteed",
            subtitle: "We dispatch all the order within two hours of the order being placed.",
            headerImg: assets.intro2_img3
        },
        {
            title: "Big savings with seasonal discounts in all products",
            subtitle: "We believe in providing best competitive prices to all of our customers.",
            headerImg: assets.intro2_img4
        },
    ];

    static foodItems = [
        {
            title: "Organic lemons",
            image: require("../components/Application/FoodItem/Assets/Images/OrganicLemons.png"),
            bigImage: require("../components/Application/FoodItem/Assets/Images/BigImage.png"),
            price: "$1.22",
            weight: "1.50 lbs",
            discount: "15%",
            cartCount: 0,
            isFavourite: false,
            detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.",
            ratingValue: 4.5
        },
        {
            title: "Fresh apricots",
            image: require("../components/Application/FoodItem/Assets/Images/apricot.png"),
            bigImage: require("../components/Application/FoodItem/Assets/Images/BigImage.png"),
            price: "$2.35",
            weight: "dozen",
            cartCount: 0,
            isFavourite: false,
            detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.",
            ratingValue: 4.5
        },
        {
            title: "Pomegranate",
            image: require("../components/Application/FoodItem/Assets/Images/pomegranate.png"),
            bigImage: require("../components/Application/FoodItem/Assets/Images/BigImage.png"),
            price: "$1.22",
            weight: "each",
            cartCount: 0,
            isFavourite: false,
            detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.",
            ratingValue: 4.5
        },
        {
            title: "Broccoli flower",
            image: require("../components/Application/FoodItem/Assets/Images/broccoli_flower.png"),
            bigImage: require("../components/Application/FoodItem/Assets/Images/BigImage.png"),
            price: "$4.99",
            weight: "1.50 lbs",
            cartCount: 0,
            isFavourite: false,
            detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.",
            ratingValue: 4.5
        },
        {
            title: "Chocolate chip",
            image: require("../components/Application/FoodItem/Assets/Images/chocolate_chip.png"),
            bigImage: require("../components/Application/FoodItem/Assets/Images/BigImage.png"),
            price: "$1.22",
            weight: "10 cookies",
            cartCount: 0,
            isFavourite: false,
            detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.",
            ratingValue: 4.5
        },
        {
            title: "Red grapes",
            image: require("../components/Application/FoodItem/Assets/Images/red_grapes.png"),
            bigImage: require("../components/Application/FoodItem/Assets/Images/BigImage.png"),
            price: "$8.99",
            weight: "5.0 lbs",
            cartCount: 0,
            isFavourite: false,
            detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.",
            ratingValue: 4.5
        },
        {
            title: "Organic lemons",
            image: require("../components/Application/FoodItem/Assets/Images/OrganicLemons.png"),
            bigImage: require("../components/Application/FoodItem/Assets/Images/BigImage.png"),
            price: "$1.22",
            weight: "1.50 lbs",
            discount: "15%",
            cartCount: 0,
            isFavourite: false,
            detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.",
            ratingValue: 4.5
        },
        {
            title: "Fresh apricots",
            image: require("../components/Application/FoodItem/Assets/Images/apricot.png"),
            bigImage: require("../components/Application/FoodItem/Assets/Images/BigImage.png"),
            price: "$2.35",
            weight: "dozen",
            cartCount: 0,
            isFavourite: false,
            detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.",
            ratingValue: 4.5
        },
        {
            title: "Pomegranate",
            image: require("../components/Application/FoodItem/Assets/Images/pomegranate.png"),
            bigImage: require("../components/Application/FoodItem/Assets/Images/BigImage.png"),
            price: "$1.22",
            weight: "each",
            cartCount: 0,
            isFavourite: false,
            detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.",
            ratingValue: 4.5
        },
        {
            title: "Broccoli flower",
            image: require("../components/Application/FoodItem/Assets/Images/broccoli_flower.png"),
            bigImage: require("../components/Application/FoodItem/Assets/Images/BigImage.png"),
            price: "$4.99",
            weight: "1.50 lbs",
            cartCount: 0,
            isFavourite: false,
            detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.",
            ratingValue: 4.5
        },
        {
            title: "Chocolate chip",
            image: require("../components/Application/FoodItem/Assets/Images/chocolate_chip.png"),
            bigImage: require("../components/Application/FoodItem/Assets/Images/BigImage.png"),
            price: "$1.22",
            weight: "10 cookies",
            cartCount: 0,
            isFavourite: false,
            detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.",
            ratingValue: 4.5
        },
        {
            title: "Red grapes",
            image: require("../components/Application/FoodItem/Assets/Images/red_grapes.png"),
            bigImage: require("../components/Application/FoodItem/Assets/Images/BigImage.png"),
            price: "$8.99",
            weight: "5.0 lbs",
            cartCount: 0,
            isFavourite: false,
            detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.",
            ratingValue: 4.5
        },
        {
            title: "Organic lemons",
            image: require("../components/Application/FoodItem/Assets/Images/OrganicLemons.png"),
            bigImage: require("../components/Application/FoodItem/Assets/Images/BigImage.png"),
            price: "$1.22",
            weight: "1.50 lbs",
            discount: "15%",
            cartCount: 0,
            isFavourite: false,
            detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.",
            ratingValue: 4.5
        },
        {
            title: "Fresh apricots",
            image: require("../components/Application/FoodItem/Assets/Images/apricot.png"),
            bigImage: require("../components/Application/FoodItem/Assets/Images/BigImage.png"),
            price: "$2.35",
            weight: "dozen",
            cartCount: 0,
            isFavourite: false,
            detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.",
            ratingValue: 4.5
        },
        {
            title: "Pomegranate",
            image: require("../components/Application/FoodItem/Assets/Images/pomegranate.png"),
            bigImage: require("../components/Application/FoodItem/Assets/Images/BigImage.png"),
            price: "$1.22",
            weight: "each",
            cartCount: 0,
            isFavourite: false,
            detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.",
            ratingValue: 4.5
        },
        {
            title: "Broccoli flower",
            image: require("../components/Application/FoodItem/Assets/Images/broccoli_flower.png"),
            bigImage: require("../components/Application/FoodItem/Assets/Images/BigImage.png"),
            price: "$4.99",
            weight: "1.50 lbs",
            cartCount: 0,
            isFavourite: false,
            detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.",
            ratingValue: 4.5
        },
        {
            title: "Chocolate chip",
            image: require("../components/Application/FoodItem/Assets/Images/chocolate_chip.png"),
            bigImage: require("../components/Application/FoodItem/Assets/Images/BigImage.png"),
            price: "$1.22",
            weight: "10 cookies",
            cartCount: 0,
            isFavourite: false,
            detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.",
            ratingValue: 4.5
        },
        {
            title: "Red grapes",
            image: require("../components/Application/FoodItem/Assets/Images/red_grapes.png"),
            bigImage: require("../components/Application/FoodItem/Assets/Images/BigImage.png"),
            price: "$8.99",
            weight: "5.0 lbs",
            cartCount: 0,
            isFavourite: false,
            detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.",
            ratingValue: 4.5
        }
    ];

    static categoryItems = [
        {
            secondaryTitle: "fresh",
            secondaryColor: "#FF4344",
            primaryTitle: "Fruits",
            primaryColor: "#DD2021",
            iconURI: require('../components/Application/CategoryItem/Assets/Images/fresh_fruits_icon.png'),
            bgURI: require('../components/Application/CategoryItem/Assets/Images/fresh_fruits.png'),
            selected: true,
        },
        {
            secondaryTitle: "fresh",
            secondaryColor: "#ffa200",
            primaryTitle: "Dairy",
            primaryColor: "#ee7b00",
            iconURI: require('../components/Application/CategoryItem/Assets/Images/fresh_dairy_icon.png'),
            bgURI: require('../components/Application/CategoryItem/Assets/Images/fresh_dairy.png'),
            selected: false,
        },
        {
            secondaryTitle: "organic",
            secondaryColor: "#7ad228",
            primaryTitle: "Vegetables",
            primaryColor: "#519610",
            iconURI: require('../components/Application/CategoryItem/Assets/Images/organic_vegetable_icon.png'),
            bgURI: require('../components/Application/CategoryItem/Assets/Images/organic_vegetable.png'),
            selected: false,
        },
        {
            secondaryTitle: "original",
            secondaryColor: "#1faaff",
            primaryTitle: "Medicine",
            primaryColor: "#0076be",
            iconURI: require('../components/Application/CategoryItem/Assets/Images/original_medicine_icon.png'),
            bgURI: require('../components/Application/CategoryItem/Assets/Images/original_medicine.png'),
            selected: false,
        },
        {
            secondaryTitle: "quality",
            secondaryColor: "#18e2d6",
            primaryTitle: "Bakery",
            primaryColor: "#09bcb1",
            iconURI: require('../components/Application/CategoryItem/Assets/Images/quality_bakery_icon.png'),
            bgURI: require('../components/Application/CategoryItem/Assets/Images/quality_bakery.png'),
            selected: false,
        },
        {
            secondaryTitle: "baby",
            secondaryColor: "#D250E9",
            primaryTitle: "Products",
            primaryColor: "#A627BC",
            iconURI: require('../components/Application/CategoryItem/Assets/Images/baby_products_icon.png'),
            bgURI: require('../components/Application/CategoryItem/Assets/Images/baby_products.png'),
            selected: false,
        },
        {
            secondaryTitle: "fresh",
            secondaryColor: "#E26D3F",
            primaryTitle: "chicken",
            primaryColor: "#B24E27",
            iconURI: require('../components/Application/CategoryItem/Assets/Images/fresh_chicken_icon.png'),
            bgURI: require('../components/Application/CategoryItem/Assets/Images/fresh_chicken.png'),
            selected: false,
        },
        {
            secondaryTitle: "fresh",
            secondaryColor: "#9DB6CF",
            primaryTitle: "fishes",
            primaryColor: "#7A91A8",
            iconURI: require('../components/Application/CategoryItem/Assets/Images/fresh_fishes_icon.png'),
            bgURI: require('../components/Application/CategoryItem/Assets/Images/fresh_fishes.png'),
            selected: false,
        },
        {
            secondaryTitle: "organic",
            secondaryColor: "#7AD228",
            primaryTitle: "salads",
            primaryColor: "#519610",
            iconURI: require('../components/Application/CategoryItem/Assets/Images/organic_salads_icon.png'),
            bgURI: require('../components/Application/CategoryItem/Assets/Images/organic_salads.png'),
            selected: false,
        },
        {
            secondaryTitle: "pet",
            secondaryColor: "#B6833D",
            primaryTitle: "foods",
            primaryColor: "#A26E27",
            iconURI: require('../components/Application/CategoryItem/Assets/Images/pet_foods_icon.png'),
            bgURI: require('../components/Application/CategoryItem/Assets/Images/pet_foods.png'),
            selected: false,
        },
        {
            secondaryTitle: "quality",
            secondaryColor: "#C5150C",
            primaryTitle: "pizzas",
            primaryColor: "#A8130B",
            iconURI: require('../components/Application/CategoryItem/Assets/Images/quality_pizzas_icon.png'),
            bgURI: require('../components/Application/CategoryItem/Assets/Images/quality_pizzas.png'),
            selected: false,
        },
        {
            secondaryTitle: "sport",
            secondaryColor: "#2A56F5",
            primaryTitle: "goods",
            primaryColor: "#1E40BD",
            iconURI: require('../components/Application/CategoryItem/Assets/Images/sport_goods_icon.png'),
            bgURI: require('../components/Application/CategoryItem/Assets/Images/sport_goods.png'),
            selected: false,
        }
    ];

    static addressItems = [
        {
            key: 0,
            isDefault: true,
            name: 'William Crown',
            address: "2811 Crescent Day, LA Port California, United States, 77511",
            phone: "+1 122 541 1234",

            city: "California",
            state: "United States",
            postalCode: "77547",

            isActive: false,

            spinValue: new Animated.Value(0)
        },
        {
            key: 1,
            isDefault: false,
            name: 'John Doe',
            address: "2811 Crescent Day, LA Port California, United States, 77511",
            phone: "+1 122 541 1234",

            city: "California",
            state: "United States",
            postalCode: "77547",

            isActive: false,

            spinValue: new Animated.Value(0)

        },
        {
            key: 2,
            isDefault: false,
            name: 'William Crown',
            address: "2811 Crescent Day, LA Port California, United States, 77511",
            phone: "+1 122 541 1234",

            city: "California",
            state: "United States",
            postalCode: "77547",

            isActive: false,

            spinValue: new Animated.Value(0)

        },
        {
            key: 3,
            isDefault: false,
            name: 'John Doe',
            address: "2811 Crescent Day, LA Port California, United States, 77511",
            phone: "+1 122 541 1234",

            isActive: false,

            city: "California",
            state: "United States",
            postalCode: "77547",

            spinValue: new Animated.Value(0)
        },
        {
            key: 4,
            isDefault: false,
            name: 'William Crown',
            address: "2811 Crescent Day, LA Port California, United States, 77511",
            phone: "+1 122 541 1234",

            isActive: false,

            city: "California",
            state: "United States",
            postalCode: "77547",

            spinValue: new Animated.Value(0)
        },
        {
            key: 5,
            isDefault: false,
            name: 'John Doe',
            address: "2811 Crescent Day, LA Port California, United States, 77511",
            phone: "+1 122 541 1234",

            isActive: false,

            city: "California",
            state: "United States",
            postalCode: "77547",

            spinValue: new Animated.Value(0)
        }
    ];

    static paymentMethodItems = {

        cardItems: [
            {
                key: 0,
                isDefault: true,
                isActive: true,

                type: 'Master Card',
                cardNo: "XXXX XXXX XXXX 3694",
                expiry: "01/25",
                CVV: "512",

                spinValue: new Animated.Value(0)
            },
            {
                key: 1,
                isDefault: false,
                isActive: false,


                type: 'Visa Card',
                cardNo: "XXXX XXXX XXXX 3694",
                expiry: "01/25",
                CVV: "512",

                spinValue: new Animated.Value(0)
            },
            {
                key: 2,
                isDefault: false,
                isActive: false,

                type: 'Master Card',
                cardNo: "XXXX XXXX XXXX 3694",
                expiry: "01/25",
                CVV: "512",

                spinValue: new Animated.Value(0)
            },
            {
                key: 3,
                isDefault: false,
                isActive: false,

                type: 'Visa Card',
                cardNo: "XXXX XXXX XXXX 3694",
                expiry: "01/25",
                CVV: "512",

                spinValue: new Animated.Value(0)
            },
            {
                key: 4,
                isDefault: false,
                isActive: false,


                type: 'Master Card',
                cardNo: "XXXX XXXX XXXX 3694",
                expiry: "01/25",
                CVV: "512",

                spinValue: new Animated.Value(0)
            },
            {
                key: 5,
                isDefault: false,
                isActive: false,


                type: 'Visa Card',
                cardNo: "XXXX XXXX XXXX 3694",
                expiry: "01/25",
                CVV: "512",

                spinValue: new Animated.Value(0)
            }
        ],
        paypalItems: [
            {
                key: 0,
                isDefault: true,
                isActive: true,

                type: 'Paypal',
                name: 'Katherine Muguel',
                email: "gfx********@gmail.com",
                addedOn: "11/07/2020",

                spinValue: new Animated.Value(0)

            },
            {
                key: 1,
                isDefault: false,
                isActive: false,

                type: 'Paypal',
                name: 'William J Brown',
                email: "gfx********@gmail.com",
                addedOn: "11/07/2020",

                spinValue: new Animated.Value(0)

            },
            {
                key: 2,
                isDefault: false,
                isActive: false,

                type: 'Paypal',
                name: 'Jasson Blue',
                email: "gfx********@gmail.com",
                addedOn: "11/07/2020",

                spinValue: new Animated.Value(0)

            },
            {
                key: 3,
                isDefault: false,
                isActive: false,

                type: 'Paypal',
                name: 'Katherine Muguel',
                email: "gfx********@gmail.com",
                addedOn: "11/07/2020",

                spinValue: new Animated.Value(0)

            },
            {
                key: 4,
                isDefault: false,
                isActive: false,

                type: 'Paypal',
                name: 'William J Brown',
                email: "gfx********@gmail.com",
                addedOn: "11/07/2020",

                spinValue: new Animated.Value(0)

            },
            {
                key: 5,
                isDefault: false,
                isActive: false,

                type: 'Paypal',
                name: 'Jasson Blue',
                email: "gfx********@gmail.com",
                addedOn: "11/07/2020",

                spinValue: new Animated.Value(0)

            }
        ],
        paymentMethods: [
            {
                id: 1,
                isActive: true,
                icon: assets.credit_card_icon,
                type: 'Credit Card',
            },
            {
                id: 2,
                isActive: false,
                icon: assets.paypal_icon,
                type: 'Paypal',
            },
            {
                id: 3,
                isActive: false,
                icon: assets.apple_icon,
                type: 'Apple Pay',
            },
            {
                id: 4,
                isActive: false,
                icon: assets.transaction_icon,
                type: 'Cash on Delivery',
            },
            {
                id: 5,
                isActive: false,
                icon: assets.cart_regular_icon,
                type: 'Self Pickup',
            }
        ]

    }

    static favouritesList = [
        {
            backgroundColor: "#6cc51d",
            itemLabel: "Groceries",
            selected: false
        },
        {
            backgroundColor: "#bf0d3f",
            itemLabel: "Sunday Snacks",
            selected: true
        },
        {
            backgroundColor: "#f88e11",
            itemLabel: "Vegetables",
            selected: false
        },
        {
            backgroundColor: "#efb019",
            itemLabel: "Snacks",
            selected: false
        },
        {
            backgroundColor: "#b71dc5",
            itemLabel: "fruits",
            selected: false
        },
        {
            backgroundColor: "#1d68c5",
            itemLabel: "Meat",
            selected: false
        },
        {
            backgroundColor: "#1dafc5",
            itemLabel: "Dieting Plan",
            selected: false
        },
        {
            backgroundColor: "#ccb7cc",
            itemLabel: "Sports",
            selected: false
        }
    ]

    static favouriteItems = [
        {
            key: 0,
            name: 'Groceries',
            totalItems: "4",
            addedOn: "11/07/2020",
            color: colors.activeColor,

            items: Globals.foodItems.slice(0, 4),

            spinValue: new Animated.Value(0)
        },
        {
            key: 1,
            name: 'Sunday Snacks',
            totalItems: "6",
            addedOn: "11/07/2020",
            color: colors.red,

            items: Globals.foodItems.slice(0, 6),

            spinValue: new Animated.Value(0)
        },
        {
            key: 2,
            name: 'Vegetables',
            totalItems: "2",
            addedOn: "11/07/2020",
            color: colors.orange,

            items: Globals.foodItems.slice(0, 2),

            spinValue: new Animated.Value(0)
        },
        {
            key: 3,
            name: 'Snacks',
            totalItems: "7",
            addedOn: "11/07/2020",
            color: colors.purple,

            items: Globals.foodItems.slice(0, 7),

            spinValue: new Animated.Value(0)
        },
    ]

    static searchHistoryItems = [
        "Fresh Apricots",
        "Frozen Pizza",
        "Bananas",
        "Cheetos",
        "Discounted Items",
        "Fresh Vegetables",
    ]

    static transactionItems = [
        {
            type: 'Master Card',
            date: "Dec 10, 2020 at 10:00 PM",
            price: "$16.99",
        },
        {
            type: 'Visa',
            date: "Dec 10, 2020 at 10:00 PM",
            price: "$16.99",
        },
        {
            type: 'Paypal',
            date: "Dec 10, 2020 at 10:00 PM",
            price: "$16.99",
        },
        {
            type: 'Master Card',
            date: "Dec 10, 2020 at 10:00 PM",
            price: "$16.99",
        },
        {
            type: 'Paypal',
            date: "Dec 10, 2020 at 10:00 PM",
            price: "$16.99",
        },
        {
            type: 'Visa',
            date: "Dec 10, 2020 at 10:00 PM",
            price: "$16.99",
        },
        {
            type: 'Master Card',
            date: "Dec 10, 2020 at 10:00 PM",
            price: "$16.99",
        },
        {
            type: 'Visa',
            date: "Dec 10, 2020 at 10:00 PM",
            price: "$16.99",
        },
        {
            type: 'Paypal',
            date: "Dec 10, 2020 at 10:00 PM",
            price: "$16.99",
        },
        {
            type: 'Visa',
            date: "Dec 10, 2020 at 10:00 PM",
            price: "$16.99",
        },
        {
            type: 'Master Card',
            date: "Dec 10, 2020 at 10:00 PM",
            price: "$16.99",
        },
        {
            type: 'Master Card',
            date: "Dec 10, 2020 at 10:00 PM",
            price: "$16.99",
        },
        {
            type: 'Paypal',
            date: "Dec 10, 2020 at 10:00 PM",
            price: "$16.99",
        },
        {
            type: 'Visa',
            date: "Dec 10, 2020 at 10:00 PM",
            price: "$16.99",
        },
        {
            type: 'Master Card',
            date: "Dec 10, 2020 at 10:00 PM",
            price: "$16.99",
        }
    ];

    static ordersItems = [
        {
            title: 'First',
            orderNo: "Order # 44 698",
            dateTime: "Placed on December 15, 2020",
            items: '10',
            total: '$16.99',

            isOrderPlaced: true,
            orderPlaced: "Dec 10, 2020",
            isOrderConfirmed: true,
            orderConfirmed: "Dec 10, 2020",
            isOrderShipped: true,
            orderShipped: "Dec 10, 2020",
            isOrderOutOfDelivery: false,
            outOfDelivery: "Pending",
            isOrderDelivered: false,
            orderDelivered: "Pending",

            spinValue: new Animated.Value(0)
        },
        {
            title: 'First',
            orderNo: "Order # 44 698",
            dateTime: "Placed on December 15, 2020",
            items: '10',
            total: '$16.99',

            isOrderPlaced: true,
            orderPlaced: "Dec 10, 2020",
            isOrderConfirmed: true,
            orderConfirmed: "Dec 10, 2020",
            isOrderShipped: true,
            orderShipped: "Dec 10, 2020",
            isOrderOutOfDelivery: false,
            outOfDelivery: "Pending",
            isOrderDelivered: false,
            orderDelivered: "Pending",

            spinValue: new Animated.Value(0)

        },
        {
            title: 'First',
            orderNo: "Order # 44 698",
            dateTime: "Placed on December 15, 2020",
            items: '10',
            total: '$16.99',

            isOrderPlaced: true,
            orderPlaced: "Dec 10, 2020",
            isOrderConfirmed: true,
            orderConfirmed: "Dec 10, 2020",
            isOrderShipped: true,
            orderShipped: "Dec 10, 2020",
            isOrderOutOfDelivery: false,
            outOfDelivery: "Pending",
            isOrderDelivered: false,
            orderDelivered: "Pending",

            spinValue: new Animated.Value(0)

        },
        {
            title: 'First',
            orderNo: "Order # 44 698",
            dateTime: "Placed on December 15, 2020",
            items: '10',
            total: '$16.99',

            isOrderPlaced: true,
            orderPlaced: "Dec 10, 2020",
            isOrderConfirmed: true,
            orderConfirmed: "Dec 10, 2020",
            isOrderShipped: true,
            orderShipped: "Dec 10, 2020",
            isOrderOutOfDelivery: false,
            outOfDelivery: "Pending",
            isOrderDelivered: false,
            orderDelivered: "Pending",

            spinValue: new Animated.Value(0)

        },
        {
            title: 'First',
            orderNo: "Order # 44 698",
            dateTime: "Placed on December 15, 2020",
            items: '10',
            total: '$16.99',

            isOrderPlaced: true,
            orderPlaced: "Dec 10, 2020",
            isOrderConfirmed: true,
            orderConfirmed: "Dec 10, 2020",
            isOrderShipped: true,
            orderShipped: "Dec 10, 2020",
            isOrderOutOfDelivery: false,
            outOfDelivery: "Pending",
            isOrderDelivered: false,
            orderDelivered: "Pending",

            spinValue: new Animated.Value(0)

        },
        {
            title: 'First',
            orderNo: "Order # 44 698",
            dateTime: "Placed on December 15, 2020",
            items: '10',
            total: '$16.99',

            isOrderPlaced: true,
            orderPlaced: "Dec 10, 2020",
            isOrderConfirmed: true,
            orderConfirmed: "Dec 10, 2020",
            isOrderShipped: true,
            orderShipped: "Dec 10, 2020",
            isOrderOutOfDelivery: false,
            outOfDelivery: "Pending",
            isOrderDelivered: false,
            orderDelivered: "Pending",

            spinValue: new Animated.Value(0)

        },
        {
            title: 'First',
            orderNo: "Order # 44 698",
            dateTime: "Placed on December 15, 2020",
            items: '10',
            total: '$16.99',

            isOrderPlaced: false,
            orderPlaced: "Dec 10, 2020",
            isOrderConfirmed: false,
            orderConfirmed: "Dec 10, 2020",
            isOrderShipped: false,
            orderShipped: "Dec 10, 2020",
            isOrderOutOfDelivery: false,
            outOfDelivery: "Dec 10, 2020",
            isOrderDelivered: true,
            orderDelivered: "Dec 10, 2020",

            spinValue: new Animated.Value(0)

        },
        {
            title: 'First',
            orderNo: "Order # 44 698",
            dateTime: "Placed on December 15, 2020",
            items: '10',
            total: '$16.99',

            isOrderPlaced: false,
            orderPlaced: "Dec 10, 2020",
            isOrderConfirmed: false,
            orderConfirmed: "Dec 10, 2020",
            isOrderShipped: false,
            orderShipped: "Dec 10, 2020",
            isOrderOutOfDelivery: false,
            outOfDelivery: "Dec 10, 2020",
            isOrderDelivered: true,
            orderDelivered: "Dec 10, 2020",

            spinValue: new Animated.Value(0)

        },
        {
            title: 'First',
            orderNo: "Order # 44 69812",
            dateTime: "Placed on December 15, 2020",
            items: '10',
            total: '$16.99',


            isOrderPlaced: false,
            orderPlaced: "Dec 10, 2020",
            isOrderConfirmed: false,
            orderConfirmed: "Dec 10, 2020",
            isOrderShipped: false,
            orderShipped: "Dec 10, 2020",
            isOrderOutOfDelivery: false,
            outOfDelivery: "Dec 10, 2020",
            isOrderDelivered: true,
            orderDelivered: "Dec 10, 2020",


            spinValue: new Animated.Value(0)

        },
    ];

    static reviewsList = [
        {
            profileImage: require('../screens/ReviewList/Assets/Images/review_author_img1.png'),
            fullName: "David Martin",
            reviewTime: "32 minutes ago",
            rating: 4.5,
            comment: "Carter team is fast and always deliver fresh fruits. Highly Recommend!"
        },
        {
            profileImage: require('../screens/ReviewList/Assets/Images/review_author_img2.png'),
            fullName: "David Martin",
            reviewTime: "32 minutes ago",
            rating: 3.5,
            comment: "Best apples on the market hands down. I almost order them everyday."
        },
        {
            profileImage: require('../screens/ReviewList/Assets/Images/review_author_img3.png'),
            fullName: "David Martin",
            reviewTime: "32 minutes ago",
            rating: 5,
            comment: "Carter team is fast and always deliver fresh fruits. Highly Recommend!"
        },
        {
            profileImage: require('../screens/ReviewList/Assets/Images/review_author_img4.png'),
            fullName: "David Martin",
            reviewTime: "32 minutes ago",
            rating: 4,
            comment: "Best apples on the market hands down. I almost order them everyday."
        },
        {
            profileImage: require('../screens/ReviewList/Assets/Images/review_author_img1.png'),
            fullName: "David Martin",
            reviewTime: "32 minutes ago",
            rating: 4.5,
            comment: "Carter team is fast and always deliver fresh fruits. Highly Recommend!"
        }


    ]

    static profileList = (navigation) => {
        return [
            {
                icon: assets.user_icon,
                title: "About me",
                onPress: () => navigation.navigate(Routes.ABOUT_ME)
            },
            {
                icon: assets.order_icon,
                title: "My Orders",
                onPress: () => navigation.navigate(Routes.MY_ORDERS)
            },
            {
                icon: assets.map_marker_icon,
                title: "My Addresses",
                onPress: () => navigation.navigate(Routes.My_Address)
            },
            {
                icon: assets.credit_card_icon,
                title: "Credit Cards",
                onPress: () => navigation.navigate(Routes.My_CREDIT_CARDS)
            },
            {
                icon: assets.transaction_icon,
                title: "Transactions",
                onPress: () => navigation.navigate(Routes.TRANSACTIONS)
            },
            {
                icon: assets.notification_icon,
                title: "Notifications",
                onPress: () => navigation.navigate(Routes.NOTIFICATIONS)
            },
            {
                icon: assets.categories_icon,
                title: "Categories",
                onPress: () => navigation.navigate(Routes.CATEGORY_LIST)
            },
            {
                icon: assets.sign_out_icon,
                title: "Sign out",
                onPress: () => navigation.dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [
                            {name: Config.SELECTED_VARIANT},
                        ],
                    })
                )
            },
        ]
    }

    static otherFilters = [
        {
            id: 1,
            leftIcon: assets.discount_icon,
            title: "Discount",
            checked: false
        },
        {
            id: 2,
            leftIcon: assets.shipping_icon,
            title: "Free Shipping",
            checked: false
        },
        {
            id: 3,
            leftIcon: assets.same_day_delivery_icon,
            title: "Same Day Delivery",
            checked: false
        }
    ]

    static filterCategories = [
        {
            id: 1,
            leftIcon: assets.fruits_icon,
            title: "Fresh Fruits",
            checked: false
        },
        {
            id: 2,
            leftIcon: assets.chicken_icon,
            title: "Fresh Chicken",
            checked: false
        },
        {
            id: 3,
            leftIcon: assets.dairy_icon,
            title: "Fresh Dairy",
            checked: false
        },
        {
            id: 4,
            leftIcon: assets.fishes_icon,
            title: "Fresh Fishes",
            checked: false
        },
        {
            id: 5,
            leftIcon: assets.vegetables_icon,
            title: "Fresh Vegetables",
            checked: false
        },
        {
            id: 6,
            leftIcon: assets.salad_icon,
            title: "Organic Salads",
            checked: false
        },
        {
            id: 7,
            leftIcon: assets.medicine_icon,
            title: "Original Medicine",
            checked: false
        },
        {
            id: 8,
            leftIcon: assets.pets_icon,
            title: "Pet Foods",
            checked: false
        },
        {
            id: 9,
            leftIcon: assets.bakery_icon,
            title: "Quality Bakery",
            checked: false
        },
        {
            id: 10,
            leftIcon: assets.pizza_icon,
            title: "Quality Pizza",
            checked: false
        },
        {
            id: 11,
            leftIcon: assets.baby_products_icon,
            title: "Baby Products",
            checked: false
        },
        {
            id: 12,
            leftIcon: assets.sports_icon,
            title: "Sports Goods",
            checked: false
        }
    ];

}

export default Globals;
