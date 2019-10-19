function getNum() {
	return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
	render() {
		const num = getNum();
		return (
			<div>
				<h1>Your number is {num}</h1>
				<p>{num === 7 ? 'Congrats': 'Try Again'}</p>
				{
					num === 7 && <img src="https://i.giphy.com/media/nXx0jZrbnbRxS/giphy.webp"></img>  //equivalent
					//num === 7 ? <img src="https://i.giphy.com/media/nXx0jZrbnbRxS/giphy.webp"></img> : null
				}
			</div>

		);
	}
}


ReactDOM.render(<NumPicker />, document.getElementById('root'));