import React from 'react'

function Result({ result }) {

    const elementStyle = {
        color: '#ffffff'
    }

	return (
		<div className="result">
			<img src={result.Poster} />
			<h3>{result.Title}</h3>
            <p style={elementStyle}>{result.Year}</p>
		</div>
	)
}

export default Result;