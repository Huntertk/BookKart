import React, { useState } from 'react'
import './bestseller.css'


const NewArrival = () => {
        const bookData = [
        {
            id: 1,
            img: 'https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/791/9781473677791.jpg',
            name: 'Nomads',
            author: ' Anthony Sattin',
            salePrice: '527',
            fullPrice: '799'
        },

        {
            id: 2,
            img: 'https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/521/9781534438521.jpg',
            name: 'Stellarlune',
            author: 'Shannon Messenger',
            salePrice: '1406',
            fullPrice: '1826'
        },
        {
            id: 3,
            img: 'https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/478/9780367490478.jpg',
            name: 'Continuous Delivery 2.0',
            author: 'Qiao Liang',
            salePrice: '5779',
            fullPrice: '8890'
        },
        {
            id: 4,
            img: 'https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/654/9780241455654.jpg',
            name: 'The Penguin Book of Christmas Stories',
            author: 'Jessica Harrison',
            salePrice: '1205',
            fullPrice: '1826'
        },
    ]

    const renderBooks = bookData.map((book) => {
        return <div key={book.id} className="book-container">
        <img src={book.img} alt={book.name} className="book-img" />
        <p className='book-heading'>{book.name}</p>
        <p className="book-author">By {book.author}</p>
        <p className="book-price">₹{book.salePrice} <span className="fullprice"> (₹{book.fullPrice})</span></p>
        <button className='buy-btn' >Buy Now</button>
        </div>
    })
  return (
    <div className='best-seller-book'>
        <h1 className='bestseller-h1'>New Arrival</h1>
        <div className="underline"></div>
        <div className="book-wrapper">
            {renderBooks}
        </div>
    </div>
  )
}

export default NewArrival
