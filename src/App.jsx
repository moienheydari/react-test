import React from 'react';
import './css/App.css';
import Dothoverbutt from './assets/Dot-Hover-Button/Dothoverbutt.jsx';
import Navigation from './assets/Slide-out-Navigation/Navigation.jsx';
import Social from './assets/Social-Button/Social.jsx';
import background from './assets/background.svg';
import MyForm from './assets/Formik-Form/Form.jsx';
import LoadingSpinner from './assets/Loading-Spinner/LoadingSpinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCoffee, faCheckSquare, faAddressBook, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import TailwindTest from './assets/Tailwind-Test/TailwindTest';
import StyledComponent from './assets/Styled-Component/StyledComponent';



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

        <div className='grid-element' >
          <div className='rotate'>
            <div className='front'></div>
            <div className='back'></div>
          </div>
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

        <div className='grid-element loader'>
          <LoadingSpinner />
        </div>

        <div className='grid-element icons'>
          <FontAwesomeIcon icon={faPlay} />
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faAddressBook} />
          <FontAwesomeIcon icon={faCheckSquare} />
          <FontAwesomeIcon icon={faCoffee} />
        </div>
    
        <div className='grid-element tailwind'>
          <TailwindTest />
        </div>

        <div className='grid-element styledComp'>
          <StyledComponent />
        </div>
      </div>
    </div>
  )
}
