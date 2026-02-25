import React from "react";

function Subtraction({ onSelectedKey }) {
    return (
        <>
            <div className="col">
                <button className="btn btn-primary" onClick={onSelectedKey}>-</button>
            </div>
        </>
    )
}

export default Subtraction;