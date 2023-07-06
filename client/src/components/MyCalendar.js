import CartItem from './Meet'
import React, {useState} from 'react'

function MyCalendar (){

//     const [checkedOut, setCheckedOut] = useState(false)

//     function toggleCheckOut(){
//         setCheckedOut(checkedOut => !checkedOut)
//     }

//     const priceArray = cart.map(cartItem => {
//         return Number(cartItem.price) 
//     })
   
//     let sum = 0
//     for(let price of priceArray){ 
//         sum  = sum +  price
        
//     }
    

//     if(checkedOut){
//      return (
//         <div className="cart">
            
//              <h1 className="order-confirmation" >Thank you for your purchase! your order is being processed</h1>
           
//         </div>
//      )           
//     }else{
//         return(
// <div className="cart">
            
//            <ul className="cart-list" >
//                 {cart.map(cartItem => {
//                 return <CartItem key={cartItem.id} cartItem={cartItem} removeFromCart={removeFromCart} />
//             })}</ul>
            
//             <h4 className="cart-total" >Cart Total:${sum}</h4>
//             <button class="btn btn-dark" onClick={toggleCheckOut} >CHECK OUT</button> 
            
//         </div>
//         )
//     }
    return (
        <div className="cart">
            <h1>My Calendar</h1>
        
        </div>
    )
}

export default MyCalendar;