import React from "react";

function Addition({ onSelectedKey }) {
    return (
        <>
            <div className="col">
                <button className="btn btn-primary" onClick={onSelectedKey}>+</button>
            </div>
        </>
    )
}

export default Addition;