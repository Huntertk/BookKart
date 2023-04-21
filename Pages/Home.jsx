import React, { useState } from 'react'
import bannerImg from '../src/assets/images/backgroundbanner1.jpg'
import './home.css'
import BestSellerBook from './BestSellerBook'
import NewArrival from './NewArrival'

const Home = () => {

    const [imageRender, setRender] = useState([
    'https://www.bookswagon.com/images/promotionimages/web/BussinessWeb.jpg?v=1.6',
    'https://www.bookswagon.com/images/promotionimages/web/tarotcardWeb.jpg?v=1.6',
    'https://www.bookswagon.com/images/promotionimages/web/ExamWeb.jpg?v=1.6',
    ])
    const [count, setCount] = useState(0)


    const pushImageForward = () => {

        if(count === imageRender.length-1){
            setCount((prev) => {
                return prev = 0;
            })
        } else if(count > 1) {
            setCount((prev) => {
                return prev = imageRender.length-1;
            })
        } else{
            setCount((prev) => {
                return prev + 1
            })
        }
    }



    const pushImageBackward = () => {
        if(count > imageRender.length-1){
            setCount(0)
        } else if(count === 0) {
            setCount(imageRender.length-1)
        } else{
            setCount((prev) => {
                return prev - 1
            })
        }
    }
    console.log(count)
  return (
    <>
    <div className='home-container'>
        <img className='home-banner-img' src={imageRender[count]} alt="" />
        <button className='btn image-slider-icon' onClick={pushImageBackward} >⬅️</button>
        <button className='btn image-slider-icon' onClick={pushImageForward}>➡️</button>
    </div>
        <div className="book-containers">
            <BestSellerBook />
            <NewArrival />
        </div>
    </>
  )
}

export default Home
