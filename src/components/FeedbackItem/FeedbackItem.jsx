import React from "react";
import './FeedbackItem.css'
import {FaTimes,FaSyringe} from  "react-icons/fa";
import { confirm } from "react-confirm-box";

const FeedbackItem =({rating,msg,myId, deleteItem})=>{
   
    const deleteThis = async (e)=>{
        if( await confirm("Are you sure?")){
            deleteItem (myId)
        }   
    }

    
  return  <div className="card">
        <div className="rating">{rating}</div>
        <div className="icon_div">
        <FaSyringe  />
        <FaTimes onClick={deleteThis}/>
        </div>
        <p className="feedback_text">
            {msg}
        </p>
</div>
}
   


export default FeedbackItem;