import React from 'react'
import "../CartItems/CartItems.css"
import remove_icon from "../Assests/cart_cross_icon.png";
import { deleteCart, updateQuantity } from '../../Redux/Slice/CartSlice';
import { useDispatch } from "react-redux"

function CartItems({item}) {
    const dispatch = useDispatch();
    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        //ensure that the new qunatity is at least 0
        const validQuantity = Math.max(newQuantity,0 );
        dispatch(updateQuantity({ id: item.id, quantity: validQuantity }));
      };
    
  return (
        <>
        <tr>
                    <td> <img className='product-image' src={item.image} alt="" /> </td>
                    <td>{item.name}</td>
                    <td>${item.new_price}</td>
                    <td><input className='number-quantity' type="number" value={item.quantity} onChange={handleQuantityChange}/></td>
                    <td>${item.new_price * item.quantity}</td>
                    <td><img className='remove-icon' src={remove_icon} onClick={()=>dispatch(deleteCart(item.id))} alt="" /></td>
      </tr>
    </>

  )
}

export default CartItems