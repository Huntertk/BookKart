import React from 'react'
import './bestseller.css'

const BestSellerBook = () => {

    const bookData = [
        {
            id: 1,
            img: 'https://m.media-amazon.com/images/I/61EGLdlx8kL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
            name: 'Doglapan: The Hard Truth about Life and Start-Ups',
            author: 'Ashneer Grover',
            salePrice: '238',
            fullPrice: '499'
        },

        {
            id: 2,
            img: 'https://m.media-amazon.com/images/I/41r6F2LRf8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
            name: 'The Psychology of Money Paperback',
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

    ]

    const renderBooks = bookData.map((book) => {
        return <div key={book.id} className="book-container">
        <img src={book.img} alt="doglapan" className="book-img" />
        <p className='book-heading'>{book.name}</p>
        <p className="book-author">By {book.author}</p>
        <p className="book-price">₹{book.salePrice} <span className="fullprice"> (₹{book.fullPrice})</span></p>
            <button className='buy-btn'>Buy Now</button>
        </div>
    })
  return (
    <div className='best-seller-book'>
        <h1>Best Seller</h1>
        {renderBooks}

        
    </div>
  )
}

export default BestSellerBook
