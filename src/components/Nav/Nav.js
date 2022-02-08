import { useState } from "react";
import "./Nav.scss";

function Nav({setFood}){
    const [activeItem,setActiveItem] = useState(1);
    return(
        <nav className="nav">
            <ul className="nav__list d-flex">
                <li id="1" className={activeItem == 1 ?  `nav__item nav__item--active` : `nav__item`} onClick={(e)=> {setActiveItem(e.target.id);setFood("hot")}}>
                    <a id="1" className="nav__link">Hot Dishes</a>  
                </li>
                <li id="2" className={activeItem == 2 ?  `nav__item nav__item--active` : `nav__item`} onClick={(e)=> {setActiveItem(e.target.id);setFood("cold")}}>
                    <a id="2" className="nav__link">Cold Dishes</a>  
                </li>
                <li id="3" className={activeItem == 3 ?  `nav__item nav__item--active` : `nav__item`} onClick={(e)=> {setActiveItem(e.target.id);setFood("soup")}}>
                    <a id="3" className="nav__link" onClick={(e)=> setActiveItem(e.target.id)}>Soup</a>  
                </li>
                <li id="4" className={activeItem == 4 ?  `nav__item nav__item--active` : `nav__item`} onClick={(e)=> {setActiveItem(e.target.id);setFood("grill")}}>
                    <a id="4" className="nav__link">Grill</a>  
                </li>
                <li id="5" className={activeItem == 5 ?  `nav__item nav__item--active` : `nav__item`} onClick={(e)=> {setActiveItem(e.target.id);setFood("appetizer")}}>
                    <a id="5" className="nav__link">Appetizer</a>  
                </li>
                <li id="6" className={activeItem == 6 ?  `nav__item nav__item--active` : `nav__item`} onClick={(e)=> {setActiveItem(e.target.id);setFood("desert")}}>
                    <a id="6" className="nav__link">Dessert</a>  
                </li>
            </ul>
        </nav>
    )
}

export default Nav