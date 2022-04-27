import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id);

    let styles;
    if (props.affair.priority === 'high') styles = {color: 'red'};
    if (props.affair.priority === 'middle') styles = {color: 'orange'};
    if (props.affair.priority === 'low') styles = {color: 'green'};

    return (
        <div>
            <button onClick={deleteCallback}>X</button>
            <span> {props.affair.name} </span>
            <span style={styles}> {props.affair.priority} </span>
        </div>
    )
}

export default Affair
