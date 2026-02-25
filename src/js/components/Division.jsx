import React from "react";

function Division({ onSelectedKey }) {
    return (
        <>
            <div className="col">
                <button className="btn btn-primary" onClick={onSelectedKey}>/</button>
            </div>
        </>
    )
}

export default Division;