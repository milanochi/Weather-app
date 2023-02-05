import React from 'react'


const NavBar = ({ setId, handleClick, id, targetCity}) => {


  return (
    <div>
        <div className='navbar'>
            <form onSubmit={handleClick}> 
            <input type='text' className='search-box relative' value={id} placeholder='Enter City...' onChange={e => setId(e.target.value)}/>
            <button type='submit' className='p-2 text-sm text-white bg-black rounded-md absolute top-10 right-15'>Search</button>
            </form>
            <div className='flex flex-col space-y-6 pt-8 pb-8 cities'>
                {
                  targetCity.map(cities  => (
                  <ul key={cities.id} className='text-white  pl-4 text-sm'>{cities.city}</ul>
                  ))
                }
                </div>

            <div className='flex flex-col space-y-6 pt-8 pb-8 cities'>
                <div className='text-white pl-4 text-sm'>Manchester</div>
                <div className='text-white pl-4 text-sm'>New York</div>
                <div className='text-white pl-4 text-sm'>Birmingham</div>
                <div className='text-white pl-4 text-sm'>Nigeria</div>
            </div>

            <div className='flex flex-col space-y-6 pt-8 pb-8 cities'>
                <div className='text-white pl-4 text-sm'>Manchester</div>
                <div className='text-white pl-4 text-sm'>New York</div>
                <div className='text-white pl-4 text-sm'>Birmingham</div>
                <div className='text-white pl-4 text-sm'>Nigeria</div>
            </div>
            
        </div>
    </div>
  )
}
export default NavBar;