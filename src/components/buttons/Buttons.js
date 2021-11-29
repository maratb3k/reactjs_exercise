import './Buttons.css';

function Buttons(props) {
    return (
        <div className="btn-click">
            <button type="button" className="btn-random" onClick={() => props.setClickToRandomButton(!props.clickToRandomButton)}>Fetch New Kitty</button>
            <button type="button" className="btn-favorite" onClick={() => props.setClickToFavoriteButton(true)}>Add to Favorites</button>
        </div>
    );
}

export default Buttons;

