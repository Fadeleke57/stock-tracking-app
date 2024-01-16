
import RangeSlider from './RangeSlider';

export default function NewsPanel({ stock, item }) {
  
  function limitTitleToElevenWords(title) {
    // Split the title into an array of words
    const words = title.split(' ');
    // If there are more than 11 words, slice the array to keep only the first 11 words
    if (words.length > 11) {
      return words.slice(0, 11).join(' ') + '...';
    } else {
      return title; // Return the original title if it has 11 or fewer words
    }
  }

  function calculateTimeDifference(timestamp) {
    const year = parseInt(timestamp.slice(0, 4));
    const month = parseInt(timestamp.slice(4, 6)) - 1; 
    const day = parseInt(timestamp.slice(6, 8));
    const hour = parseInt(timestamp.slice(9, 11));
    const minute = parseInt(timestamp.slice(11, 13));
    const second = parseInt(timestamp.slice(13, 15));

    const date = new Date(year, month, day, hour, minute, second);
    const now = new Date();

    const timeDifference = now - date;
    const hoursDifference = timeDifference / (1000 * 60 * 60);

    if (hoursDifference < 24) {
      return hoursDifference === 0 ? 'now' : Math.round(hoursDifference) + ' hour' + (hoursDifference === 1 ? '' : 's') + ' ago';
    } else {
      const daysDifference = Math.round(hoursDifference / 24);
      const days = daysDifference === 1 ? '1 day ago' : daysDifference + ' days ago'
      return days
    }
  }

  function getSentiment(tickers) {
    return parseFloat(tickers.find(item => item.ticker === stock)?.ticker_sentiment_score || 0);
  }

  function getRelevance(tickers) {
    return parseFloat(tickers.find(item => item.ticker === stock)?.relevance_score || 0);
  }

  // Use the findSentimentValue function to get the value
  const sentValue = getSentiment(item.ticker_sentiment);
  const relValue = getRelevance(item.ticker_sentiment);

  const time = calculateTimeDifference(item.time_published);
  const title = limitTitleToElevenWords(item.title);

  return (
    <div className='post panel'>
      <div className='post-header'>
        <div>
          <a href={item.url} target='blank'>
            <h4>{title}</h4>
          </a>
          <small>{item.authors.join(', ')}</small>
          <br />
        </div>
      </div>

      <div className='post-body'>
        <p>{item.summary.slice(0, 60) + '...'}</p>
      </div>

      <div className='sentiment-analysis'>
        <RangeSlider 
          min={-0.70} 
          max={0.70} 
          step={0.01} 
          value={sentValue} 
          stock={stock} />
      </div>

      <div className='time-stamp'>
        <small>{time}</small>
      </div>
    </div>
  );
}

