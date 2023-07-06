import {NavLink} from "react-router-dom"

function NavBar(){

return (
    <>
    <nav className="nav-bar">
            <NavLink to="/home">Home</NavLink>
            <NavLink exact to="/mycalendar">My Calendar</NavLink>
            <NavLink to="/meet">Meet</NavLink>
            <NavLink to="/friends">Friends</NavLink>
            
            <div className="searchbar">
            <label htmlFor="search"></label>
            <input
                type="text"
                id="search"
                placeholder="Search..."
                
            />
        </div>
    </nav>
        
        <h1 className="app-name">Nue Kid</h1>


    </>
)

}

export default NavBar;


{/* <NavLink to="/add_pet" >Shop</NavLink>
            <NavLink to="/sell" >Sell</NavLink>
            <NavLink to="/cart" >Cart</NavLink> */}