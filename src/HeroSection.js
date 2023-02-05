import React, { useState, useEffect }  from 'react';
import NavBar from './NavBar';

const HeroSection = () => {
  // const [cityInput, setCityInput] = useState(['Italy'])
  const [capital, setCapital] = useState(false)
  const [id, setId] = useState('')
  const [idFromButtonClick, setIdFromButtonClick] = useState('')
  // const [cityFetch, setCityFetch] = useState('')
  const [targetCity, setTargetCity] = useState([{
    id: 1,
    city: 'Manchester'
},
{
    id: 2,
    city: 'New York'
},
{
    id: 3,
    city: 'Italy'
},
{
    id: 4,
    city: 'London'
}
])

  const handleClick = (e) =>{
    e.preventDefault();
    console.log("Button Active")
    setIdFromButtonClick(id)
  }
  // const handleTarget = (e) =>{
  //   console.log("Target Active")
  //   setCityFetch(targetCity)
  // }

  const fetchData = async () => {
      try{
          const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=5993123942ec4d87b45144923221706&&q=${idFromButtonClick}`);
          const json = await response.json()
          setCapital(json)
      }
      catch(err){
        console.log(err)
      }
  }
  useEffect(() => {
      fetchData();
  },[idFromButtonClick])

 console.log(capital)
  return (
    <div>
        <section className='hero relative'>
            <div className='container mx-auto flex flex-col space-y-20 md:space-y-96 px-6 md:px-0'>
                  <span className='text-sm pt-10 font-bold text-white'>the.weather</span>
                          <div className='flex space-x-8 items-center content'>
                      <h1 className='text-white text-6xl md:text-8xl'>{capital.current?.temp_c}&#176;</h1>
                   <div className='flex flex-col space-y-2'>
                        <h2 className='text-white text-5xl font-sm'>{capital.location?.name}</h2>
                        <p className='text-white text-sm md:text-md'>{capital.location?.localtime}</p>
                      </div>
                        <div className='flex flex-col space-x-2'>
                          {/* <img src={} alt="icon" /> */}
                          <div className='text-white text-center text-5xl'>&#176;</div>
                          <span className='text-white'>{capital.current?.condition.text}</span>
                        </div>
                    </div>
              </div>
              <NavBar setId={setId} handleClick={handleClick} targetCity={targetCity} id={id} />
        </section>
    </div>
  )
}
export default HeroSection;