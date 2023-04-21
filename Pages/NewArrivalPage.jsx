import React, { useState } from 'react'
import '../Components/bestseller.css'
import { NavLink } from 'react-router-dom'

const NewArrivalPage = () => {
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
        {
            id: 5,
            img: 'https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/679/9781647824679.jpg',
            name: 'Prediction Machines',
            author: 'Avi Goldfarb',
            salePrice: '1654',
            fullPrice: '1999'
        },
        {
            id: 6,
            img: 'https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/693/9781647824693.jpg',
            name: 'All-in On AI',
            author: 'Thomas H. Davenport',
            salePrice: '1940',
            fullPrice: '2999'
        },
        {
            id: 7,
            img: 'https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/878/9780253063878.jpg',
            name: 'Infertility in a Crowded Country',
            author: 'Holly Donahue Singh',
            salePrice: '2861',
            fullPrice: '5999'
        },
        {
            id: 8,
            img: 'https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/366/9781472849366.jpg',
            name: 'The Capture of U-505',
            author: 'Mark Lardas',
            salePrice: '1138',
            fullPrice: '1999'
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
        <div className="book-top-wrapper">
            <h1 className='bestseller-h1'>New Arrival</h1>
        </div>
        <div className="underline"></div>
        <div className="book-wrapper">
            {renderBooks}
        </div>
        
    </div>
  )
}

export default NewArrivalPage
