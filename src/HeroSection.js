import React, { useState, useEffect }  from 'react';
import NavBar from './NavBar';


const HeroSection = () => {
  // const [cityInput, setCityInput] = useState(['Italy'])
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

//BUTTON CLick
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

  const fetchData = async () => {
  
      try{
          const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=5993123942ec4d87b45144923221706&&q=${idFromButtonClick}`);
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
const code = capital.current?.condition.code
//WEATHER ICON
const iconImg = {
          src: capital.current?.condition.icon.substr('//cdn.weatherapi.com/weather/64x64/day/113.png'),
          alt: 'icon'
}

  return (
    <div>
        <section className={`hero relative 
                      ${ code === 1003|| code == 1072 ||
                        code == 1069 ||
                        code == 1153 ||
                        code == 1180 ||
                        code == 1183 ||
                        code == 1186 ||
                        code == 1189 ||
                        code == 1192 ||
                        code ==  1195||
                        code == 1204 ||
                        code == 1207 ||
                        code == 1240 ||
                        code == 1243 ||
                        code == 1246 ||
                        code == 1249 ||
                        code == 1252 ? 'overcast' : 'hero' }`}>
            <div className='container mx-auto flex flex-col space-y-19 md:space-y-96 px-6 md:px-0'>
                  <span className='text-sm pt-10 font-bold text-white'>the.weather</span>

                          <div className='flex justify-between items-center py-8 md:py-0 md:max-w-xl content'>
                      <h1 className='text-white text-7xl md:text-8xl md:w-1/3'>{capital.current?.temp_c}&#176;</h1>
                   <div className='flex flex-col items-center py-2 px-0 md:px-0 md:py-0 text-center space-y-2 md:w-1/3'>
                        <h2 className='text-white text-3xl md:text-5xl font-light'>{capital.location?.name}</h2>
                        <p className='text-white text-xs md:text-md'>{capital.location?.localtime}</p>
                      </div>
                        <div className='flex flex-col items-center text-center md:text-end md:justify-center md:w-1/3'>
                          <img src={iconImg.src} class="h-10 md:h-16" alt={iconImg.alt} />
                          {/* <div className='text-white text-5xl'></div> */}
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