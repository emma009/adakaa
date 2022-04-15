

class Globals {


    static SAFE_AREA_INSET = {}

    static foodItems= [
        {
            title: "Organic lemons",
            image: require("../components/Application/FoodItem/Assets/Images/OrganicLemons.png"),
            bigImage: require("../components/Application/FoodItem/Assets/Images/BigImage.png"),
            price: "$1.22",
            weight: "1.50 lbs",
            discount:"15%",
            cartCount: 0,
            isFavourite: false,
            detail: "Pomegranate is one of the healthiest fruits on earth. Pomegranate has many incredible health benefits for your body. It is called as a divine fruit because it is the most mentioned fruit in theological books.",
            ratingValue: 1
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
            ratingValue: 1
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
            ratingValue: 1
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
            ratingValue: 1
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
            ratingValue: 1
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
            ratingValue: 1
        }
    ];

    static categoryItems = [
        {
            secondaryTitle: "fresh",
            secondaryColor: "#FF4344",
            primaryTitle: "Fruits",
            primaryColor: "#DD2021",
            iconURI: require('../components/Application/CategoryItem/Assets/Images/fresh_fruits_icon.png'),
            bgURI: require('../components/Application/CategoryItem/Assets/Images/fresh_fruits.png')
        },
        {
            secondaryTitle: "fresh",
            secondaryColor: "#ffa200",
            primaryTitle: "Dairy",
            primaryColor: "#ee7b00",
            iconURI: require('../components/Application/CategoryItem/Assets/Images/fresh_dairy_icon.png'),
            bgURI: require('../components/Application/CategoryItem/Assets/Images/fresh_dairy.png')
        },
        {
            secondaryTitle: "organic",
            secondaryColor: "#7ad228",
            primaryTitle: "Vegetables",
            primaryColor: "#519610",
            iconURI: require('../components/Application/CategoryItem/Assets/Images/organic_vegetable_icon.png'),
            bgURI: require('../components/Application/CategoryItem/Assets/Images/organic_vegetable.png')
        },
        {
            secondaryTitle: "original",
            secondaryColor: "#1faaff",
            primaryTitle: "Medicine",
            primaryColor: "#0076be",
            iconURI: require('../components/Application/CategoryItem/Assets/Images/original_medicine_icon.png'),
            bgURI: require('../components/Application/CategoryItem/Assets/Images/original_medicine.png')
        },
        {
            secondaryTitle: "quality",
            secondaryColor: "#18e2d6",
            primaryTitle: "Bakery",
            primaryColor: "#09bcb1",
            iconURI: require('../components/Application/CategoryItem/Assets/Images/quality_bakery_icon.png'),
            bgURI: require('../components/Application/CategoryItem/Assets/Images/quality_bakery.png')
        },
        {
            secondaryTitle: "baby",
            secondaryColor: "#D250E9",
            primaryTitle: "Products",
            primaryColor: "#A627BC",
            iconURI: require('../components/Application/CategoryItem/Assets/Images/baby_products_icon.png'),
            bgURI: require('../components/Application/CategoryItem/Assets/Images/baby_products.png')
        },
        {
            secondaryTitle: "fresh",
            secondaryColor: "#E26D3F",
            primaryTitle: "chicken",
            primaryColor: "#B24E27",
            iconURI: require('../components/Application/CategoryItem/Assets/Images/fresh_chicken_icon.png'),
            bgURI: require('../components/Application/CategoryItem/Assets/Images/fresh_chicken.png')
        },
        {
            secondaryTitle: "fresh",
            secondaryColor: "#9DB6CF",
            primaryTitle: "fishes",
            primaryColor: "#7A91A8",
            iconURI: require('../components/Application/CategoryItem/Assets/Images/fresh_fishes_icon.png'),
            bgURI: require('../components/Application/CategoryItem/Assets/Images/fresh_fishes.png')
        },
        {
            secondaryTitle: "organic",
            secondaryColor: "#7AD228",
            primaryTitle: "salads",
            primaryColor: "#519610",
            iconURI: require('../components/Application/CategoryItem/Assets/Images/organic_salads_icon.png'),
            bgURI: require('../components/Application/CategoryItem/Assets/Images/organic_salads.png')
        },
        {
            secondaryTitle: "pet",
            secondaryColor: "#B6833D",
            primaryTitle: "foods",
            primaryColor: "#A26E27",
            iconURI: require('../components/Application/CategoryItem/Assets/Images/pet_foods_icon.png'),
            bgURI: require('../components/Application/CategoryItem/Assets/Images/pet_foods.png')
        },
        {
            secondaryTitle: "quality",
            secondaryColor: "#C5150C",
            primaryTitle: "pizzas",
            primaryColor: "#A8130B",
            iconURI: require('../components/Application/CategoryItem/Assets/Images/quality_pizzas_icon.png'),
            bgURI: require('../components/Application/CategoryItem/Assets/Images/quality_pizzas.png')
        },
        {
            secondaryTitle: "sport",
            secondaryColor: "#2A56F5",
            primaryTitle: "goods",
            primaryColor: "#1E40BD",
            iconURI: require('../components/Application/CategoryItem/Assets/Images/sport_goods_icon.png'),
            bgURI: require('../components/Application/CategoryItem/Assets/Images/sport_goods.png')
        }
    ];




}
export default Globals;
