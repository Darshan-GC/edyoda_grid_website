import React from 'react';
import '../Grid/grid.css';



const Grid = (item) => {


    

     var Date='';

     const GetDate=(date)=>{
      Date = (date.substring(0,10)).split('-').reverse().join(' ')
      return Date;
     }
    return (  
            
            <article key={item.index}>
            <img className="image" src={item.small_image} alt="edyoda" /> 
            <div className="group" >
            <h3 className="cardH">{item.title}</h3>
            <p style={{paddingTop:"8px"}} ><span className="author" >{item.authorname}</span> | <span className="date">{GetDate(item.posted_on)}</span></p>
            <p className="cardP">{item.description}</p>
            </div>
       </article>
        
          
    
     );
}
 
export default Grid;