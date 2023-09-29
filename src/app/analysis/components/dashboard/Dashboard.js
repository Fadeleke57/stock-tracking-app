
import './Dashboard.css'

import Overview from './Overview'
import NewsSection from './NewsSection'

function Dashboard({stock, stockName, setLimit, limit}) {
  return (
    <div className='dashboard'>
      <main>
        <div className="dash">
          <Overview stock={stock} stockName={stockName}/>
          <NewsSection stock={stock} setLimit={setLimit} limit={limit}/>
        </div>
      </main>
    </div>
  )
}

export default Dashboard