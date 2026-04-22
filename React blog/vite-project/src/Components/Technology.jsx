import React from 'react'
import Data from '../Data'

const Technology = () => {
  const TechnologyData = Data.filter((item) => item.category === "Technology")
  
  return (
    <div className="category-page">
      <h1>Technology</h1>
      <div className="blog-list">
        {TechnologyData.map((item) => (
          <div key={item.id} className="blog-card">
            <h2>{item.title}</h2>
            <img src={item.img_url} alt={item.title} />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Technology