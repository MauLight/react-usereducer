import React, { useRef } from "react";

export const Focus = () => {
    const formInputRef = useRef(null);

    const focusInput = () => {
        formInputRef.current.focus();
    }

    return (
        <div>
            <h1>Using the useRef Hook!</h1>
            <input type="text" ref={formInputRef} className="form-control" />
            <button onClick={focusInput} className="btn rounded-0 border">Focus!</button>
        </div>
    )


}