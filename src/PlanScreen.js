import React from 'react'
import "./PlanScreen.css"
const PlanScreen = () => {
  return (
    <div className='planScreen'>
      <div className='planScreen__body'>
         <div className='plans'>
         <div className='video_quality'>
           <p>Netflix Standard</p>
           <p>1080p</p>
         </div>
           <button>Subscribe</button>
         </div>
         <div className='plans'>
          <div className='video_quality'>
           <p>Netflix Basic</p>
           <p>480p</p>
          </div>
           <button>Subscribe</button>
         </div>
         <div className='plans'>
         <div className='video_quality'>
           <p>Netflix Premium</p>
           <p>4K+HDR</p>
         </div>
           <button>Subscribe</button>
         </div>
      </div>
    </div>
  )
}

export default PlanScreen
