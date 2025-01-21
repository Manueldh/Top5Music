

const SongCard = (props) => {
    const body = document.querySelector("body")
    
    const removeClass = document.querySelectorAll(".Active")

    const songCardClick = (event) => {
        const songCards = document.querySelectorAll(".SongCard")
        const minutenGeluisterd = document.querySelector(".minutenGeluisterd")
        songCards.forEach(card => {
            card.classList.remove("Active")
        })
        event.currentTarget.classList.add("Active")
        document.body.style.backgroundImage = `url(${props.bgimage})`

        minutenGeluisterd.innerHTML = `Minuten naar geluisterd in 2024: <b>${props.minuten}</b>`
    }

    return(
        <li className={`SongCard ${props.isActive ? 'Active' : ''}`} onClick={songCardClick}>
            <h3>{props.ranking}</h3>
            <img src={props.cover} alt="" />
            <h4>{props.songTitle}</h4>
            <p>{props.artist}</p>
        </li>
    )
}

export default SongCard