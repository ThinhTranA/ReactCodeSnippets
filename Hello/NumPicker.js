function getNum() {
	return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
	render() {
        console.log(this.props);
		const num = getNum();
		let msg;

		return (
			<div>
				<h1>Your number is {num}</h1>
				<p>{num === 7 ? 'Congrats': 'Try Again'}</p>
				{
					num === 7 && <img src="https://i.giphy.com/media/nXx0jZrbnbRxS/giphy.webp"></img>  
					//num === 7 ? <img src="https://i.giphy.com/media/nXx0jZrbnbRxS/giphy.webp"></img> : null //equivalent
				}
			</div>

		);
	}
}