import './Header.css';

function Header({setRandom}) {

    return (
        <div className="app-body">
            <div className="header">
                <div className="buttons">
                    <button type="button" className="btn-random-kitties" onClick={() => setRandom(true)}>Get Random Kitty</button>
                    <button type="button" className="btn-favorite-kitties" onClick={() => setRandom(false)}>My Favorite Kitties</button>
                </div>
            </div>
        </div>
    );
}

export default Header;