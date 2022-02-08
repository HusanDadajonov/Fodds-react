function Card({img,title,price,bowl}){
    return(
        <li className="cards__item">
            <div className="cards__img--wrap">
                <img className="cards__img" src={img} alt="food" />
            </div>
            <h3 className="cards__item--title">{title}</h3>
            <span className="cards__price">{price}</span>
            <p className="cards__bowls">{bowl}</p>
        </li>
    )
}
export default Card