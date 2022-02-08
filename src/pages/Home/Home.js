import Bar from "../../container/Bar/Bar"
import Header from "../../components/Header/Header"
import Nav from "../../components/Nav/Nav"
import Cards from "../../container/Cards/Cards"
import { useState } from "react"
import Orders from "../../container/Orders/Orders"
function Home() {
    const [food,setFood] = useState("hot")
    const [search,setSearch] = useState("")
    const [checkResult,setcheckResult] = useState(false);
    const [delivery,setDelivery] = useState(1);

    return(
        <section className="home">
            <div className="home__row row">
                <div className="home__col col-1 ps-0">
                    <Bar />
                </div>
                <div className="home__col col-7 ps-0">
                    <Header  setSearch={setSearch} search={search}/>
                    <Nav setFood={setFood}/>
                    <Cards 
                        food={food} 
                        search={search} 
                        setcheckResult={setcheckResult} 
                        checkResult={checkResult}
                        setSearch={setSearch}
                        setDelivery={setDelivery}
                    />
                </div>
                <div className="home__col col-3 pe-0 ms-auto">
                    <Orders delivery={delivery}/>
                </div>
            </div>
        </section>
    )
}
export default Home 