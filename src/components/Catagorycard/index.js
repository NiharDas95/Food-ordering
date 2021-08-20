import "./Catagorycard.css";
import { Link } from 'react-router-dom';
function Catagorycard ({desc,imageUrl,catagory}) {
  const routeName = `/catagory/${catagory}`
    return (
      <Link to={routeName}>
        <div className="catagory-container">
          <img src={imageUrl} alt={desc} width="450" height="333"></img>
            <span className="desc">
              {desc}
            </span>
        </div> 
      </Link>
            
     
    )
}
export default Catagorycard;