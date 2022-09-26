import axios from 'axios';
import { useState } from "react";
import "./style.css";
// import styled from "styled-components"
import {IconContext} from "react-icons"
import {FiPlus,FiMinus} from "react-icons/fi"


export default function Display(props){
    const [infos, setInfos] = useState([])  
    const [clicked, setClicked] = useState(false);
    const getData = async() =>{
        const res = await axios.get("http://localhost:8000/api/books")
        setInfos(res.data)
        console.log(res.data)
     }
    
    function toggle (index){
        if(clicked===index){
            return setClicked(null)
        }
      setClicked(index)  
    }


    return(
        <div>
        <button onClick={()=>{
        getData()
        }}>show</button>
    <IconContext.Provider value={{color:"blue", size :"25 px"}}>
    
    < div className ="accordionSection">
    <div className ="container">

        {infos.map((e,index)=>{
            return (
                <>
                <div className="wrap" onClick={()=>toggle(index)} key={index}>
                <h1 key={e._id}> {e.title} {e.author}</h1>
                <span> { clicked===index ? <FiMinus/> :<FiPlus/>}</span>
                </div>
                {clicked === index ? (<div className="dropDown"
                ><p key={e._id}> {e.note} <button> Update</button></p>
                </div>):null}
                
                </>
             )
            })} 
    </div>

    </div>
    
    
    </IconContext.Provider>
    
    </div>  
    )   
    }
