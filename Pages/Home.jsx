import React, { useState } from 'react'
import bannerImg from '../src/assets/images/backgroundbanner1.jpg'
import './home.css'
import BestSellerBook from './BestSellerBook'

const Home = () => {

    const [imageRender, setRender] = useState([
    '../src/assets/images/backgroundbanner1.jpg',
    '../src/assets/images/backgroundbanner2.jpg',
    '../src/assets/images/backgroundbanner3.jpg',
    ])
    const [count, setCount] = useState(0)


    const pushImageForward = () => {
        if(count === imageRender.length-1){
            setCount(0)
        } else if(count > 1) {
            setCount(imageRender.length-1)
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
    <div className='home-container'>
        <img className='home-banner-img' src={imageRender[count]} alt="" />
        <button className='btn image-slider-icon' onClick={pushImageBackward} >⬅️</button>
        <button className='btn image-slider-icon' onClick={pushImageForward}>➡️</button>
        <div className="book-container">
            <BestSellerBook />
        </div>
    </div>
  )
}

export default Home
