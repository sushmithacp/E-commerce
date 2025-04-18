import React from 'react'
import { Link } from 'react-router-dom';
import setCurrentProduct from '../actions/setCurrentProduct'
import { useDispatch } from 'react-redux'


function IconList({product}) {
 let  dispatch = useDispatch()
    let handleCurrentProduct = () => {
        dispatch(setCurrentProduct(product))
}

    return (
        <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
            <Link onClick={handleCurrentProduct} to={{pathname:'/details/'}}>
                <li className="icon">
                    <span className="fas fa-expand-arrows-alt"></span>
                </li>
            </Link>
            {/* <Link onClick={() => alert('I am Detail Page')}>
                <li className="icon">
                    <span className="fas fa-expand-arrows-alt"></span>
                </li>
            </Link> */}

            <Link onClick={() => alert('I am Whishlist Page')}>
                <li className="icon mx-3">
                    <span className="far fa-heart"></span>
                </li>
            </Link>

            <Link onClick={() => alert('I am Shopping Page')}>
                <li className="icon">
                    <span className="fas fa-shopping-bag"></span>
                </li>
            </Link>
                    </ul>
    )
}
export default IconList;