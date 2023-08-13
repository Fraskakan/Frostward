import '../css/Games.css'
import '../css/General.css'
import React, { useState } from 'react'
import background from '../images/Cover_tall.png'
import downArrow from '../images/arrow-down-circle.svg'
import downUp from '../images/arrow-up-circle.svg'
import JYZVNO from '../images/JYZVNO.gif'
import w1jtE3 from '../images/w1jtE3.gif'
import devoroth from '../images/devoroth.png'
import god from '../images/HeroBannerLogo.png'

function Games (props) {
  const [showMore, setShowMore] = useState(false)

  function gameFullscreen () {
    setShowMore(!showMore)
    window.location.href = '#devoroth'
  } 

  return (
    <div id='games' className='gameBar' >
      <h1>Games</h1>
      <div 
        id='god' 
        className='god' 
        style={{
          backgroundImage: "url(" + god + ")", 
          backgroundSize: '1920px 620px', 
          backgroundRepeat: 'no-repeat'
        }} 
      ></div>
      <div id='devoroth' className='devoroth' style={{backgroundImage: "url(" + background + ")", backgroundSize: '100% 3000px'}} >
        <div className='container' >
          <div className='fixed'>
            <iframe width={props.width/2} height={(props.width/2)*9/16} src="https://www.youtube.com/embed/xgFluDeCkRg" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className='flex-item'>
            <img src={devoroth} alt="devoroth" style={{maxWidth: props.width/2*0.8}} />
            <h3>Devoroth is an Open World Single-Player Fantasy Role-playing game.</h3>
            <h3>available on</h3>        
            <a href="https://frostward.itch.io/devoroth">Itch.io</a>
            <a href="https://gamejolt.com/games/DevorothDemo/435319">Gamejolt</a>
            <p>Set in the high fantasy world of Devoroth. The player sets out on a epic adventure to explore the world and fight of a yet unknown threat.</p>
          </div>
        </div>
        {showMore && 
          <div className={'more' + showMore ? ' active' : ''}>
            <h2>Synopsis</h2>
            <p>Following the War of the four armies, the Shurian people abandoned their homeland Soulmare. 
              With the largest fleet in all of Devoroth, they set sail east towards unknown lands. 
              No one has heard from them in 8 years. 
              Now strange things have started happening in Devoroth, originating in Soulmare.
              You wake up on an island unknown how you got there or who you are.</p>
              <div className='container' >
                <div className='fixed-gif'>
                  <img src={JYZVNO} alt="JYZVNO" style={{maxWidth: props.width*0.9}} />
                </div>
                <div className='flex-item-gif'>
                  <img src={w1jtE3} alt="w1jtE3" style={{maxWidth: props.width*0.9}} />
                </div>
              </div>
              <h2>Features</h2>
              <div className='container' >
                <div className='fixed'>
                  <h3>Epic story</h3>
                  <p>Learn of an emerging enemy threatening Devoroth where story and lore is delivered through old-school text dialogue.</p>
                  <h3>Exploration</h3>
                  <p>Discover the open world of Devoroth with all its secrets and lore. Equipment, weapon, and experience can also be obtained by exploration.</p>
                  <h3>Tab-targeting Combat</h3>
                  <p>Fight your foes using a tab-targeting combat system inspired by the most popular old-school RPG’s.</p>
                </div>
                <div className='flex-item'>
                  <h3>Role-playing game</h3>
                  <p>Customize your character through equipment, spells, and classes.</p>
                  <h3>Stats</h3>
                  <p>Optimize your characters 14 stats such as critical-strike chance, magic resistance, and health regeneration by modifying your 5 main attributes Strength, Agility, Intelligence, Constitution, and Willpower.</p>
                  <h3>Crafting</h3>
                  <p>Explore the world of Devoroth and find crafting material to craft new equipment to earn experience to be able to take on harder challenges.</p>
                </div>
              </div>
          </div>
        }
        <img className='button' src={showMore ? downUp : downArrow} alt="downArrow" onClick={() => gameFullscreen() } />
      </div>
    </div>
  )
}

export default Games