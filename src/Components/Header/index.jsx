import React from 'react';
import '../Header/header.css'
import { useState, useEffect } from 'react';
import axios from '../../../../../Movie App React/movies-app/node_modules/axios';
import Grid from '../Grid';

const Header = (props) => {
   const[segment, setSegment]= useState([])
   const[topBarData, setTopBarData]= useState([])
   const[gridData, setGridData]= useState([])
   const[gridDataLoad, setGridLoad]= useState(0)
   const[AiData, setAiData]= useState([])
   const[AiDataLoad, setAiDataLoad]= useState(0)
   const[CcData, setCcData]= useState([])
   const[CcDataLoad, setCcDataLoad]= useState(0)
   const[DevData, setDevData]= useState([])
   const[DevDataLoad, setDevDataLoad]= useState(0)
   const[PlData, setPlData]= useState([])
   const[PlDataLoad, setPlDataLoad]= useState(0)
   const[MadData, setMadData]= useState([])
   const[MadDataLoad, setMadDataLoad]= useState(0)
   const[TatData, setTatData]= useState([])
   const[TatDataLoad, setTatDataLoad]= useState(0)
   const[GtcData, setGtcData]= useState([])
   const[GtcDataLoad, setGtcDataLoad]= useState(0)
   const[OData, setOData]= useState([])
   const[ODataLoad, setODataLoad]= useState(0)
   const [loader, setLoader]= useState(1)
   const[clickID,setId]=useState('')
   const forward = [];
   useEffect(()=>{
    axios
    .get(`https://api.edyoda.com/v1/blog/postcategories/`)
    .then((res) => {
      setSegment(res.data)
    });

    axios
    .get(`https://api.edyoda.com/v1/blog/`)
    .then((res) => {
      setGridData(res.data);
      setLoader(0);
    });
   },[])

   const allCall = () =>{
     
     if(gridDataLoad===0)
     {setLoader(1)
      axios
      .get(`https://api.edyoda.com/v1/blog/`)
      .then((res) => {
        setGridData(res.data);
        setLoader(0);
        setGridLoad(1)
      });
     }
    
   };



   const restCall = (id) =>{

     
       switch(id){
         case 0: 
         if(AiDataLoad===0)
         {setLoader(1)
          axios.get(`https://api.edyoda.com/v1/blog/${segment[id].slug}/`)
          .then((res)=>{
          setAiDataLoad(1)
          setLoader(0)
          setAiData(res.data.posts)})
         }
         
         break;
         case 1:  if(CcDataLoad===0)
         {setLoader(1)
          axios.get(`https://api.edyoda.com/v1/blog/${segment[id].slug}/`)
          .then((res)=>{setCcData(res.data.posts)
          setCcDataLoad(1)
          setLoader(0)})
         }
         
         break;
         case 2: if(DevDataLoad===0)
         {setLoader(1)
          axios.get(`https://api.edyoda.com/v1/blog/${segment[id].slug}/`)
          .then((res)=>{setDevData(res.data.posts)
          setDevDataLoad(1)
          setLoader(0)})
         }
         break;
         case 3: if(PlDataLoad===0)
         {setLoader(1)
          axios.get(`https://api.edyoda.com/v1/blog/${segment[id].slug}/`)
          .then((res)=>{setPlData(res.data.posts)
          setPlDataLoad(1)
          setLoader(0)})
         }
         break;
         case 4: if(MadDataLoad===0)
         {setLoader(1)
          axios.get(`https://api.edyoda.com/v1/blog/${segment[id].slug}/`)
          .then((res)=>{setMadData(res.data.posts)
          setMadDataLoad(1)
          setLoader(0)})
         }
         break;
         case 5: if(TatDataLoad===0)
         {setLoader(1)
          axios.get(`https://api.edyoda.com/v1/blog/${segment[id].slug}/`)
          .then((res)=>{setTatData(res.data.posts)
          setTatDataLoad(1)
          setLoader(0)})
         }
         break;
         case 6:if(GtcDataLoad===0)
         {setLoader(1)
          axios.get(`https://api.edyoda.com/v1/blog/${segment[id].slug}/`)
          .then((res)=>{setGtcData(res.data.posts)
          setGtcDataLoad(1)
          setLoader(0)})
         }
         break;
         case 7: if(ODataLoad===0)
         {setLoader(1)
          axios.get(`https://api.edyoda.com/v1/blog/${segment[id].slug}/`)
          .then((res)=>{setOData(res.data.posts)
          setODataLoad(1)
          setLoader(0)})
         }
         break;
         default:  axios.get(`https://api.edyoda.com/v1/blog/`)
         .then((res)=>{setGridData(res.data.posts)
         setLoader(0)})
         break;
        
        
       }

     
 
    // });
   };

   const classModifier =()=>{
    var oldActive = document.getElementsByClassName("catg");
    var select = document.getElementById(`${props.click}H`)
    for(var i=0;i<oldActive.length;i++){
      oldActive[i].classList.remove("active");
     }
     select.classList.add("active")
   }

   const navClickSegment = (id)=>{
     setLoader(1)
      axios
         .get(`https://api.edyoda.com/v1/blog/${segment[id].slug}/`)
         .then((res)=>{
        // setId(id)   
        setTopBarData(res.data.posts)
        setLoader(0)
     })
   }

   
    useEffect(() => {
     
      if(props.click)
      { 
      
       const num=props.click
       navClickSegment(num)
       setId(55)
       classModifier()
      
     }
     },[props.click]);

    
    
    const clickHandler =(e)=> {
    var oldActive = document.getElementsByClassName("catg");
   
     for(var i=0;i<oldActive.length;i++){
      oldActive[i].classList.remove("active");
     }
      e.target.classList.add('active');
      const num = parseInt(e.target.id)
      e.target.id === '77'? allCall() : restCall(num)
       setId(num)
     
     }

    return ( 

      
      <div>  
      <div id="Header_wrap">
      <h2 id="Heading">Latest Posts</h2>
      <h6 id="filter"> 
      <i id="filogo"  className="fas fa-filter"></i>Filter by Category</h6>
     <section className="sec">
     <p className="catg active " id='77' onClick={clickHandler}>All</p>
     {segment.map((item, index) => (
         <p className="catg" onClick={clickHandler} key={index} id={`${index}H`}>{item.title}</p>    
      ))}
    </section>
        </div>
        <div id="gridWrapper">
         
         <div id="tern">{loader===0 && clickID==='' ? forward.push(gridData):''}</div> 
         <div id="tern">{loader===0 && clickID===77 ? forward.push(gridData):''}</div> 
         <div id="tern">{loader===0 && clickID===0 ? forward.push(AiData):''}</div> 
         <div id="tern">{loader===0 && clickID===1 ? forward.push(CcData):''}</div> 
         <div id="tern">{loader===0 && clickID===2 ? forward.push(DevData):''}</div> 
         <div id="tern">{loader===0 && clickID===3 ? forward.push(PlData):''}</div> 
         <div id="tern">{loader===0 && clickID===4 ? forward.push(MadData):''}</div> 
         <div id="tern">{loader===0 && clickID===5 ? forward.push(TatData):''}</div> 
         <div id="tern">{loader===0 && clickID===6 ? forward.push(GtcData):''}</div> 
         <div id="tern">{loader===0 && clickID===7 ? forward.push(OData):''}</div> 
         <div id="tern">{loader===0 && clickID===55 ? forward.push(topBarData):''}</div> 
         
          
          {loader?  <div id='loader'>
        <div className="spinner1">
          <div className="rect11"></div>
          <div className="rect21"></div>
          <div className="rect31"></div>
          </div>
        </div>: forward[0].map((item, index) => (
            <Grid {...item} index={index}  />
        ))}
        </div>

        
       </div>
     
      
     );
}
 
export default Header;