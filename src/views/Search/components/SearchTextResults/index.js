import './styles.css';
import SearchResultsItems from './SearchResultsItems/SearchResultsItems';

const SearchResults = ({ results, isSearching }) => {
    return (
        <div className="search-box-results">
            {
                !results?.length && isSearching && <p className="not-results">No existen resultados</p>
            }

            {
                results?.map((value) => {
                    return (
                        <SearchResultsItems key={value.id} {...value} />
                    );
                })
            }
        </div>
    )
};

export default SearchResults;