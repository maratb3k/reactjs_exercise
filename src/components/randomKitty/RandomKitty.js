import {useState, useEffect} from 'react';
import Buttons from '../buttons/Buttons';
import './RandomKitty.css';

function RandomKitty(props) {
    const {clickToRandomButton, setClickToRandomButton, getAboutCatData, clickToFavoriteButton, setClickToFavoriteButton} = props;
    const [url, setUrl] = useState('');
    const [id, setId] = useState('');
    
    useEffect(() => {
        const url = "https://api.thecatapi.com/v1/images/search/";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setUrl(json[0].url);
                setId(json[0].id);
                } catch (error) {
                console.log("error", error);
                }
        };
        if(clickToRandomButton) {
            fetchData();
        }

    }, [clickToRandomButton]);

    
    useEffect(() => {
        getAboutCatData(id, url);
        console.log(clickToFavoriteButton);
    }, [clickToFavoriteButton])


    return (
        <div>
            <div className="catImage">
                <img src={url} alt="cat-image" /> 
            </div>
        </div>
    );
}


export default RandomKitty;
