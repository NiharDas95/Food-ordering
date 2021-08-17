import "./Item-card.css"
function Itemcard (props) {
    return (
     <div className="container">
       <span className="desc">
           {props.desc}
       </span>
       <span className="price">₹{props.price}</span>
       <hr/>
     </div>
    )
}
export default Itemcard;