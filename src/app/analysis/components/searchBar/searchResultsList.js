
import "./searchResultsList.css";
import { SearchResult } from "./searchResult";

export const SearchResultsList = ({ results, setStock, setInput, setResults, setStockName, visible, setVisible, setLimit}) => {
  return (
    <div className="results-list">
      {visible && results.map((result, id) => {
        return <SearchResult 
                  name={result.name} 
                  symbol={result.symbol} 
                  key={id} setStock={setStock} 
                  setInput={setInput} 
                  setResults={setResults} 
                  setStockName={setStockName} 
                  setVisible={setVisible}
                  setLimit={setLimit}
                />
      })}
    </div>
  );

};