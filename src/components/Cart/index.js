import MyContext from "../../common/MyContext";
import "./Cart.css";
function Cart(props) {
  function clickHandler() {
   console.log('cart component');
  }
  return (
    <MyContext.Consumer>
       
      {context => {
        console.log(context);
      return (
        <div className="cart-box" onClick={clickHandler}>
        Cart <span className="cart-count"> {
          context.dishes.reduce((total,curr)=> total + curr.cartQuantity ,0)
        }
        </span>
     </div>
      )
       
      

      
      }
      }
         
      
      
    </MyContext.Consumer>

  )
}

export default Cart;