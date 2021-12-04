import React from 'react';
import StepsLetter from "../StepsLetter";
import EditContainer from "./EditContainer";

export default function BookCover(){
    return(
        <div>
            <StepsLetter/>
            <EditContainer prevLink={'/edit2'} nextLink={'/edit4'}/>
        </div>
    )
}