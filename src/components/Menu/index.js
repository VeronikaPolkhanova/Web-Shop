import React, { useState } from 'react';
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import { connect } from 'react-redux';

import './style.css';

function Menu(props) {
    const [activeItems, setActive] = useState(false);
    const menu = props.menu;
    return (
        <div className='menu-container'>
            <div>
                {menu.map((it) => {
                    return (
                        <div className='menu-item' onMouseEnter={() => setActive(it.submenu)}  >
                            <div className='icon'>{it.icon}</div>
                            <Link to={`/${it.page}`} className='menu-label'>
                                {it.label}
                            </Link>
                            <FiChevronRight className='menu-icon' size='1.5em' />
                        </div>
                    )
                })}
            </div>
            <div onMouseLeave={() => setActive(false)}>
                {activeItems && activeItems.map(it => <div className='submenu-item'>{it.label}</div>)}
            </div>
        </div>
    )
}

export default Menu;

