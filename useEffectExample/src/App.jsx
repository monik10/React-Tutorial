import { useEffect,useState} from 'react'
import axios from "axios";

const App = () => {
  let [products,setProducts]=useState(null);
  let fetchProducts=async ()=>{
    // let data=await window.fetch("https://api.escuelajs.co/api/v1/products")
    let{data}=await axios.get("https://api.escuelajs.co/api/v1/products")
    // let finalProduct=await data.json();
    setProducts(data);
  }
  useEffect(()=>{
fetchProducts();
  },[])
  return (
    <aside className='flex-container'>
      {
        products ===null?"loading":products.map(product=>{
          return <div className='container' key={product.id}>
           <img src={product.images[0] || `https://agrimart.in/uploads/vendor_banner_image/default.jpg`} alt={product.title} height={200} width={200}/>
           <h2>{product.title}</h2>
          </div>
        })
      }
    </aside>
  )
}

export default App
