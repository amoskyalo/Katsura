import bugger from "../../assets/Categories/bugger.png";
import pizza from "../../assets/Categories/pizza.png";
import salad from "../../assets/Categories/salad.png";
import shishi from "../../assets/Categories/shishi.png";
import chicken from "../../assets/Categories/chicken.png";

import beef from "../../assets/Burger/beef.png";
import cheese from "../../assets/Burger/cheese.png";
import hawaiian from "../../assets/Burger/hawa.png";
import paneer from "../../assets/Burger/paneer.png";
import prince from "../../assets/Burger/prince.png";
import urban from "../../assets/Burger/Urban.png";

import beef2 from "../../assets/Order/beef.png";
import lettuce from "../../assets/Order/lettuce.png";
import olive from "../../assets/Order/olive.png";
import egg from "../../assets/Order/egg.png";
import tomato from "../../assets/Order/tomato.png";

export const data = [
  {
    name: "Burger",
    image: bugger,
  },
  {
    name: "Pizza",
    image: pizza,
  },
  {
    name: "Salad",
    image: salad,
  },
  {
    name: "Chicken",
    image: chicken,
  },
  {
    name: "Shushi",
    image: shishi,
  },
];

export const populars = [
  {
    name: "Beef Burger",
    image: beef,
    id: "_1",
    price: 225,
    delivery_time: "10 mins",
    dietary: "Vegan",
    rating: 1,
    popular: "Deals",
    subText: "Beef Patty and special sauce",
    ingridients: [
      {
        name: "Beef",
        image: beef2,
      },
      {
        name: "Lettuce",
        image: lettuce,
      },
      {
        name: "Olive Oil",
        image: olive,
      },
      {
        name: "Egg",
        image: egg,
      },
      {
        name: "Tomato",
        image: tomato,
      },
    ],
  },
  {
    name: "Urban Burger",
    image: urban,
    id: "_2",
    price: 50,
    delivery_time: "20 mins",
    dietary: "Gluten-free",
    rating: 3,
    popular: "For you",
    subText: "Beef Patty and special sauce",
    ingridients: [
      {
        name: "Beef",
        image: beef2,
      },
      {
        name: "Lettuce",
        image: lettuce,
      },
      {
        name: "Olive Oil",
        image: olive,
      },
      {
        name: "Egg",
        image: egg,
      },
      {
        name: "Tomato",
        image: tomato,
      },
    ],
  },
  {
    name: "Hawaiian King Burger",
    image: hawaiian,
    id: "_3",
    price: 66,
    delivery_time: "10 mins",
    dietary: "Vegetarian",
    rating: 2,
    popular: "Deals",
    subText: "Beef Patty and special sauce",
    ingridients: [
      {
        name: "Beef",
        image: beef2,
      },
      {
        name: "Lettuce",
        image: lettuce,
      },
      {
        name: "Olive Oil",
        image: olive,
      },
      {
        name: "Egg",
        image: egg,
      },
      {
        name: "Tomato",
        image: tomato,
      },
    ],
  },
  {
    name: "Paneer Burger",
    image: paneer,
    id: "_4",
    price: 90,
    delivery_time: "30 mins",
    dietary: "Gluten-free",
    rating: 4,
    popular: "For you",
    subText: "Beef Patty and special sauce",
    ingridients: [
      {
        name: "Beef",
        image: beef2,
      },
      {
        name: "Lettuce",
        image: lettuce,
      },
      {
        name: "Olive Oil",
        image: olive,
      },
      {
        name: "Egg",
        image: egg,
      },
      {
        name: "Tomato",
        image: tomato,
      },
    ],
  },
  {
    name: "Cheese Veg Burger",
    image: cheese,
    id: "_5",
    price: 41,
    delivery_time: "20 mins",
    dietary: "Vegan",
    rating: 2,
    popular: "Deals",
    subText: "Beef Patty and special sauce",
    ingridients: [
      {
        name: "Beef",
        image: beef2,
      },
      {
        name: "Lettuce",
        image: lettuce,
      },
      {
        name: "Olive Oil",
        image: olive,
      },
      {
        name: "Egg",
        image: egg,
      },
      {
        name: "Tomato",
        image: tomato,
      },
    ],
  },
  {
    name: "Prince Burger Meal",
    image: prince,
    id: "_6",
    price: 13,
    delivery_time: "30 mins",
    dietary: "Vegetarian",
    rating: 5,
    popular: "For you",
    subText: "Beef Patty and special sauce",
    ingridients: [
      {
        name: "Beef",
        image: beef2,
      },
      {
        name: "Lettuce",
        image: lettuce,
      },
      {
        name: "Olive Oil",
        image: olive,
      },
      {
        name: "Egg",
        image: egg,
      },
      {
        name: "Tomato",
        image: tomato,
      },
    ],
  },
];
