import React from 'react';
import './css/EditProxy.css';
import {Link} from 'react-router-dom';

class EditProxy extends React.Component{
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
				<h1 className="edit_proxy_group">Edit Proxy Group</h1>
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
				<Link to="/proxies" className="exit_ep">Close</Link>
				<Link to="/proxies" className="edit_ep">Save</Link>
			</div>
		);
	}
}

export default EditProxy;