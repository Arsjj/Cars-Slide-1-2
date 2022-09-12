import React from 'react'

function Buttons({downHandler, upHandler}) {
    return (
        <div>
            <div className="container">
                <div className="controls">
                    <button className="down-button" onClick={() => downHandler()}>
                        <i className="fas fa-arrow-down"></i>
                    </button>
                    <button className="up-button" onClick={() => upHandler()}>
                        <i className="fas fa-arrow-up"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Buttons