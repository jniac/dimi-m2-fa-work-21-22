var green = '#39D1B4';
var yellow = '#FFD712';

var Toggle = React.createClass({
	getInitialState: function(){
		return {
			color: green
		}
	},
	
	randomColor: function() {
	    var letters = '0123456789ABCDEF';
	    var colory = '#';
	    for (var i = 0; i < 6; i++ ) {
		  colory += letters[Math.floor(Math.random() * 16)];
	    }
	    this.setState({color: colory});
					 
	},
	
	render: function(){
		return (
			<div style={{background: this.state.color}}>
				<button onClick={this.randomColor}>Make change</button>
			</div>
		);
	}
});

ReactDOM.render(<Toggle />, document.getElementById('app'));