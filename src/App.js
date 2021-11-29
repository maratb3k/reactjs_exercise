import './App.css';
import Header from './components/Header/Header';
import Buttons from './components/buttons/Buttons';
import RandomKitty from './components/randomKitty/RandomKitty';
import MyFavoriteKitties from './components/myFavoriteKitties/MyFavoriteKitties';
import FavoriteCats from './components/FavoriteCats/FavoriteCats';
import { useState, useEffect } from 'react';

function App() {
  const [random, setRandom] = useState(false);
  const [clickToRandomButton, setClickToRandomButton] = useState(false);
  const [clickToFavoriteButton, setClickToFavoriteButton] = useState(false);
  const [myKitties, setMyKitties] = useState([]);

  useEffect(() => {
    const cats = localStorage.getItem('fav');
    if(cats) {
      const catsFormatted = JSON.parse(cats)['cats']
      setMyKitties(catsFormatted)
    }
    else {
      
    }
  },[clickToFavoriteButton])

  const getAboutCatData = (id, url) => {
    if(clickToFavoriteButton) {
      console.log(id, url)
      const found = myKitties.findIndex(cat => cat.id == id)
      console.log(found)
      console.log(myKitties)
      if( found != 0) {
        
        // setMyKitties(myKitties => [...myKitties, {
        //   id, 
        //   url
        // }]);
        const cats = localStorage.getItem('fav');
        if(cats) {
          console.log(cats)
          const catsFormatted = JSON.parse(cats)['cats']
          console.log(catsFormatted)
          const newArray = [
            ...catsFormatted, {id, url}
          ];
          const neww = {
            cats: newArray
          };
          console.log(catsFormatted)
          localStorage.setItem('fav', JSON.stringify(neww))
          // setMyKitties(catsFormatted)
        }
        else {
          const neww = {
            cats: [{id, url}]
          }
          localStorage.setItem('fav', JSON.stringify(neww))
        }
      }
      setClickToFavoriteButton(false)
    }
    
  }

  return (
    <div className="App">
      <Header setRandom={setRandom} />
      {random ? 
          <FavoriteCats
            clickToRandomButton={clickToRandomButton} setClickToRandomButton={setClickToRandomButton} 
            getAboutCatData={getAboutCatData} clickToFavoriteButton={clickToFavoriteButton}
            setClickToFavoriteButton={setClickToFavoriteButton}
          /> 
          :
          <MyFavoriteKitties 
                  clickToFavoriteButton={clickToFavoriteButton} setClickToFavoriteButton={setClickToFavoriteButton}
                  myKitties={myKitties} />
        }  
      
    </div>
  );
}

export default App;
