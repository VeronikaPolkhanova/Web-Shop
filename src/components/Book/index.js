import React from 'react';
import Picture from '../../img/dog_heard.jpg';
import './styles.css';

function Book(props) {
    const { id, title, price, author } = props.location.state;
    return (
        <div className='book-main-container'>
            <img className='book-img-item' src={Picture} alt={title}></img>
            <div className='description-container'>
                <div className='title-book'>{title}</div>
                <div className='price-book'>{price} Br</div>
                <div className='author-book'>{author}</div>
                <p>Повесть «Собачье сердце» Булгаков написал в 1925 году. В это время были очень популярны идеи улучшения человеческой породы с помощью передовых достижений науки. 
                    Герой Булгакова, профессор с мировым именем Преображенский, в попытке разгадать секрет вечной молодости случайно делает открытие, позволяющее хирургическим путем превратить животное в человека. 
                    Однако эксперимент по пересадке собаке человеческого гипофиза дает совершенно неожиданный результат.</p>
                <div className='button-container'>
                    <button className='buy-button'>Купить</button>
                </div>
            </div>
        </div>

    )
}
export default Book;