import Itemcard from "../../components/Item-card/index";
import Card from "../../components/Card/index";
import "./Listing-page.css";
import {useState} from 'react';
import { useParams } from "react-router-dom";
function Listing (props) {
    console.log(props);
    const { catag } = useParams();
    console.log('listing catag', catag);
    const data = [
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
    ];
    const [masterData, updateData] = useState(data);
    function increaseCartItem (event,index) {
    console.log("increase",event);
    console.log("decrease",event,index);
    masterData[index]['cartQuantity'] = masterData[index]['cartQuantity'] + 1;
    const updatedList = [...masterData]
     updateData(updatedList);
    }
    function decreaseCartItem (event,index) {
    console.log("decrease",event,index);
    masterData[index]['cartQuantity'] = masterData[index]['cartQuantity'] - 1;
    const updatedList = [...masterData]
     updateData(updatedList);
    }
    return (
        <div className="cardswraper">
            <h1>components Working wiyh {catag}</h1>
          {  masterData.map((item, index) => {
         return (
            <Card>
                <Itemcard desc={item.desc} key={item.key} price={item.price} index={index}
                cartQty={item.cartQuantity} incrementHandler={increaseCartItem} decrementHandler={decreaseCartItem}/>
            </Card>
         )
     })}
        </div>
     
    )
}
export default Listing;