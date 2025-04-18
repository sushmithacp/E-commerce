import React from 'react'

function Ads({product}) {
    return (
        <div className='col-md-3 mt-2'> 
<div className="card w-100">
<img src={product.image} alt={product.name} />
  {/* <img src="https://www.imagineonline.store/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1__en-IN.jpg?v=1694605184"  */}
  {/* className="card-img-top w-100" alt="..." style={{width:"100%"}} /> */}
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text">{product.description}</p>
    
  </div>
</div>
        </div>
    )
}
export default Ads;