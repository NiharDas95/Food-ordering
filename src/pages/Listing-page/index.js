import Itemcard from "../../components/Item-card/index";
import Card from "../../components/Card/index";
import "./Listing-page.css";
function Listing () {
    const data = [
        {
            "desc": "Chicken Butter Masala",
            "key": 1,
            "price": "250"
        },
        {
            "desc": "Chilli Paneer",
            "key": 2,
            "price": "200"
        },
        {
            "desc": "Bhindi Masala",
            "key": 3,
            "price": "150"
        },
        {
            "desc": "Dal fry",
            "key": 4,
            "price": "150"
        }
    ];
    return (
        <div className="cardswraper">
          {  data.map(item => {
         return (
            <Card>
                <Itemcard desc={item.desc} key={item.key} price={item.price}/>
            </Card>
         )
     })}
        </div>
     
    )
}
export default Listing;