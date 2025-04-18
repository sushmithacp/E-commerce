import React from 'react'
import Navbar from '../components/Navbar';
import Carousal from '../components/Carousal';
import Ads from '../components/Ads';
import ProductSection from '../components/ProductSection';

function Home() {
    // let productArray = ['samsung','moto','realme','vivo']
    let productArray = [
        {
          name: 'samsung',
          image: 'https://www.imagineonline.store/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1__en-IN.jpg?v=1694605184',
          description: 'Samsung is a leading smartphone brand known for its Galaxy and Note series.'
        },
        {
          name: 'moto',
          image: 'https://www.poojaratele.com/media/catalog/product/cache/28b568fbf82d79c53c9eab7361be58d0/e/d/edge-50-fusion-pb300002in-motorola-original-imahywzrfagkuyxx.jpg',
          description: 'Moto (Motorola) is known for its durable and budget-friendly smartphones.'
        },
        {
          name: 'realme',
          image: 'https://s.alicdn.com/@sc04/kf/H3800de39a1924b42a02319f0c84bfcb04.jpg_720x720q50.jpg',
          description: 'Realme offers high-performance smartphones at competitive prices and budget-friendly smartphones.'
        },
        {
          name: 'vivo',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbbIDRZAsNgmmjShiz0JGA_JxAT_VN80K_2A&s',
          description: 'Vivo is popular for its sleek design and camera-focused, vivo V40e-5500mAh Battery & 50MP Camera.'
        }
      ];
      
    return (
        <div className='container-fluid'>
            <Navbar/>
            <Carousal/>
            <div className='row'>
                {productArray.map(el => <Ads product={el}/>)}
            
            </div>
            <ProductSection/>
        </div>
    )
}
// function Home() {
//     return (
//         <>
//         <div className='container-fluid bg-white mt-5 pt-3'>
//         <Navbar></Navbar>
//             <div className='row'>
//             <Carousal/>
                
//             </div>
//         </div>
//         <div className='container bg-white'>
//             <div className='row'>
//             <ProductSection/>
//             </div>
//             /</div>
//         </>
//     )
// }
export default Home;