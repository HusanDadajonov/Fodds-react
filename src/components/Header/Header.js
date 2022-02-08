import "./Header.scss";
function Header({ setSearch,search }) {
    return(
        <header className="header">
            <div className="d-flex header__wrap">
                <div className="header__text d-flex flex-column">
                    <h3 className="header__title">Jaegar Resto</h3>
                    <p className="header__desc">Tuesday, 2 Feb 2021</p>
                </div>
                <form onSubmit={(e)=> e.preventDefault()} className="header__form">
                    <label className="header__label">
                        <input value={search}  onChange={(e)=> setSearch(e.target.value)} className="header__inp" type="search" placeholder="Search for food, coffe, etc.." />
                    </label>
                </form>
            </div>
        </header>
    )
}
export default Header