import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some', 'yellow', 'blue'];

function HW12() {
    const dispatch = useDispatch();

    const theme = useSelector<AppStoreType>(state => state.themeReducer.theme) as string;

    const onChangeCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeThemeC(e.currentTarget.value));
    };

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            <SuperRadio
                value={theme}
                name={'radio'}
                options={themes}
                onChange={(e) => onChangeCallback(e)}
            />
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
