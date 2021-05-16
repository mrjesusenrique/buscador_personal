import './styles.css';

const SearchResults = ({ results, isSearching }) => {
    return (
        <div className="search-box-results">
            {
                !results?.length && isSearching && <p className="not-results">No existen resultados</p>
            }

            {
                results?.map((value) => {
                    return (
                        <div className="seach-results" key={value.id}>
                            <p>{value.name}</p>
                            <p>{value.email}</p>
                        </div>
                    );
                })
            }
        </div>
    )
};

export default SearchResults;