import React from 'react';

const Card = ({id, name, email}) => {
	return (

			<div className ='bg-light-blue dib pa2 ma2 br3 bw3 shadow-5 grow tc'>
			<img src = {`https://robohash.org/${name}?200x200`} alt = 'Robot' />
			<h1> {name} </h1>
			<p>{email}</p>
			</div>
		)
}
export default Card;