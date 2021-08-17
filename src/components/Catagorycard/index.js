import "./Catagorycard.css";
import {Link} from 'react-router-dom';
function Catagorycard (props) {
    return (
        <Link to="/item"><div className="catagory-container">
         
        <img src={props.img} alt={props.desc} width="500" height="333"></img>
      <span className="desc">
          {props.desc}
      </span>
    </div></Link>
     
    )
}
export default Catagorycard;