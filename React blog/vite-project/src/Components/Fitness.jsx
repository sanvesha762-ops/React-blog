import React from 'react'
import Data from '../Data'

const Fitness = () => {
  const FitnessData = Data.filter((item) => item.category === "Fitness")
  
  return (
    <div className="category-page">
      <h1>Fitness</h1>
      <div className="blog-list">
        {FitnessData.map((item) => (
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

export default Fitness