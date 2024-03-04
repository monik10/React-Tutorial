import { useState } from "react"
import PRODUCTS from "/src/product.json"
import { Fragment } from "react";

const Products = () => {
  // eslint-disable-next-line no-unused-vars
  let[products,setProducts]=useState(PRODUCTS);
  
    return (
    <div className="products">
      <h1>Products</h1>
      {
        products.length > 0 && products.map(product=>(
            <Fragment key={product.id}>
        <div className="container">
          <figure>
            <picture>
              <img src={product.image} alt={product.title} height={150} width={150}/>
            </picture>
          </figure>
        </div>

        </Fragment>

        ))
      }
    </div>
  )
}

export default Products
