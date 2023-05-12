import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  const [text, setText] = useState()

  const removeClassListColor = () => {
    document.body.classList.remove('bg-black')
    document.body.classList.remove('text-white')
    document.body.classList.remove('bg-white')
    document.body.classList.remove('text-black')


  }
  const bodyModeDark = (cls) => {
    removeClassListColor();
    document.body.classList.add(`bg-${cls}`)
    document.body.classList.add(`text-white`)
  }
  const bodyModeWhite = (cls) => {
    removeClassListColor();
    document.body.classList.add(`bg-${cls}`)
    document.body.classList.add(`text-black`)
  }

  return (
    <>
      <header class="body-font" data-aos = 'zoom-in-down' >
        <div class="container mx-auto flex p-5 md:flex-row flex-col items-center">
          <a class="flex title-font font-medium items-center  mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
            <h1 className='text-2xl' >CountDown</h1>
          </a>
          <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <h1 className="text-5xl text-center md:ml-32 ">WORD COUNTER</h1>
          </div>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link class="mr-5 hover:text-gray-400" to="/">Home</Link>
            <Link class="mr-5 hover:text-gray-400" to="/about">About</Link>
          </nav>
          <svg style={{ cursor: 'pointer' }} onClick={() => { bodyModeDark('black') }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clip-rule="evenodd" />
          </svg>
          <svg style={{ cursor: 'pointer' }} onClick={() => { bodyModeWhite('white') }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mx-2">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>

        </div>
      </header>

    </>
  )
}
//  this is an object tells you which type of prop
// when you write String datatype and futher  .isRequired yo write ... It means The props is to pass necessary
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutTitle: PropTypes.string.isRequired
}

// this is default syntex, it works when you don't pass the props .... Then default props works 
Navbar.defaultProps = {
  title: 'TextUtils',
  aboutTitle: 'About Us'
};


    //For Switch
  //   <div class="form-check form-switch">
  //   <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
  //   <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
  // </div>