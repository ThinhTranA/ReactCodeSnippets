class App extends React.Component{
	render(){
		return(
			<div>
				<Hello to="a" from="b" 
				num={3}/>
				<Hello to="a" from="b" num={3}/>
			</div>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('root'));
