import { useState } from 'react';
import './styles.css';

const SearchBox = ({ onSearch, onClose }) => {

    const [searchText, setSearchText] = useState("");

    // event.target.value === { target: { value } }
    const handleInputValue = ({ target: { value } }) => setSearchText(value);

    const clearInputClose = () => {
        setSearchText("");
        onClose();
    };

    return (
        <div className="search-box">
            <h2 className="search-box-title">Buscador de Personal</h2>
            <div className="search-box-buttons">
                <label>
                    <input
                        value={searchText}
                        onChange={handleInputValue}
                        className="seach-box-input"
                    />
                </label>
                <button onClick={onSearch}>Buscar</button>
                <button onClick={clearInputClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default SearchBox;

