import { useState } from 'react';
import './styles.css';

const SearchBox = ({ onSearch, onClose, isSearching }) => {

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
                        className="search-box-input"
                    />
                </label>

                <button
                    className="btn-buscar"
                    onClick={() => onSearch(searchText)}
                    disabled={!searchText.length}>
                    Buscar
                </button>

                {isSearching &&
                    <button
                        className="btn-cerrar"
                        onClick={clearInputClose}
                        disabled={!searchText.length}>
                        Cerrar
                    </button>
                }

            </div>
        </div>
    );
};

export default SearchBox;

