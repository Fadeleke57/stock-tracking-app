import NewsItem from './NewsItem'

function NewsGrid({items}) {
  if (!items) {
    return (
      <div className='sorry-container'>
        <h1 className='sorry-text'>API limit reached. Come back soon to see news!</h1>
      </div>
    ); 
  }

  return (
    <div className="news-grid">
      {items.map((item, i) => (
        <NewsItem key={i} item={item}/>
      ))}
    </div>
  )
}

export default NewsGrid