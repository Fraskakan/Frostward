import './css/App.css'
import { useState, useEffect } from 'react'
import Header from './content/Header'
import Games from './content/Games'
import News from './content/News'
import Info from './content/Info'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function App() {

  const windowDimensions = useWindowDimensions()

  return (
    <div className="App" id='app'>
      <Header width={windowDimensions.width} />
      <Games width={windowDimensions.width} />
      <Info width={windowDimensions.width} />
      <News />
      <div style={{backgroundColor: '#232E58'}} >
        <p style={{float: 'center', paddingTop: '20px'}} >Copyright © Frostward - All Rights Reserved.</p>
        <a style={{float: 'center', paddingBottom: '10px'}} href="https://www.linkedin.com/in/jesper-fasth-8a8629207/">Website by Jesper Fasth</a>
      </div>
    </div>
  );
}

export default App;
