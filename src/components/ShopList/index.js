import React from 'react';
import BookItem from './BookItem.js';
import './styles.css';

function ShopList(props) {
  const books = props.books;

  return (
    <div className='main-container'>
      <div className='book-container'>
        {books.map((it) =>
          <BookItem key={it.id} id={it.id} title={it.title} price={it.price} author={it.author} />
        )}
      </div>


    </div>
  )
}
export default ShopList;