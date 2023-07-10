import MapPage from './MapPage'
import NavBar from './NavBar'
import HostEvent from './HostEvent'
import MyCalendar from './MyCalendar'
// import {Map, Marker, Popup, TileLayer} from 'react-leaflet'

import {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom';

function App() {


// const [locations, setLocations] = useState([])

// useEffect(() => {
//   fetch("http://127.0.0.1:7000/locations")
//   .then(resp => resp.json())
//   .then(locationsData => setLocations(locationsData))
// },[])





  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/host-event'>
          <HostEvent />
        </Route>
        <Route path="/mycalendar">
          <MyCalendar/>
        </Route>
        <Route exact path="/">
          <MapPage />
        </Route>
      </Switch>

    </div>
  );
}

export default App;




// useEffect(() => {
//   fetch("http://localhost:3000/items")
//   .then(resp => resp.json())
//   .then(itemsData => setItems(itemsData))
// },[])


// function submitItem(event){
//   event.preventDefault()
//   fetch("http://localhost:3000/items",{
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//       "accept": "application/json"
//     },
//     body: JSON.stringify(formInput)
//   })
//     .then(resp => resp.json())
//     .then(newItem => setItems([...items, newItem]))
// }

// function addToCart(item) {
//   setCart([...cart, item])
// }

// function removeFromCart(id) { 
//  setCart(cart.filter(cartItem => {
//   return cartItem.id !== id
//  }))
// }

// function updateFormData(event){
//   if (event.target.name === "price") { 
//     return setFormInput({...formInput, [event.target.name]: Number(event.target.value)
//      })}
//   else (setFormInput({...formInput, [event.target.name]: event.target.value}))
// }
