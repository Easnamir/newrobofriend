import React from 'react';


const SearchBox = ({searchField, searchChange}) => {

	return (<div className='pa2'>
	<input className='bg-light-green b br2 bw2 pa3' type="search" placeholder="search robots" onChange = {searchChange}  />
	 </div>)
}

export default SearchBox;