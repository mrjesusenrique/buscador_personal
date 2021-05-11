import { useState } from 'react';
import SearchBox from "./components/SearchBox"
import "./styles.css";

const Search = () => {

    const [isAtTop, setIsAtTop] = useState(false);

    const handleSeachClick = () => setIsAtTop("Buscar");
    const handleCloseClick = () => setIsAtTop("Cerrar");

    return (
        <div className={`search ${isAtTop === "Buscar" ? "search-top" : "search-center"}`}>
            <SearchBox onSearch={handleSeachClick} onClose={handleCloseClick} />
        </div>
    );
};

export default Search;