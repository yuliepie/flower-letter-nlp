import React from 'react';
import StepsLetter from "../StepsLetter";
import EditContainer from './EditContainer';


export default function FlowerLang(){
    return(
        <div>
            <StepsLetter/>
            <EditContainer prevLink={'/edit1'} nextLink={'/edit3'}/>
        </div>
    )
}