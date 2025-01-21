

const ArtistCard = (props) => { 

    const body = document.querySelector("body")
    
    const removeClass = document.querySelectorAll(".Active")

    const artistCardClick = (event) => {
        const artistCards = document.querySelectorAll(".ArtistCard")
        const minutenGeluisterd = document.querySelector(".minutenGeluisterd")
        artistCards.forEach(card => {
            card.classList.remove("Active")
        })
        event.currentTarget.classList.add("Active")
        document.body.style.backgroundImage = `url(${props.bgimage})`

        minutenGeluisterd.innerHTML = `Minuten naar geluisterd in 2024: <b>${props.minuten}</b>`
    }
    
    return(
        <li className="ArtistCard" onClick={artistCardClick}>
            <h3>{props.ranking}</h3>
            <img src={props.cover} alt=""/>
            <h4>{props.artist}</h4>
            <p>{props.favoriteSong}</p>
        </li>
    )
}

export default ArtistCard