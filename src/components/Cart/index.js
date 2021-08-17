import "./Cart.css";
function Cart(props) {
    function clickHandler () {

    }
    return (
      <div className="cart-box" onClick={clickHandler}>
          Cart <span className="cart-count">20</span>
      </div>
    )
}

export default Cart;