import React from 'react';
import './styles.css';
import Picture from '../../img/dog_heard.jpg';
import { Link } from 'react-router-dom';

function BookItem(props) {
    return (
        <div className='item-container'>
            <p className='price'>{props.price} Br</p>
            <img  src={Picture} alt={props.title} className='book-img'></img><p />
            
                <Link to={{pathname: `/books/${props.id}`, state: props}} className='title' >
                    {props.title}
                </Link>

            <div className='author'>{props.author}</div>
            <button className='buy-button'>Купить</button>
        </div>
    )
}
export default BookItem;