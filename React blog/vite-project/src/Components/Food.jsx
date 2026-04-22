import React from 'react'
import Data from '../Data'

const Food = () => {
  const FoodData = Data.filter((item) => item.category === "Food")
  
  return (
    <div className="category-page">
      <h1>Food</h1>
      <div className="blog-list">
        {FoodData.map((item) => (
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

export default Food