import { useParams, useHistory } from "react-router-dom";
import useFetch from './useFetch';


const Edit = () => {
	const { id } = useParams();
	const { data: site, error, isLoading } = useFetch('http://localhost:8000/sites/' + id);
    const history = useHistory();


    const handleClick= () =>{
        fetch('http://localhost:8000/sites/' + site.id, {
            method: 'DELETE'
        }).then(()=> {
            history.push('/');
        })
    }

	return(
		<div className="edit-task">
			 { isLoading && <div>Loading...</div> }
             { error && <div>{ error }</div> }
             { site && (
                <article>
                    <h2>{ site.title }</h2>
                    <p> { site.body }</p>
                    <div>{ site.status }</div>
                    <button onClick={handleClick}>Delete Site</button>
               </article>
          )}
		</div>
	);
}

export default Edit;