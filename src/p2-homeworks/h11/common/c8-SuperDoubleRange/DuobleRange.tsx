import React, {useState} from "react";
import {Range, getTrackBackground} from "react-range";

type TestPropsType = {
    value1: number
    value2: number
    setValue1: (value1: number) => void
    setValue2: (value2: number) => void
}

export const Test: React.FC<TestPropsType> = ({
                                                  value1,
                                                  value2,
                                                  setValue1,
                                                  setValue2
                                              }) => {
    const STEP = 1;
    const MIN = 0;
    const MAX = 100;
    const [values, setValues] = useState([value1, value2]);

    return (
        <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={values => {
                console.log(values);
                setValues(values);
                setValue1(values[0]);
                setValue2(values[1]);
            }}
            renderTrack={({props, children}) => (
                // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                        ...props.style,
                        height: "36px",
                        display: "flex",
                        width: "200px"
                    }}
                >
                    <div
                        ref={props.ref}
                        style={{
                            height: "5px",
                            width: "200px",
                            borderRadius: "4px",
                            background: getTrackBackground({
                                values,
                                colors: ["#ccc", "#548BF4", "#ccc"],
                                min: MIN,
                                max: MAX
                            }),
                            alignSelf: "center"
                        }}
                    >
                        {children}
                    </div>
                </div>
            )}
            renderThumb={({props, isDragged}) => (
                <div
                    {...props}
                    style={{
                        ...props.style,
                        height: "20px",
                        width: "20px",
                        borderRadius: "4px",
                        backgroundColor: "#FFF",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow: "0px 2px 6px #AAA"
                    }}
                >
                    <div
                        style={{
                            height: "16px",
                            width: "5px",
                            backgroundColor: isDragged ? "#548BF4" : "#CCC"
                        }}
                    />
                </div>
            )}
        />
    );
};
