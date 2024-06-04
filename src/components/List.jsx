import React from "react";
import Item from "./Item";
import "./list.css"
//import { v4 as uuidv4 } from 'uuid';




const List = (props)=>{
    const {items , onDelete} = props
 
    return  <div>
    <ul className="listItem">
        {items.map((e,index)=>{
        return  <Item key={index} id={index} {...e} onDelete={onDelete}/>
        })}
    </ul> 
    </div>
    
    
}

export default List 