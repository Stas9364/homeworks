import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import moment from "moment";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId);
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date());
        }, 1000)
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(!show);
    };
    const onMouseLeave = () => {
        setShow(!show);
    };

    const stringTime = moment(date).format('LTS');
    const stringDate = moment(date).format("MMM Do YY");

    return (
        <div>
            <div
                style={{width: '250px'}}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
