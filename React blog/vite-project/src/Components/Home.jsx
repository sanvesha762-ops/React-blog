import React from 'react'
import Data from '../Data'

const Home = () => {
  // Show featured items from remaining categories
  const categories = ["Bollywood"]

  const featuredData = categories.flatMap(cat => 
    Data.filter(item => item.category === cat).slice(0, 2)
  )

  return (
    <div className="home-page">
      <h1>Latest Stories</h1>
      <div className="blog-list">
        {featuredData.map((item) => (
          <div key={item.id} className="blog-card featured">
            <span className="category-tag">{item.category}</span>
            <h2>{item.title}</h2>
            <img src={item.img_url} alt={item.title} />
            <p>{item.description.substring(0, 150)}...</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home