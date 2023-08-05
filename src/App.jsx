import Dothoverbutt from './assets/Dot-Hover-Button/Dothoverbutt.jsx';
import Navigation from './assets/Slide-out-Navigation/Navigation.jsx';
import Social from './assets/Social-Button/Social.jsx';
import './css/App.min.css';
import background from './assets/background.svg';

export default function App() {


  return (
    <div className='App' style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <div className='things'>
        <div className='grid-element navigation'>
          <Navigation />
        </div>
        <div className='grid-element social' >
          <Social />
        </div>
        <div className='grid-element dothover' >
          <Dothoverbutt />
        </div>
        <div className='grid-element rotate' >
          <div className='front'></div>
          <div className='back'></div>
        </div>
        <div className='grid-element button-boxshadow' >
          <button className='button1'>Click!</button>
          <button className='button2'>Click!</button>
          <button className='button3'>Click!</button>
        </div>
        <div className='grid-element cool-input' >
          <input type='text' className='input-field' id='inp' placeholder='Name'>
          </input>
          <label className='input-label' htmlFor='inp'>
            Name
          </label>
        </div>
      </div>
    </div>
  )
}
