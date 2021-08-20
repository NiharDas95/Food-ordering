import "./Catagorycard.css";
import {Link, useHistory} from 'react-router-dom';
function Catagorycard ({desc,key,imageUrl,catagory}) {
   const history=useHistory();
    return (
        
            <div onClick={()=>history.push(`/catagory?catag=${catagory}`)} className="catagory-container">
         
        <img src={imageUrl} alt={desc} width="450" height="333"></img>
      <span className="desc">
          {desc}
      </span>
    </div>
     
    )
}
export default Catagorycard;