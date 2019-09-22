class Search{
    createSearch(){
        let output = `
        <header class="header-component">
           <label class="search-element">
              Search by name:
              <input type="text" class="search-field" placeholder="Enter user name...">
           </label>
        </header>
        `

        return output;
    }
}

export default Search;