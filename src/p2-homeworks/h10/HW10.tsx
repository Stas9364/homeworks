import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {loadingAC} from './bll/loadingReducer';
import {AppStoreType} from './bll/store';
import {useDispatch, useSelector} from 'react-redux';

import styles from './HW10.module.css';

function HW10() {

    const dispatch = useDispatch();
    const loading = useSelector<AppStoreType>(state => state.loading.isLoading);

    const setLoading = () => {
        dispatch(loadingAC(true));
        setTimeout(() => dispatch(loadingAC(false)), 5000);
        console.log('loading...');
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div id="escapingBallG" className={styles.escapingBallG1}>
                        <div id="escapingBall_1" className={styles.escapingBallG}></div>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
