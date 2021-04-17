import SiteList from "./SiteList";
import useFetch from './useFetch';

const Home = () => {
    const {data: sites, isLoading, error} = useFetch('http://localhost:8000/sites');
     
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {sites && <SiteList sites={sites} title="All Sites"/>}
        </div>
    );
}

export default Home;