import React from 'react'
import '../../products'
import { PRODUCTS } from '../../products'
import { Product } from './product'
import '../Shop/Shop.css'
import { Footer } from '../../Components/Footer'


export const Shop = () => {
  return (
    <>
      <br />
      <div className='shop'></div>
      <div className="shoptitle">
        <br />
        <br /><br /><br />
        <h1>"Your Perfect Mobile, Just a Click Away: Explore Endless Possibilities at Our Online Mobile Store!"</h1>
        <div className="products">{""}{PRODUCTS.map((product) => (<Product data={product} />))}
        </div>
      </div>
<Footer/>
    </> 
  ) 
}
