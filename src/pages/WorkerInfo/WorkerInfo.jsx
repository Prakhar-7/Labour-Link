import React from 'react'
import './WorkerInfo.css'

const WorkerInfo = () => {
  return (
    <div className="workerInfo">
      <div className="workerInfo-info">
        <div className="image">
          <h2>👦</h2>
        </div>
        <div className="details">
          <h3>Name</h3>
          <h4>4 year work experience</h4>
          <h4>Durgabadi, 273001</h4>
        </div>
        <div className="getInfo">
          <button>Get Info @ Rs. 10</button>
        </div>
      </div>
      <div className="workerInfo-review">
        <div className="rating-images">
          <div>Rating: ⭐⭐⭐⭐</div>
          <div>Images: 🖼️🖼️🖼️🖼️➕</div>
        </div>
        <div className="review">
          {/* Review */}
          <div className="review-unique">
            <p> This worker was very good and knows his work very well.</p>
          </div>
          <div className="review-unique">
            <p> This worker was very good and knows his work very well.</p>
          </div>
          <div className="review-unique">
            <p> This worker was very good and knows his work very well.</p>
          </div>
          <div className="review-unique">
            <p> This worker was very good and knows his work very well.</p>
          </div>
          <div className="review-unique">
            <p> This worker was very good and knows his work very well.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkerInfo
