import start_all_logo from './assets/icons/start_all_logo.svg';
import stop_task_logo from './assets/icons/stop_task_logo.svg';
import edit_task_logo from './assets/icons/edit_task_logo.svg';
import edit_delay_logo from './assets/icons/edit_delay_logo.svg';
import quick_task_logo from './assets/icons/quick_task_logo.svg';
import delete_task from './assets/icons/delete_task.svg';
import create_task_logo from './assets/icons/create_task_logo.svg';



const Navbar = () => {
	return (
		<nav className="navbar">
			<h1>Tasks &nbsp;</h1>
			<a>Welcome, Bluu#1234</a>
			<div className="links">
				<img src= {start_all_logo} 
				alt = "Start Button" width="30" height="30"/>
				
				<img src= {stop_task_logo} 
				alt = "Start Button" width="30" height="30"/>
			
				<img src= {edit_task_logo} 
				alt = "Start Button" width="30" height="30"/>
			
				<img src= {edit_delay_logo} 
				alt = "Start Button" width="30" height="30"/>
				
				<img src= {quick_task_logo} 
				alt = "Start Button" width="30" height="30"/>
				
				<img src= {delete_task} 
				alt = "Start Button" width="40" height="30"/>
				
				<img src= {create_task_logo} 
				alt = "Start Button" width="30" height="30"/>
			</div>
		</nav>
	);
}

export default Navbar;