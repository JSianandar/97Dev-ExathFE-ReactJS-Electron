import {useState} from "react";


import { Link } from 'react-router-dom';

const Activation = () => {
	const [key, setKey] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	return(
    <div>
	    <div className="exath-activation"></div>
        <form>
            <input 
            type="text"
            required
            placeholder = "Enter your key"
            className="key_input"
            />
        </form>
    
        <Link className="close_button"></Link>
        <Link to="/home" className="activate_button"></Link>
    </div>
	);
}

export default Activation;