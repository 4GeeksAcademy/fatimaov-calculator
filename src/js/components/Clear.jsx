import React from "react";

function Clear({ onSelectedKey }) {
    return (
        <>
            <div className="col">
                <button className="btn btn-primary" onClick={onSelectedKey}>C</button>
            </div>
        </>
    )
}

export default Clear;