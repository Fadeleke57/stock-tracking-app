
function NewsItem({item}) {
    const websiteUrl = item.url
    const website = websiteUrl.split('https://').pop().split('/')[0]
  
    const publishedTime = item.time_published

    const shortenTitle = (title, maxWords) => {
    const words = title.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
      return title;
    };

    const title = shortenTitle(item.title, 14)
    const summary = shortenTitle(item.summary, 25)

    function formatTimestamp(timestamp) {
      // Convert the input timestamp to ISO format
      const isoTimestamp = `${timestamp.slice(0, 4)}-${timestamp.slice(4, 6)}-${timestamp.slice(6, 8)}T${timestamp.slice(9, 11)}:${timestamp.slice(11, 13)}:${timestamp.slice(13, 15)}.000Z`;
      const dateObj = new Date(isoTimestamp);
      const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
      const day = dateObj.getDate().toString().padStart(2, '0');
      const year = dateObj.getFullYear();
      const hours = dateObj.getHours().toString().padStart(2, '0');
      const minutes = dateObj.getMinutes().toString().padStart(2, '0');
    
      const meridiem = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
    
      return `${month}/${day}/${year} ${formattedHours}:${minutes} ${meridiem}`;
    }

    const timestamp = formatTimestamp(publishedTime)
    
    return (
      <a href={item.url} className="news-article">
        <div className="news-article-image">
          <img src={item.banner_image} alt={item.title} />
        </div>
        <div className="news-article-content">
          <div className="news-article-source">
            <img src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${website}&size=16`} alt={item.source.id} />
            <span>{item.source.name}</span>
          </div>
          <div className="news-article-title">
            <h2>{title}</h2>
          </div>
          <p className="news-article-description">
            {summary}
          </p>
          <div className="news-article-details">
            <small><b>Published At: </b>{timestamp}</small>
          </div>
        </div>
      </a>
    )
  }
  
  export default NewsItem