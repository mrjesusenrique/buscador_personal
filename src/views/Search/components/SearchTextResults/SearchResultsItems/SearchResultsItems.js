const SearchResultsItems = ({name, email}) => {
    return (
        <div className="seach-results">
            <p>{name}</p>
            <p>{email}</p>
        </div>
    );
};

export default SearchResultsItems;