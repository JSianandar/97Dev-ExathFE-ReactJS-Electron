import { useState } from 'react';
import SiteList from "./SiteList";
const Home = () => {
    //let name = 'Bluu#1234'
    const [name, setName] = useState('Bluu#1234');
    const [age, setAge] = useState(20);
    const [sites, setSites] = useState([
    { title: 'Site', body: 'Custom Shopify', status: 'Safe', id: 1 },
    { title: 'Site', body: 'Invincible', status: 'Fast', id: 2 },
    { title: 'Site', body: 'Invincible', status: 'Safe', id: 3 }
  ])

    return (
        <div className="home">
            <SiteList sites={sites} title="All Sites" />
            <SiteList sites={sites.filter((site) => site.status === 'Safe')} title = "Bluu#1234 Tasks" />
        </div>
    );
}

export default Home;