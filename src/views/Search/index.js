import { useState } from 'react';
import SearchBox from "./components/SearchBox";
import SearchResults from './components/SearchTextResults';
import "./styles.css";
import data from '../../data/users.json';

const Search = () => {

    const [isAtTop, setIsAtTop] = useState(false);
    const [results, setResults] = useState([]);

    const handleSeachClick = (searchText) => {
        if (data?.length) {

            const searchTextMinus = searchText.toLowerCase();

            const filteredData = data.filter((value) =>
                value.name.toLowerCase().includes(searchTextMinus) ||
                value.phone.toLowerCase().includes(searchTextMinus) ||
                value.email.toLowerCase().includes(searchTextMinus) ||
                value.username.toLowerCase().includes(searchTextMinus)
            );
            setResults(filteredData);
        };
        setIsAtTop("Buscar");
    };
    console.log(results);

    const handleCloseClick = () => {
        setIsAtTop(false);
        setResults([]);
    };

    return (
        <div className={`search ${isAtTop === "Buscar" ? "search-top" : "search-center"}`}>
            <SearchBox onSearch={handleSeachClick} onClose={handleCloseClick} isSearching={isAtTop} />
            <SearchResults results={results} isSearching={isAtTop} />
        </div>
    );
};

export default Search;