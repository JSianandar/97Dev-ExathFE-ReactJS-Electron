import React from 'react';
import './css/CreateProxy.css';
import {Link} from 'react-router-dom';

class CreateProxy extends React.Component{
	constructor(){
		super()
		this.state = {

		}
	}

	componentDidMount(){

	}

	render(){
		return(
			<div className="rectangle_background1">
				<h1 className="create_proxy_group">Create Proxy Group</h1>
				<div className="text_area">
					<h1 className="paste_proxy_group">Paste Your Proxy Here</h1>
					<form>
						<input
							type="text"
							required
							placeholder = "ipadress:port:user:password"
							className="input_proxy_group"
						/>
					</form>
				</div>
				<form>
					<input
						type="text"
						required
						placeholder = "Group Name"
						className="proxy_group_name"
					/>
				</form>
				<Link to="/proxies" className="exit_cp">Close</Link>
				<Link to="/proxies" className="create_cp">Create</Link>
			</div>
		);
	}
}

export default CreateProxy;