

function Header() {
    let artist = false
    let songs = true
    
    function switchCategory() {
        const button = document.querySelector('.switchButton');
        const songsList = document.querySelector('.Songs');
        const artistList = document.querySelector('.Artists');
        const firstListItem = document.querySelector('ul li:first-of-type')

        if(songs) {
            console.log('veranderd naar artists')
            artistList.classList.add('Active-list')
            songsList.classList.remove('Active-list')
            songsList.style.display = 'none';
            artistList.style.display = 'grid';
            button.innerHTML = 'bekijk: Nummers';
            artist = true
            songs = false
        } else if(artist) {
            artistList.classList.remove('Active-list')
            songsList.classList.add('Active-list')
            console.log('veranderd naar songs')
            songsList.style.display = 'grid';
            artistList.style.display = 'none';
            button.innerHTML = 'bekijk: Artiesten';
            artist = false
            songs = true
        }

        
        // const songCards = document.querySelectorAll(".SongCard")
        // songCards.forEach(card => {
        //     card.classList.remove("Active")
        // })

        // firstListItem.classList.add('Active')
    }

    return(
    <>
        <header>
            <div className="container-flex">
                <h1>Mijn top 5</h1>
                <h2>2024</h2>
            </div>
            <button className="switchButton" onClick={switchCategory}>
                bekijk: Artiesten
            </button>
        </header>
    </>
    );
}

export default Header