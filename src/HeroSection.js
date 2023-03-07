import React, { useState, useEffect }  from 'react';
import NavBar from './NavBar';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

const timeCode = [ 1063, 1069, 1072, 1150, 1153, 1180, 1183, 1186, 1189, 1192,  119, 1204, 1207, 1240, 1243, 1246, 1249, 1252]
const timeCode2 = [1279, 1003, 1006, 1009, 1030, 1069, 1087, 1135, 1273, 1276 ]
const HeroSection = () => {

  const [capital, setCapital] = useState(false)
  const [id, setId] = useState('')
  const [idFromButtonClick, setIdFromButtonClick] = useState('Nigeria')
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
},
{
  id: 5,
  city: 'Washington'
}
])

//BUTTON CLICK
  const handleClick = (e) =>{
    e.preventDefault();
if(id === null || id === ''){
  alert('Please enter a city')
}
   else{
      setIdFromButtonClick(id)
      setId('')
    }
     
  }
//CLICKED CITIES
  const handleTarget = (id) =>{
    console.log(id)
    setIdFromButtonClick(id)
  }
//UPDATE BACKGROUND IMAGE
  const updateImage = () => {
    if (timeCode.includes(code)){
      return  'rainy'
    }
    else if (timeCode2.includes(code)) {
      return  'partlycloudy'
    }

    else {
      return   'hero'
    }

  }

  const fetchData = async () => {
  
      try{
          const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=5993123942ec4d87b45144923221706&&q=${idFromButtonClick}`);
          if (response.ok) {
            const json = await response.json()
            setCapital(json)
            return
          }
         const err =  await response.json() 
         alert(err.error.message)
      }
      catch(err){
        console.log(err)
      }
  }
  useEffect(() => {

      fetchData();
  },[idFromButtonClick])

console.log(capital)
//FETCHING WEATHER CONDITION
const code = capital.current?.condition.code
//WEATHER ICON
const iconImg = {
          src: capital.current?.condition.icon.substr('//cdn.weatherapi.com/weather/64x64/day/113.png'),
          alt: 'icon'
}

  return (
    <div>
        <section className={`hero relative ${updateImage()}`}>
            <div className='container mx-auto flex flex-col space-y-19 md:space-y-96 px-6 md:px-0'>
                  <span className='text-sm pt-10 font-bold text-white'>the.weather</span>

                          <div className='flex justify-between items-center py-8 md:py-0 md:max-w-xl content'>
                      <h1 className='text-white text-6xl md:text-7xl md:w-1/3'>{capital.current?.temp_c}&#176;</h1>
                   <div className='flex flex-col items-center py-2 px-0 md:px-0 md:py-0 text-center space-y-2 md:w-1/3'>
                        <h2 className='text-white text-3xl md:text-5xl font-light'>{capital.location?.name }</h2>
                        <p className='text-white text-xs md:text-md'>{capital.location?.localtime}</p>
                      </div>
                        <div className='flex flex-col items-center text-center md:text-end md:justify-center md:w-1/3'>
                          <img src={iconImg.src} className="h-10 md:h-16" alt={iconImg.alt} />
                          <div className='text-white text-sm md:text-md'>{capital.current?.condition.text}</div>
                        </div>
                    </div>
              </div>
              <NavBar setId={setId} handleClick={handleClick} targetCity={targetCity} handleTarget={handleTarget} details={capital} id={id} />
        </section>
    </div>
  )
}
export default HeroSection;