import React from "react"
import "./Orders.scss"
function Orders({delivery}){
    return(
        <div className="orders">
            <h3 className="orders__total">Orders #0</h3>
            <ul className="orders__list">
                <li className={delivery == 1 ? `orders__item orders__item--active` : `orders__item`}>
                    <button disabled className="orders__btn">Dine In</button>
                </li>
                <li className={delivery == 2 ? `orders__item orders__item--active` : `orders__item`}>
                    <button disabled className="orders__btn">To Go</button>
                </li>
                <li className={delivery == 3 ? `orders__item orders__item--active` : `orders__item`}>
                    <button disabled className="orders__btn">Delivery</button>
                </li>
            </ul>
        </div>
    )
}

export default Orders