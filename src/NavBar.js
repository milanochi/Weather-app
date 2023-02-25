import React from 'react'

const NavBar = ({ setId, handleClick, handleTarget, id, targetCity, details}) => {


  return (
    <div>
        <div className='navbar'>
            <form onSubmit={handleClick}> 
            <input type='text' className='search-box relative text-white rounded-none' value={id} placeholder='Search location...' onChange={e => setId(e.target.value)}/>
            <button type='submit' className='p-2 text-sm text-white bg-black rounded-md absolute top-10 right-15'>Search</button>
            </form>
            <div className='flex flex-col space-y-6 pt-8 pb-8 cities'>
                {
                  targetCity.map(cities  => (
                  <ul key={cities.id} onClick={() => handleTarget(cities.city)} className='w-20 text-white pl-4 text-sm'>{cities.city}</ul>
                  ))
                }
                </div>

            <div className='flex flex-col space-y-6 pt-8 pb-8 cities font-light'>
            <div className='text-white pl-4 font-bold text-sm'>Weather Details</div>
                <div className='text-white pl-4 text-sm'>{`Humidity : ${details.current?.humidity}%`}</div>
                <div className='text-white pl-4 text-sm'>{`Wind kp/h : ${details.current?.wind_kph}%`}</div>
                <div className='text-white pl-4 text-sm'>{`Pressure : ${details.current?.pressure_in}%`}</div>
            </div>

            <div className='flex flex-col space-y-6 pt-8 pb-8 cities mb-0'>
                <div className='text-white pl-4 font-bold text-sm'>Area Details</div>
                <div className='text-white pl-4 text-sm'>{`Country - ${details.location?.country}`}</div>
                <div className='text-white pl-4 text-sm'>{`Region - ${details.location?.region}`}</div>
              <div className='text-white pl-4 pb-0 text-center text-sm pt-20'>DESIGNED BY OCHI DANIEL</div>
        </div>
            
        </div>
    </div>
  )
}
export default NavBar;