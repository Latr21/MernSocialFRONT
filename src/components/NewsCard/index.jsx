import React from 'react'

const NewsCard = ({ title, description, date }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', backgroundColor: '#0d002dff', padding: '12px', borderRadius: '10px'}}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{new Date(date).toLocaleString()}</p>
    </div>
  )
}

export default NewsCard