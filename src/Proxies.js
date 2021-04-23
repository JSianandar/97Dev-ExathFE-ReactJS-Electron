import React from 'react';
import './css/Proxies.css';
import {Link} from 'react-router-dom';

class Proxies extends React.Component{
	constructor(){
		super()
		this.state = {

		}
	}

	componentDidMount(){

	}

	render(){
		return(
			<div>
				<div className="rectangle_background">
					<div className="export"></div>
					<div className="import"></div>
					<Link to="/create_proxy" className="create"></Link>
				</div>

				<div className="proxies_heading">
					<h1 className="proxies_group">Proxy Group</h1>
					<h1 className="proxies_counts">Proxy Counts</h1>
					<h1 className="actions">Actions</h1>
				</div>

				<div className="proxies_table">
					<p className="group">Proxy 1</p>
					<p className="counts">999</p>
					<Link to="/edit_proxy" className="table_edit"></Link>
					<div className="table_delete"></div>
				</div>
			</div>
		);
	}
}

export default Proxies;