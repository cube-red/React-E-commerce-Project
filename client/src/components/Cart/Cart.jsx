import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "./Cart.scss"
const Cart = () => {

    const data = [
        {   
            id:1,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Long Sleeve Graphic Tshirt",
            desc:"The @mui/icons-material package depends on @mui/material, which requires Emotion packages. If you don't use Material UI in your project yet, install the icons package with: npm install @mui/icons-material @mui/material @emotion/styled @emotion/react.",
            isNew:true,
            oldPrice:19,
            newPrice:12
        },
        
        {   
            id:2,
            img:"https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc:"The @mui/icons-material package depends on @mui/material, which requires Emotion packages. If you don't use Material UI in your project yet, install the icons package with: npm install @mui/icons-material @mui/material @emotion/styled @emotion/react.",

            title:"Coat",
            isNew:true,
            oldPrice:19,
            newPrice:12
        }
    ]
    return (
        <div className="cart">
            {console.log("cart")}
            <h1>Products in your cart</h1>
            {
                data?.map(item => (
                    
                    <div className="item" key={item.id}>
                       
                        <img src={item.img} alt="" className="img" />
                        <div className="details">
                            <h1>
                                {item.title}
                            </h1>
                            <p>
                                {item.desc.substring(0,50)}
                            </p>
                            <div className="price">
                                1 x ${item.price}
                            </div>
                        </div>
                        <DeleteOutlineIcon className="delete"/>
                    </div>
                ))
            }
            <div className="total">
                <span>Subtotal</span>
                <span>$123</span>
            </div>

            <button className="checkout">Proceed To Checkout</button>
            <span>Reset Cart</span>
        </div>
    )
}

export default Cart
