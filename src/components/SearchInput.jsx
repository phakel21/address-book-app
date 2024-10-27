function SearchInput ({value, onChange}){

    return(
        <input 
        value={value}
        onChange={onChange}
        type="text" 
        className="form-control" 
        placeholder="Search"/>
    )
}

export default SearchInput;
