import React from 'react';
import StepsLetter from "../StepsLetter";
import EditContainer from "./EditContainer";

export default function FinalReview(){
    return(
        <div>
            <StepsLetter/>
            <EditContainer prevLink={'/edit4'} nextLink={'/orders'} />
        </div>
    )
}