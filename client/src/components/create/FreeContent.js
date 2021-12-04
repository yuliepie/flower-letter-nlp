import React from 'react';
import StepsLetter from "../StepsLetter";
import EditContainer from "./EditContainer";

export default function FreeContent(){
    return(
        <div>
            <StepsLetter/>
            <EditContainer prevLink={'/edit3'} nextLink={'/edit5'}/>
        </div>
    )
}