import React from 'react'
import "../DescriptionBox/Descriptionbox.css"

function Descriptionbox() {
  return (
    <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-navbox">Description</div>
                <div className="descriptionbox-navbox fade">Reviews (122)</div>
            </div>

            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus porro incidunt totam harum quam debitis minima voluptatem temporibus fugit, illum laboriosam obcaecati fugiat sapiente in? Quos cum atque a nam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem commodi ea cumque deserunt perspiciatis, quibusdam dolores ipsam! Esse, corporis, ex quam, laboriosam alias animi maiores expedita vel suscipit fugiat voluptatum.</p>
            </div>
    </div>
  )
}

export default Descriptionbox