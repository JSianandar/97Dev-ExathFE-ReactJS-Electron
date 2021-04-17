import {useState} from "react";
import {useHistory} from 'react-router-dom';

const CreateTask = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [status, setStatus] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		const site = {title, body, status};

		setIsLoading(true);

		fetch('http://localhost:8000/sites', {
			method: 'POST',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(site)
		}).then(() => {
			console.log('new site added');
			setIsLoading(false);
			history.push('/');
		});

		
		
	}
	
	return(
		<div className="createTask">
			<h2>Create Task</h2>
			<form onSubmit={handleSubmit}>
				<label>Site Title: </label>
				<input 
					type="text"
					required
					value = {title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label>Site Size: </label>
				<textarea
					required
					value = {body}
					onChange={(e) => setBody(e.target.value)}
				></textarea>
				<label>Site Status: </label>
				<select
					value={status}
					onChange={(e) => setStatus(e.target.value)}
				>	
					<option value="Safe">Safe</option>
					<option value="Fast">Fast</option>
					<option value="Queue-it">Queue-it</option>
				</select>
				{ !isLoading && <button>Add Site</button>}
				{ isLoading && <button disabled>Adding Site...</button>}
			</form>
		</div>
	);
}

export default CreateTask;