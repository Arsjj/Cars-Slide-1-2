import React from 'react'

function SideBar({ sidebar, current }) {
    return (
        <div className='sidebar' style={{ transform: `translateY(${-(sidebar.length - 1) * 100 + current * 100}vh)` }}>
            {sidebar.map((item) => {
                return (
                    <div style={{ background: `${item.styl}` }} key={item.id}>
                        <h1>{item.name}</h1>
                    </div>
                )
            })}
        </div>

    )
}

export default SideBar