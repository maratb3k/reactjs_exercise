import './MyFavoriteKitties.css';
import {useState, useEffect} from 'react';

function MyFavoriteKitties(props) {
    const {myKitties} = props;

    return (
        <div className="albumOfCats">
            {myKitties.map(item => (
                <img className="albumOfCats__img" key={item.id} src={item.url} />
            ))}
        </div>
    
    );
}

export default MyFavoriteKitties;