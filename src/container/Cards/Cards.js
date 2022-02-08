import "./Cards.scss"
import { hotDishes } from "../../Api/Dishes"
import { coldDishes } from "../../Api/Dishes"
import { soup } from "../../Api/Dishes"
import { grill } from "../../Api/Dishes"
import { appetizer } from "../../Api/Dishes"
import { dessert } from "../../Api/Dishes"
import Card from "../../components/Card/Card"
import { useState } from "react"

function Cards({food,search,setcheckResult,checkResult,setSearch}){
    
    let filtre = []
    if(food == "hot" && search.length != 0)filtre = hotDishes.filter(item => item.foodName.toLowerCase().includes(search.toLowerCase()))
    if(food == "cold" && search.length != 0)filtre = coldDishes.filter(item => item.foodName.toLowerCase().includes(search.toLowerCase()))
    if(food == "soup" && search.length != 0)filtre = soup.filter(item => item.foodName.toLowerCase().includes(search.toLowerCase()))
    if(food == "grill" && search.length != 0)filtre = grill.filter(item => item.foodName.toLowerCase().includes(search.toLowerCase()))
    if(food == "appetizer" && search.length != 0)filtre = appetizer.filter(item => item.foodName.toLowerCase().includes(search.toLowerCase()))
    if(food == "desert" && search.length != 0)filtre = dessert.filter(item => item.foodName.toLowerCase().includes(search.toLowerCase()))
    
    if(filtre.length == 0 && search.length != 0)setcheckResult(true)
    if(filtre.length != 0)setcheckResult(false)
    return(
        <section className="cards">
            <div className="cards__header">
                <h2 className="cards__title">Choose Dishes</h2>
                <select className="cards__select">
                    <option className="cagit config --global user.name muhammadjewel --replace-allrds__option" value="1">Dine in</option>
                    <option className="cards__option" value="2">fast food</option>
                    <option className="cards__option" value="3">easy food</option>
                </select>
            </div>
            <ul className="cards__list">
                <button onClick={()=> {setSearch("");setcheckResult(false)}} className={ checkResult ? `cards__no-result` : `d-none` }>No results try again</button>
                { 
                    search.length != 0 ?
                    filtre.map(item => (
                        <Card 
                            img={item.foodImg} 
                            key={Math.random() * 233}
                            title={item.foodName}
                            price={item.foodPrice}
                            bowl={item.isAvailable}
                        />
                    )):
                    (food == "hot" ? 
                    hotDishes.map(item => (
                        <Card 
                            img={item.foodImg} 
                            key={Math.random() * 233}
                            title={item.foodName}
                            price={item.foodPrice}
                            bowl={item.isAvailable}
                        />
                    )) : food == "cold" ? 
                    coldDishes.map(item => (
                        <Card 
                            img={item.foodImg} 
                            key={Math.random() * 233}
                            title={item.foodName}
                            price={item.foodPrice}
                            bowl={item.isAvailable}
                        />
                    )) : food == "soup" ?
                    soup.map(item => (
                        <Card 
                            img={item.foodImg} 
                            key={Math.random() * 233}
                            title={item.foodName}
                            price={item.foodPrice}
                            bowl={item.isAvailable}
                        />
                    )) :  food == "grill" ?
                    grill.map(item => (
                        <Card 
                            img={item.foodImg} 
                            key={Math.random() * 233}
                            title={item.foodName}
                            price={item.foodPrice}
                            bowl={item.isAvailable}
                        />
                    )) : food == "appetizer" ?
                    dessert.map(item => (
                        <Card 
                            img={item.foodImg} 
                            key={Math.random() * 233}
                            title={item.foodName}
                            price={item.foodPrice}
                            bowl={item.isAvailable}
                        />
                    )) : food == "desert" ?
                    appetizer.map(item => (
                        <Card 
                            img={item.foodImg} 
                            key={Math.random() * 233}
                            title={item.foodName}
                            price={item.foodPrice}
                            bowl={item.isAvailable}
                        />
                    )) : null) 
                }
            </ul>
        </section>
    )
}

export default Cards