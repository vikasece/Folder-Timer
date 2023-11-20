import { useState } from "react"

const Folder=({explorer})=>{
const [isExpanded, setIsExpanded] = useState(false);
    if(explorer.isFolder){
        return(
            <div>
              <div>
                <span onClick={()=> setIsExpanded(!isExpanded)}>{explorer.name}</span>
                <br />
             </div> 
             <div style={{marginLeft:'10px', display: isExpanded ? "block":"none", cursor:'pointer'}}>
              {
                explorer.items.map((folderItems,index)=>{
                    return(
                        <Folder key={index} explorer={folderItems}  />
                    )
                })
              }
             </div>
            
            </div>
        )
    }else{
        return(
            <span>
                {explorer.name}
                <br/>
            </span>
        )
    }
    }
  

export default Folder;

