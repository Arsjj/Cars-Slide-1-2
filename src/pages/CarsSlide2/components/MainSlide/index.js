function Mainslide({ cars, current }) {
    return (

        <div className='main-slide' style={{ transform: `translateY(${-current * 100}vh)` }}>
            {cars.map((item) => {
                return (
                    <div style={{ backgroundImage: `url(${item.url})` }} key={item.id}></div>
                )
            })}
        </div>
    )
}

export default Mainslide