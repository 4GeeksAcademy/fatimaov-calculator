import React from "react";

function Equal({ onSelectedKey }) {
    return (
        <>
            <div className="col-3">
                <button className="btn btn-primary" onClick={onSelectedKey}>=</button>
            </div>
        </>
    )
}

export default Equal;