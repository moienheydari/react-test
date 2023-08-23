import React, { Suspense } from 'react';
import './css/App.min.css';
import Dothoverbutt from './assets/Dot-Hover-Button/Dothoverbutt.jsx';
import Navigation from './assets/Slide-out-Navigation/Navigation.jsx';
import Social from './assets/Social-Button/Social.jsx';
import background from './assets/background.svg';
import MyForm from './assets/Formik-Form/Form.jsx';
// import Delayed from './assets/Delayed-Component/Delayed.jsx';

const Delayed = import('./assets/Delayed-Component/Delayed.jsx');


export default function App() {
  // const Delayed = React.lazy(() => { import('./assets/Delayed-Component/Delayed.jsx') });
  // const Delayed = import('./assets/Delayed-Component/Delayed');

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
        <div className='grid-element' >
          <div className='cool-input'>
            <input type='text' className='input-field' id='inp' placeholder='Name'>
            </input>
            <label className='input-label' htmlFor='inp'>
              Name
            </label>
          </div>
        </div>
        <div className='grid-element form' >
          <MyForm />
        </div>
        <div className='grid-element delayed' >
          {/* <Suspense fallback={<h1>Loading....</h1>}> */}
            <Delayed />
          {/* </Suspense> */}
        </div>
      </div>
    </div>
  )
}
