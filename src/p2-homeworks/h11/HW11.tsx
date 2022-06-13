import React, {useState} from 'react'
import {Slider} from "@mui/material";

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState([0, 100]);

    const changeValue = (value: number | number[]) => {
        // @ts-ignore
        setValue1(value)

        // @ts-ignore
        setValue2([value, value2[1]])
    }

    const changeValue2 = (value: number | number[]) => {
        // @ts-ignore
        setValue2(value);
        // @ts-ignore
        setValue1(value2[0])
    }
    return (
        <div style={{marginLeft: '50px'}}>
            homeworks 11
            <hr/>


            <Slider
                value={value1}
                onChange={(event, value) => changeValue(value)}
                style={{width: '150px'}}
            />
            <div>{value1}</div>

            <Slider
                value={value2}
                onChange={(event, value) => changeValue2(value)}
                style={{width: '150px'}}
                disableSwap={true}
            />
            <div>{value2[1]}</div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
