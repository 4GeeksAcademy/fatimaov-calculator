import React from "react";

function DigitButton({ value, onSelectedKey }) {

    return (
        <>
            <div className="col">
                <button className="btn btn-primary" value={value} onClick={onSelectedKey}>{value}</button>
            </div>
        </>
    )
}

export default DigitButton;