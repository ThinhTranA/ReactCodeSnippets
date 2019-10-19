class App extends React.Component{
	render(){
		return(
			<div>
				<NumPicker to="a" from="b"/>
				<Hello to="a" from="b" num={3}/>
			</div>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('root'));
