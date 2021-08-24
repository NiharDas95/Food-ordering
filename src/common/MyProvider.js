import { Component } from "react";
import MyContext from "./MyContext";

class MyProvider extends Component {
    state = { dishes :[
        {
            "desc": "Chicken Butter Masala",
            "catagory": "tandoor",
            "key": 1,
            "price": "250",
            "cartQuantity": 0
        },
        {
            "desc": "Chilli Paneer",
            "catagory": "chinese",
            "key": 2,
            "price": "200",
            "cartQuantity": 2
        },
        {
            "desc": "Egg Noodles",
            "catagory": "chinese",
            "key": 3,
            "price": "200",
            "cartQuantity": 2
        },
        {
            "desc": "Chow Chow",
            "catagory": "chinese",
            "key": 4,
            "price": "200",
            "cartQuantity": 2
        },
        {
            "desc": "Bhindi Masala",
            "catagory": "indian",
            "key": 5,
            "price": "150",
            "cartQuantity": 1
        },
        {
            "desc": "Dal fry",
            "catagory": "indian",
            "key": 6,
            "price": "150",
            "cartQuantity": 0
        },
        {
            "desc": "Naan",
            "catagory": "Tandoor",
            "key": 7,
            "price": "150",
            "cartQuantity": 0
        },
        {
            "desc": "Chicken tikka",
            "catagory": "tandoor",
            "key": 8,
            "price": "150",
            "cartQuantity": 0
        },
        {
            "desc": "Kebab",
            "catagory": "tandoor",
            "key": 9,
            "price": "150",
            "cartQuantity": 0
        },
    ]
};
    render () {
        return (
            <MyContext.Provider
            value={{
               dishes: this.state.dishes,
               incrementCart: selectedIndex => {
                   const dishes = [...this.state.dishes];
                   dishes[selectedIndex].cartQuantity =  dishes[selectedIndex].cartQuantity + 1;
                   this.setState({'dishes': dishes});
                   console.log(this.state);
               },
               decrementCart: selectedIndex => {
                   const dishes = [...this.state.dishes];
                   dishes[selectedIndex].cartQuantity =  dishes[selectedIndex].cartQuantity - 1;
                   this.setState({'dishes': dishes});
                   console.log(this.state);
               },


            }}
            >
            {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;