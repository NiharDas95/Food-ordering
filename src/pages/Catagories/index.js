import './Catagories.css';
import Card from '../../components/Card';
import Catagorycard from '../../components/Catagorycard';
function Catagories () {
    const catagoryList = [
        {
            "desc": "Chinese",
            "key": 1,
            "catagory": "chinese",
            "imageUrl": "https://b.zmtcdn.com/data/pictures/6/19514146/fed021bea23452d3bb605e22b2776e89_o2_featured_v2.jpg"
        },
        {
            "desc": "Tandoor",
            "catagory": "tandoor",
            "key": 2,
            "imageUrl": "https://b.zmtcdn.com/data/pictures/3/18825693/95010720a5c54c2923e6290d5cf63dc4_o2_featured_v2.jpg"
        },
        {
            "desc": "Briyani",
            "catagory": "briyani",
            "key": 3,
            "imageUrl": "https://b.zmtcdn.com/data/pictures/7/19108157/4e2d14a5b180ac3b3e6bb8e2ed2047fa_o2_featured_v2.jpg"
        },
        {
            "desc": "South Indian",
            "catagory": "southIndian",
            "key": 4,
            "imageUrl": "https://b.zmtcdn.com/data/pictures/0/2900050/09c15fafc2fee111a5b531ad8df45ace_o2_featured_v2.jpg"
        }
    ];
    return (
        <div className="catagories-wraper">
          {  catagoryList.map(item => {
         return (
            <Card>
                <Catagorycard {...item} />
            </Card>
         )
     })}
        </div>
     
    )
}
export default Catagories;