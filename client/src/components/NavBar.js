import {NavLink} from "react-router-dom"

function NavBar(){

return (
    <>
    <nav id="nav-bar">
            <NavLink to="/">Home</NavLink>
            <NavLink exact to="/mycalendar">My Calendar</NavLink>
            <NavLink to="/meet">Meet</NavLink>
            <NavLink to="/host-event">Host</NavLink>
            
            <div id="searchbar">
            <label htmlFor="search"></label>
            <input
                type="text"
                id="search"
                placeholder="Search..."
                
            />
        </div>
    </nav>
        
        <h1 id="app-name">Nue Kid</h1>


    </>
)

}

export default NavBar;

