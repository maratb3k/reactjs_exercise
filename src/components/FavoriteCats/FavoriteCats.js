import Buttons from '../buttons/Buttons';
import RandomKitty from '../randomKitty/RandomKitty';

function FavoriteCats(props) {
    const {clickToRandomButton, setClickToRandomButton, clickToFavoriteButton, setClickToFavoriteButton, getAboutCatData} = props;

    return (
        <div>
            <Buttons 
                setClickToRandomButton={setClickToRandomButton} clickToRandomButton={clickToRandomButton} 
                setClickToFavoriteButton={setClickToFavoriteButton}
            /> 
            <RandomKitty 
              clickToRandomButton={clickToRandomButton} setClickToRandomButton={setClickToRandomButton} 
              getAboutCatData={getAboutCatData} clickToFavoriteButton={clickToFavoriteButton}
              setClickToFavoriteButton={setClickToFavoriteButton}
            /> 
        </div>
    );
}

export default FavoriteCats;