// import axios from 'axios';
import info from "./data"
import { useState } from "react";
import "./style.css";
// import styled from "styled-components"
import {IconContext} from "react-icons"
import {FiPlus,FiMinus} from "react-icons/fi"


export default function Display(props){
    const [infos, setInfos] = useState([])  
    const [clicked, setClicked] = useState(false);
    function getData(){
        setInfos(info)
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
                <h1> {e.book}</h1>
                <span> { clicked===index ? <FiMinus/> :<FiPlus/>}</span>
                </div>
                {clicked === index ? (<div className="dropDown"
                ><p> {e.notes} <button> Update</button></p>
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
