import React from "react";

function Display({ accumulator, total }) {
    return (
        <>
            <div className="col p-0">
                <p className="bg-white text-end p-3 m-0">{accumulator ? accumulator : 0}</p>
                <p className="bg-white text-end p-3 m-0">total: {total ? total : 0}</p>
            </div>
        </>
    )
}

export default Display;