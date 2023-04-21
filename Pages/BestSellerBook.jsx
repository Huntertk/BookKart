import React, { useState } from 'react'
import './bestseller.css'

const BestSellerBook = () => {

    const bookData = [
        {
            id: 1,
            img: 'https://m.media-amazon.com/images/I/51Hfv2MfNGL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
            name: 'Rich Dad Poor Dad',
            author: 'Robert T. Kiyosaki',
            salePrice: '249',
            fullPrice: '383'
        },

        {
            id: 2,
            img: 'https://m.media-amazon.com/images/I/41r6F2LRf8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
            name: 'The Psychology of Money',
            author: 'Morgan Housel',
            salePrice: '210',
            fullPrice: '399'
        },
        {
            id: 3,
            img: 'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
            name: 'Atomic Habits',
            author: 'James Clear',
            salePrice: '468',
            fullPrice: '799'
        },
        {
            id: 4,
            img: 'https://m.media-amazon.com/images/I/51TcWGvqLZL._SX321_BO1,204,203,200_.jpg',
            name: 'The Hidden Hindu',
            author: 'Akshat Gupta',
            salePrice: '240',
            fullPrice: '250'
        },
    ]

    const renderBooks = bookData.map((book) => {
        return <div key={book.id} className="book-container">
        <img src={book.img} alt="doglapan" className="book-img" />
        <p className='book-heading'>{book.name}</p>
        <p className="book-author">By {book.author}</p>
        <p className="book-price">₹{book.salePrice} <span className="fullprice"> (₹{book.fullPrice})</span></p>
        <button className='buy-btn' >Buy Now</button>
        </div>
    })
  return (
    <div className='best-seller-book'>
        <h1 className='bestseller-h1'>Best Seller</h1>
        <div className="underline"></div>
        <div className="book-wrapper">
            {renderBooks}
        </div>
        
    </div>
  )
}

export default BestSellerBook
