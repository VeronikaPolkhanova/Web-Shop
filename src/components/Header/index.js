import React from 'react';
import { Link } from "react-router-dom";
import { GrShop, GrHome } from 'react-icons/gr';
import './styles.css';

function Header() {
    return (
        <div className='header-container'>
            <div className='navigation-container'>
                <ul className='navigation'>
                    <li>
                        <Link to='/'>
                            <GrHome size='1.5em' className='icon' />
                        </Link>
                    </li>
                    <li>
                        <Link to='/about-Us'>О нас</Link>
                    </li>
                    <li>
                        <Link to='/sales'>Акции</Link>
                    </li>
                    <li>
                        <Link to='/news'>Новости</Link>
                    </li>
                    <li>
                        <Link to='/delivery'>Доставка</Link>
                    </li>
                    <li>
                        <Link to='/contacts'>Контакты</Link>
                    </li>
                </ul>
            </div>
            <GrShop size='1.5em' className='icon' />
        </div>
    )
}
export default Header;
