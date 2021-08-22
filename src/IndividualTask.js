import React from 'react';
import './css/IndividualTask.css';
import axios from 'axios';

import {Link} from 'react-router-dom';

import table_edit from "./assets/icons/table_edit.png";
import table_delete from "./assets/icons/table_delete.png";
import table_play from "./assets/icons/table_play.png";
import table_stop from "./assets/icons/table_stop.png";
import EditTask from "./EditTask.js";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

class IndividualTask extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			tasks: [],
			profiles: [],
			proxies: [],
			refreshPageState: '',
			id: ''
		}
	}

	handleDelete = async(event) => {
		event.preventDefault();
		axios.delete(`http://exath.io/api/tasks/update/${event.target.name}`)
		.then(async res => {
			notifySuccess('Successfully deleted task', 3000)
            await new Promise(r => setTimeout(r, 1000))
			this.props.refreshPage()
		}, error => {
			notifyError('Error while deleting task..', 3000)
		})
	}

	handleStartTask = async (event) => {
        event.preventDefault();
        axios.get(`http://exath.io/api/action?id=${event.target.name}&act=start`)
        .then(async res => {
			notifySuccess('Successfully started task', 3000)
            await new Promise(r => setTimeout(r, 1000))
			this.props.refreshPage()
        }, error=>{
			notifyError('Error while starting task..', 3000)
		})
	}

	handleStopTask = async(event) => {
        event.preventDefault();
        axios.get(`http://exath.io/api/action?id=${event.target.name}&act=stop`)
        .then(async res => {
			notifySuccess('Successfully stopped task', 3000)
            await new Promise(r => setTimeout(r, 1000))
            this.props.refreshPage()
        }, error=>{
			notifyError('Error while stopping task..', 3000)
		})
	}

	async componentDidMount(){
		await this.getTasks()
		await this.getProfiles()
		await this.getProxy()
	}

	async componentDidUpdate(prevprop){
		if(prevprop.refreshPageState != this.props.refreshPageState){
			await this.getTasks();
			await this.getProfiles();
			await this.getProxy();
			this.setState({
				refreshPageState : this.props.refreshPageState
			})
		}
	}

	getTasks = async () =>{
		await axios.get('http://exath.io/api/tasks')
		.then(response => {
			this.setState({
				tasks : response.data
			})
			this.props.updateTaskStateValue('totalTasksCount', response.data.length)
			if (response.data.length > 0) {
				var shouldRefreshPage = false
				if (this.props.monitorDelay != response.data[0].monitorDelay) {
					this.props.updateTaskStateValue('monitorDelay', response.data[0].monitorDelay)
					shouldRefreshPage = true
				}
				if (this.props.retryDelay != response.data[0].retryDelay) {
					this.props.updateTaskStateValue('retryDelay', response.data[0].retryDelay)
					shouldRefreshPage = true
				}
				if (shouldRefreshPage) this.props.refreshPage();
			}
		}, error => {
			notifyError('Error while retrieving tasks..', 3000)
		})
	}

	getProfiles = async() =>{
		await axios.get('http://exath.io/api/profiles/')
		.then(response => {
			this.setState({
				profiles : response.data
			})
		}, error => {
			notifyError('Error while retrieving profiles..', 3000)
		})
	}

	getProxy = async() =>{
		await axios.get('http://exath.io/api/proxies/')
		.then(response => {
			
			this.setState({
				proxies : response.data
			})
		}, error => {
			notifyError('Error while retrieving proxies..', 3000)
		})
	}

	render(){
		return(
			<div className="IndividualTask">
			{
				this.state.tasks.reverse().map((e, index) => {
					var profile = ''
					for(var i=0; i<this.state.profiles.length; i++) {
						if(this.state.profiles[i].id == e.profile) {
							profile = this.state.profiles[i].name;
							break;
						}
						if (e.profiles==""){
							profile = e.profiles;
							break;
						}
					}

					var proxy = ''
					for(var i=0; i<this.state.proxies.length; i++) {
						if (e.proxyGroup == "Leaf" || e.proxyGroup == "LocalHost"){
							proxy = e.proxyGroup;
							break;
						}
						if (this.state.proxies[i].id == e.proxyGroup) {
							proxy = this.state.proxies[i].group;
							break;
						}
						if(e.proxyGroup == ""){
							proxy = e.proxyGroup;
							break;
						}
					}
					var newPosKey = ''
					var newNegKey = ''

					try{
						var posKey = e.positiveKey
						var negKey = e.negativeKey
						
						for(var i=0; i<posKey.length; i++) {
							if (i == posKey.length-1)
							newPosKey = newPosKey.concat('+'.concat(posKey[i]))
							//if (posKey== "")
							//newPosKey= posKey
							else
							newPosKey = newPosKey.concat('+'.concat(posKey[i]+', '))
						}
						
						for(var i=0; i<negKey.length; i++) {
							if (i == negKey.length-1)
							newNegKey = newNegKey.concat('-'.concat(negKey[i]))
							//if (negKey== "")
							//newNegKey= negKey
							else
							newNegKey = newNegKey.concat('-'.concat(negKey[i]+', '))
						}
					} catch (error) {

					}
					
					return(
						<React.Fragment>
							<div className="individual-task-wrapper mx-auto">
								<div className="individual-task row">
									<div className="col ml-2 pt-2">
										<p className="headings text-center">{e.site}</p>
										<h3 className="headings-status text-center" style={{marginTop: '-15px'}}>{e.mode}</h3>
									</div>

									<div className="col">
										<p className="headings-other text-center" style={{marginLeft: '-10px'}}>{e.size}</p>
									</div>

									<div className="col-3">
										<p className="headings-other text-center" style={{marginLeft: '-20px',  color: '#C4C4C4'}}>{e.positiveKey[0] != '' && newPosKey + ', '}{e.negativeKey[0] != '' && newNegKey + ', '}{e.sku != '' && '&' + e.sku + ', '}{e.directLink != '' && e.directLink}</p>
									</div>
									<div className="col">
										<p className="headings-other text-center" style={{marginLeft: '-35px'}}>{profile}</p>
									</div>
									<div className="col ">
										<p className="headings-other text-center" style={{marginLeft: '-35px'}}>{proxy}</p>
									</div> 
									<div className="col-3 ">
										<p className="headings-other text-center" style={{marginLeft: '-30px'}}><span style={{color: 'grey', marginLeft: '-10px'}}>Idle</span></p>
									</div>
									<div className="col">
										<ul className="icons-wrapper pt-2" style={{marginLeft: '-30px'}}>
											<li className="icon"><Link onClick = {this.handleStartTask} ><img className= "icon-play" src={table_play} name = {e.id} /></Link></li>
											<li className="icon"><Link style={{ textDecoration: 'none' }} onClick = {this.handleStopTask}> <img src={table_stop} className= "icon-stop" name = {e.id}/></Link></li>
											<li className="icon"><Link data-toggle="modal" data-target={`#edit-${e.id}`}><img className= "icon-edit" src={table_edit} /></Link></li>
											<li className="icon"><Link onClick = {this.handleDelete}><img src={table_delete} className= "icon-delete" name = {e.id} /></Link></li>
										</ul>
									</div>

								</div>
							</div>
							<div className="row pt-2"></div>
							{/*EditTaskModal*/}
							<EditTask 
								id={e.id}
								size={e.size}
								site={e.site}
								mode={e.mode}
								sku={(e.positiveKey[0] != '' ?  newPosKey + ',' : '') + (e.negativeKey[0] != '' ? newNegKey + ',' : '') + (e.sku != '' ?  '&' + e.sku + ',' : '') + ',' + (e.directLink!= '' ? '#' + e.directLink : '')}
								profile={e.profile}
								proxyGroup={e.proxyGroup}
								accountEmail={e.accountEmail}
								accountPassword={e.accountPassword}
								refreshPageState={this.state.refreshPageState}
								refreshPage={this.props.refreshPage.bind(this)}
							/>
							{/*EditTaskModal*/}
							
						</React.Fragment>
					)
				})
			}
			</div>
		);
	}
}

export default IndividualTask;