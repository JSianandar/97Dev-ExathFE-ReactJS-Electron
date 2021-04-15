import { useState } from "react";

const SiteList = ({ sites, title}) => {
  return(
     <div className="home">
        <h2>{title}</h2>
        {sites.map(site => (
            <div className="site-preview" key={site.id} >
                <h1>{ site.title }</h1>
                <h2>{ site.body }</h2>
                <p>{ site.status }</p>
            </div>
        ))}
      </div>
  );


        

}
 
export default SiteList;