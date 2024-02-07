import React from 'react'
import './styles.css'


const Product = ({url,price,discount}) => {
    const dPrice= price*(discount/100)
    return ( 
        <div className='p-ctn'>
        <div className='img-ctn'>
        <div className='dis'>{discount} %</div>
        <img src={url} alt='url'/>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop:"15px" }}>
          <p className='line'> ${price-dPrice}</p>
          <p className='line-p'>${price}</p>
      </div>

        <div className='c-btn' onClick={()=>window.open("https://api.whatsapp.com/send?phone=393517852503")}>
        <img src='/assets/whatsapp.png' alt='whatsapp'/>
        <span>Whatsapp</span>
        </div>
        </div>
     );
}
 
export default Product;