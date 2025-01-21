import SongCard from './components/SongCard'
import ArtistCard from './components/ArtistCard'
import './components/Cards.css'

import ledZeppelin2 from './assets/ledZeppelin2.jpeg'
import psychocity from './assets/psychocity.jpeg'
import ledzeppelin4 from './assets/ledzeppelin4.jpeg'
import highwaytohell from './assets/highwaytohell.jpeg'

import ledzeppelinbg from './assets/ledzeppelin-bg.jpg'
import direstraitsbg from './assets/direstraits-bg.jpg'
import greatwhitebg from './assets/greatwhite-bg.webp'
import acdcbg from './assets/acdc-bg.webp'
import vanhalenbg from './assets/vanhalen-bg.webp'

function List() {
    return(
        <div className='main-content'>
            <ul className='Songs'>
                <SongCard 
                    ranking="1"
                    cover={highwaytohell}
                    songTitle="Night Prowler"
                    artist="AC/DC   "
                    bgimage={acdcbg}
                    minuten="1712"
                    isActive={true}
                />
                <SongCard 
                    ranking="2"
                    cover={highwaytohell}
                    songTitle="Walk All Over You"
                    artist="AC/DC"
                    bgimage={acdcbg}
                    minuten="867"
                />
                <SongCard 
                    ranking="3"
                    cover={psychocity}
                    songTitle="Big Goodbye"
                    artist="Great White"
                    bgimage={greatwhitebg}
                    minuten="796"
                />                
                <SongCard 
                    ranking="4"
                    cover={ledzeppelin4}
                    songTitle="Stairway To Heaven"
                    artist="Led Zeppelin"
                    bgimage={ledzeppelinbg}
                    minuten="782"
                />   
                <SongCard 
                    ranking="5"
                    cover={ledZeppelin2}
                    songTitle="Whole Lotta Love"
                    artist="Led Zeppelin"
                    bgimage={ledzeppelinbg}
                    minuten="546"
                />   
            </ul>
            <ul className='Artists'>
                <ArtistCard
                    ranking="1"
                    cover={acdcbg}
                    artist="AC/DC"
                    bgimage={acdcbg}
                    minuten="32.691"
                    isActive={true}
                />
                 <ArtistCard
                    ranking="2"
                    cover={greatwhitebg}
                    artist="Great White"
                    bgimage={greatwhitebg}
                    minuten="7521"
                />
                 <ArtistCard
                    ranking="3"
                    cover={ledzeppelinbg}
                    artist="Led Zeppelin"
                    bgimage={ledzeppelinbg}
                    minuten="4403"
                />
                 <ArtistCard
                    ranking="4"
                    cover={direstraitsbg}
                    artist="Dire Straits"
                    bgimage={direstraitsbg}
                    minuten="4137"
                />
                 <ArtistCard
                    ranking="5"
                    cover={vanhalenbg}
                    artist="Van Halen"
                    bgimage={vanhalenbg}
                    minuten="2180"
                />
            </ul>
            <p className='minutenGeluisterd'></p>
        </div>
    );
}

export default List