import React from "react";

function ClearAll({ onSelectedKey }) {
    return (
        <>
            <div className="col">
                <button className="btn btn-primary" onClick={onSelectedKey}>AC</button>
            </div>
        </>
    )
}

export default ClearAll;