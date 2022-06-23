import React from 'react';
import {Button} from "./Button";
import {Checkbox} from "./Checkbox";
import {createDataApi} from "./RequestAPI";

export const Request = () => {
    let valueFromCheckbox: boolean = false;

    const getCheckboxChecked = (e: boolean) => {
        valueFromCheckbox = e;
    };

    const sendRequest = () => {
        createDataApi.create(valueFromCheckbox)
            .then(res => console.log(res))
            .catch(error => {
                console.log({...error});
                console.log(error.response
                    ? error.response.data.errorText
                    : error.message
                );
            });
    };

    return (
        <div>
            <Checkbox sendRequest={getCheckboxChecked}/>
            <Button sendRequest={sendRequest}/>
        </div>
    );
};

