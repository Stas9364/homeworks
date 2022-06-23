import React from 'react';

type CheckboxPropsType = {
    sendRequest: (e: boolean) => void
}

export const Checkbox: React.FC<CheckboxPropsType> = ({sendRequest}) => {

    const get = (e: React.ChangeEvent<HTMLInputElement>) => sendRequest(e.target.checked);
    
    return (
        <div>
            <input
                type="checkbox"
                onChange={(e) => get(e)}
            />
        </div>
    );
};

