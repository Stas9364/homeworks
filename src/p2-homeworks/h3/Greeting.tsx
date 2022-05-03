import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onInputKeyPressHandler: (event: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({
                                                   name,
                                                   setNameCallback,
                                                   addUser,
                                                   error,
                                                   totalUsers,
                                                   onInputKeyPressHandler
                                               }) => {

    let inputClass = error.length > 0 ? s.error : s.allowed;

    return (
        <div className={s.container}>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   onKeyDown={onInputKeyPressHandler}
            />
            <button className={s.myButton} onClick={addUser}> add</button>
            <span> {totalUsers} </span>
            <div> {error} </div>
        </div>
    )
}

export default Greeting
