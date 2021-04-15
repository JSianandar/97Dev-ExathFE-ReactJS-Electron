import { useState, useEffect } from 'react';
import SiteList from "./SiteList";

const Home = () => {
    //let name = 'Bluu#1234'
    //const [name, setName] = useState('Bluu#1234');
    const [age, setAge] = useState(20);
    const [sites, setSites] = useState(null);

  const [name, setName] = useState('Bluu#1234');
  const [isLoading, setIsLoading] = useState(true);

 
  useEffect(()=> {
    setTimeout(()=>{
        fetch('http://localhost:8000/sites')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setSites(data);
            setIsLoading(false);
        });
    }, 3000);
  }, []); 

    return (
        <div className="home">
            {isLoading && <div>Loading...</div>}
            {sites && <SiteList sites={sites} title="All Sites"/>}
            <button onClick={()=> setName('Jason#12345')}>Change Name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;