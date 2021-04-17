import { useParams } from "react-router-dom";
import useFetch from './useFetch';


const EditTask = () => {
	const { id } = useParams();
	const { data: site, error, isLoading } = useFetch('http://localhost:8000/sites/' + id);

	return(
		<div className="edit-task">
			 { isLoading && <div>Loading...</div> }
             { error && <div>{ error }</div> }
             { site && (
                <article>
                    <h2>{ site.title }</h2>
                    <p> { site.body }</p>
                    <div>{ site.status }</div>
               </article>
          )}
		</div>
	);
}

export default EditTask;