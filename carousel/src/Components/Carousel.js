import React, {useState} from 'react'
// import GokuBeerus from '../Asset/goku-beerus.jpg';
// import Luffy from '../Asset/luffy.jpg'
// import naruto from '../Asset/naruto.jpg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Carousel() {
  const [currentSlide,setCurrentSlide] = useState(0)
  const images = ['https://mrwallpaper.com/images/high/son-goku-ultra-instinct-77jbxcajxoojqhg5.webp',
    'https://wallpapercave.com/wp/wp12094492.jpg',
    'https://wallpapercave.com/uwp/uwp4261619.png',
    'https://images6.alphacoders.com/134/1345274.jpeg',
    'https://c4.wallpaperflare.com/wallpaper/672/977/231/one-piece-roronoa-zoro-swords-green-eye-wallpaper-preview.jpg'
  ] 

  const handlePreviousBtn =() =>{
    setCurrentSlide(currentSlide === 0?images.length -1: currentSlide -1);
  }

  const handleNextBtn = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }
  return (
    <div className='h-3/5 w-1/2 bg-slate-100 relative overflow-hidden'>
    <button onClick={handlePreviousBtn} className='z-10 absolute top-[50%] left-4 translate-y-[-50%] cursor-pointer text-white'>
      <ArrowBackIosIcon color='white'/>
    </button>
    {images.map((url,index)=>
    (<img src={url} alt='imageAnime' key = {index} className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}/>)
    )}
    
    <button onClick={handleNextBtn} className='z-10 absolute top-[50%] right-4 translate-y-[-50%] cursor-pointer text-white'>
      <ArrowForwardIosIcon />
    </button>
    <div className='z-10 absolute bottom-3 left-[50%] translate-x-[-50%] h-4 flex gap-3'>
      {images.map((_,index)=>(
        <div onClick={()=>setCurrentSlide(index)} className={`h-4 w-4 rounded-full cursor-pointer ${currentSlide === index? 'bg-white' : 'bg-zinc-400' }`} key={index}></div>
      ))}
    </div>
    </div>
  )
}

export default Carousel;
