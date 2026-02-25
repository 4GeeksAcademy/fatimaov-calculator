import React from "react";

function Modulus({ onSelectedKey }) {
    return (
        <>
            <div className="col">
                <button className="btn btn-primary" onClick={onSelectedKey}>%</button>
            </div>
        </>
    )
}

export default Modulus;