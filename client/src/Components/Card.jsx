import React, { useState } from 'react'

const Card = () => {
  const [detail,setDetail] =useState(false)
    return (
        <div>
            <div class="tw-card tw-text-center tw-shadow-2xl tw-w-72 tw-h-auto ">
  <figure class="tw-px-10 tw-pt-10">
    <img src="https://picsum.photos/id/1005/400/250" class="rounded-xl"alt="rajge"/>
  </figure> 
  <div class="tw-card-body" >
    <h2 class="tw-card-title">Rakesh Rajput</h2> 
    <p>webDevoloper</p> 
    <h6>tech stack- React,js ,tailwind css,postgres,express,</h6>
    <div class="tw-justify-center tw-card-actions">
      <button class="tw-btn tw-btn-outline tw-btn-accent" onClick={()=>setDetail()}>More info</button>
    </div>
  </div>
</div> 
        </div>
    )
}

export default Card

   
