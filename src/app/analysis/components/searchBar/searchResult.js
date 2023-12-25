
import "./searchResult.css";

export const SearchResult = ({ symbol, name, setStock, setInput, setResults, setStockName, setVisible, visible,setLimit}) => {

  function handleClick() {
    setStock(symbol);
    setStockName(name);
    setInput("");
    setResults([]);
    setVisible(!visible)
    setLimit(3)
  }

  return (
    <div className='search-result' onClick={handleClick}>
      <h4>{symbol}</h4>
      <p>{name}</p>
    </div>
  );
}