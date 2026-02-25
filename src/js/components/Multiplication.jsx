import React from "react";

function Multiplication({ onSelectedKey }) {
    return (
        <>
            <div className="col">
                <button className="btn btn-primary" onClick={onSelectedKey}>x</button>
            </div>
        </>
    )
}

export default Multiplication;