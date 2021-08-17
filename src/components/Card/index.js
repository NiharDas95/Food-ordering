import "./Card.css"
function Card (props) {
    return (
        <div className="wraper">
        {props.children}
       </div>
    )

}

export default Card;