import Bar from "../../container/Bar/Bar"
import Header from "../../components/Header/Header"
import Nav from "../../components/Nav/Nav"
import Cards from "../../container/Cards/Cards"
import { useState } from "react"
function Home() {
    const [food,setFood] = useState("hot")
    const [search,setSearch] = useState("")
    const [checkResult,setcheckResult] = useState(false);

    return(
        <section className="home">
            <div className="home__row row">
                <div className="home__col col-1 ps-0">
                    <Bar />
                </div>
                <div className="home__col col-6 ps-0">
                    <Header  setSearch={setSearch} search={search}/>
                    <Nav setFood={setFood}/>
                    <Cards 
                        food={food} 
                        search={search} 
                        setcheckResult={setcheckResult} 
                        checkResult={checkResult}
                        setSearch={setSearch}
                    />
                </div>
                <div className="home__col col-5">

                </div>
            </div>
        </section>
    )
}
export default Home 