// import logo from './logo.svg';
import HeroSection from './HeroSection';
import './App.css';
import { SkeletonTheme } from 'react-loading-skeleton';



const App = ({ name }) => {


  return (
    <div >
      <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
      <HeroSection />
      </SkeletonTheme>
      
      
    </div>
  );
}
export default App;
