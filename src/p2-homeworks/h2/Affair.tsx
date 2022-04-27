import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id);

    let spanStyles;
    if (props.affair.priority === 'high') spanStyles = {color: 'red'};
    if (props.affair.priority === 'middle') spanStyles = {color: 'orange'};
    if (props.affair.priority === 'low') spanStyles = {color: 'greenyellow'};

    return (
        <div>
            <button onClick={deleteCallback}>X</button>
            <span> {props.affair.name} </span>
            <span style={spanStyles}> {props.affair.priority} </span>
        </div>
    )
}

export default Affair
