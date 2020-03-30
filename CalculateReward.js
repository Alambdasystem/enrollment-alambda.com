/*
 * React component
 */
class Application extends React.Component {
	constructor() {
		super();
		this.state = {
			expense: 0,
			Sale: 0,
			resultMonth: 0,
			PointTotal: 0
		}
	}


	handleSaleChange(e) {
		var Points;
		const newSale = e.target.value;
		this.setState({
			Sale: newSale,
			resultMonth: newSale,
		});
		if (newSale > 100) {
			Points = Points - 100;
		}
		this.setState({
			PointTotal: Points
		});
	}

	
	render() {
		return (
			<div class="calculator">
				<form>
					<div class="form-group">
						<label>Total Sales</label>
						<input id="Sale" type="number" onChange={this.handleSaleChange.bind(this)} class="form-control" value={this.state.Sale} />
					</div>

					
				</form>
	  Total Purchases: {this.state.resultMonth}

	  Total Points: {this.state.PointTotal}

			</div>
		);
	}
}

/*
 * Render the above component into the div#app
 */
React.render(<Application />, document.getElementById('app'));