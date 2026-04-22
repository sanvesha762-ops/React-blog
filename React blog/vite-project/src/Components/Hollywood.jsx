import React from 'react'
import Data from '../Data'

const Hollywood = () => {
  const HollywoodData = Data.filter((item) => item.category === "Hollywood")
  
  return (
    <div className="category-page">
      <h1>Hollywood</h1>
      <div className="blog-list">
        {HollywoodData.map((item) => (
          <div key={item.id} className="blog-card">
            <h2>{item.title}</h2>
            <img src={item.img_url} alt={item.title} />
            <p>{item.description}</p>
            {item.rating && <span>Rating: {item.rating}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hollywood