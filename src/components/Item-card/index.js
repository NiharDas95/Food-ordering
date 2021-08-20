import "./Item-card.css"
function Itemcard (props) {
   function  addToCartHandler () {
      console.log("add to cart");
    }
    return (
     <div className="container">
       <span className="desc">
           {props.desc}
       </span>
       <span className="price">₹{props.price}</span>
       <hr/>
       <div className="cart-field">
         <button disabled={props.cartQty === 0 && true}  onClick={ (e) => props.decrementHandler(e, props.index)}>-</button>
         <input readOnly value={props.cartQty} /> 
         <button  onClick={ (e) => props.incrementHandler(e, props.index)}>+</button>
       </div>
       <div className="btn-wraper">
         <button disabled={props.cartQty === 0} onClick={addToCartHandler}>
           Add to Cart
         </button>
       </div>
     </div>
    )
}
export default Itemcard;