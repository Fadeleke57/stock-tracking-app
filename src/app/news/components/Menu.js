import dynamic from 'next/dynamic'

function Menu({active, setActive, setTopic}) {
    const links = [
      { id: 1, name: "General", value: "financial_markets" },
      { id: 2, name: "Finance", value: "finance" },
      { id: 3, name: "Technology", value: "technology" },
      { id: 4, name: "Energy & Transportation", value: "energy_transportation" },
      { id: 5, name: "Earnings", value: "earnings" },
      { id: 6, name: "Economy", value: "economy_macro" },
      { id: 7, name: "Crypto", value: "blockchain" },
    ]
   
    function onClick(id, value) {
      setActive(id)
      setTopic(value)
    }
  
    return (
      <div className="news-menu" >
          {links.map(link => (
            <a
              key={link.id}
              className={active === link.id ? "active" : "inactive"} 
              onClick={() => onClick(link.id, link.value)}
            >
              {link.name}
            </a>
          ))}
      </div>
    )
  }
  
  export default dynamic (() => Promise.resolve(Menu), {ssr: false})