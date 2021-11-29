
function Kitty({item}) {

    return (
        <div className="item">
            <h5>{item.id}</h5>
            <img src={item.url} />
        </div>
    );

};