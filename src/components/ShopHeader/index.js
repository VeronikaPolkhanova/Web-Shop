import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';

function ShopHeader(props){
    const shopHeader = props.shopHeader;
    return(
        <div className='shop-header-container'>
                {shopHeader.map((it) => {
                    return (
                        <div className='shop-header-item' >
                            {it.icon}
                            <Link to='/' className='menu-label'>
                                {it.label}
                            </Link>
                        </div>
                    )
                })}
        </div>
    )
}
export default ShopHeader;