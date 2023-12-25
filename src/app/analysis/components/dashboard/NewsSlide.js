
import NewsPanel from './NewsPanel';


function NewsSlide({items, stock}) {
  return (
    <>
    {items.map((item, i) => (
        <NewsPanel key={i} stock={stock} item={item}/>
      ))}
    
   </>
  )
}


export default NewsSlide;