import React from 'react';

type ButtonPropsType = {
    sendRequest: () => void
}

export const Button: React.FC<ButtonPropsType> = ({sendRequest}) => {
    return (
        <div>
            <button
                onClick={sendRequest}
            >Request
            </button>
        </div>
    );
};

