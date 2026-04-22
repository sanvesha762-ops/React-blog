import React from 'react'
import Data from '../Data'

const Bollywood = () => {
  const BollywoodData = Data.filter((item) => item.category === "Bollywood")
  
  return (
    <div className="category-page">
      <h1>Bollywood</h1>
      <div className="blog-list">
        {BollywoodData.map((bollydata) => (
          <div key={bollydata.id} className="blog-card">
            <h2>{bollydata.title}</h2>
            <img src={bollydata.img_url} alt={bollydata.title} />
            <p>{bollydata.description}</p>
            {bollydata.rating && <span>Rating: {bollydata.rating}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bollywood