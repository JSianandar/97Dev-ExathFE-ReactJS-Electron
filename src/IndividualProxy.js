import React from 'react';
import './css/IndividualProxy.css';
import axios from 'axios';

import {Link} from 'react-router-dom';
import table_edit from "./assets/icons/table_edit.png";
import table_delete from "./assets/icons/table_delete.png";
import EditProxy from './EditProxy.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (text, delay) => toast.dark(text, {
    position: 'bottom-right',
    autoClose: delay,
    hideProgressBar: false
});

const notifySuccess = (text, delay) => toast.success(text, {
    position: 'bottom-right',
    autoClose: delay,
    hideProgressBar: false
});

const notifyError = (text, delay) => toast.error(text, {
    position: 'bottom-right',
    autoClose: delay,
    hideProgressBar: false
});

class IndividualProxy extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			proxies: [],
			refreshPageState: '',
			id: '',
		}
	}

	componentDidMount(){
		this.getProxies()
	}

	async componentDidUpdate(prevprop){
		if(prevprop.refreshPageState != this.props.refreshPageState){
			await this.getProxies();
			this.setState({
				refreshPageState : this.props.refreshPageState
			})
		}
	}

	handleDelete = async(event) => {
		event.preventDefault();
		axios.delete(`http://exath.io/api/proxies/update/${event.target.name}`)
		.then(async res => {
			notifySuccess('Successfully deleted proxy', 3000)
            await new Promise(r => setTimeout(r, 1000))
			this.props.refreshPage()
		}).catch(async error =>{
			notifyError('Error deleting proxy ', 3000)
		})
	}

	getProxies = async () =>{
		await axios.get('http://exath.io/api/proxies')
		.then(response => {
			this.setState({
				proxies : response.data
			})
		},
		error=>{
		
		})
	}

	render(){
		return(
			<div className="IndividualProxy">
			{
				this.state.proxies.reverse().map( (e, index) =>{

					return(
						<React.Fragment>
							<div className="row pt-2"></div>
							<div className="individual-proxy mx-auto row">
								<div className="col-2 pt-1">
									<h1 className="headings text-center">{e.group}</h1>
								</div>

								<div className="col-2 pt-1">
									<h1 className="headings text-center">{e.proxyList.length}</h1>
								</div>

								<div className="col-6"></div>

								<div className="col-2 ml-0">
									<ul className="icons-wrapper" style={{marginLeft:'10px'}}>
										<li className="icon"><Link data-toggle="modal" data-target={`#edit-${e.id}`}><img className= "icon-edit" src={table_edit} /></Link></li>
										<li className="icon"><Link onClick={this.handleDelete} ><img src={table_delete} className= "icon-delete" name = {e.id} /></Link></li>
									</ul>
								</div>
							</div>
							{/*EditProxyModal*/}
								<EditProxy group = {e.group} proxyList = {e.proxyList} id= {e.id}  refreshPageState={this.state.refreshPageState} refreshPage={this.props.refreshPage.bind(this)}/>
							{/*EditProxyModal*/}	
							
						</React.Fragment>
					)
				})
			}
			</div>
			
		);
	}
}

export default IndividualProxy;