import React, { useState } from 'react';
import Iframe from './styledIframe'
import ItemNav from '../Nav/styledItemNav.js'
import Button from '../BtnNav/styledBtns';

// Css
import "./index.css";


// Icons
import MusicNoteIcon from '@material-ui/icons/MusicNote';

const IframeSpotify = () => {

  const [linkFromSp, setlinkFromSp] = useState('https://open.spotify.com/playlist/4oNxXK5uDvjetJl6k3yOEP?si=ab679831c01b4716');
  const [songPlay, setSogPlay] = useState('https://open.spotify.com/embed/playlist/4oNxXK5uDvjetJl6k3yOEP?si=548d497eb6104874')

  const [showContent, setShowContent] = useState(true);

  const formatlink = () => {
    const getLink = linkFromSp.split('.com')
    getLink.splice(1,0, ...['.com/embed']);
    setSogPlay(getLink.join(''))
  }
  
  return(
    <div className="itemMenu">
      <ItemNav onClick={ () => showContent ? setShowContent(false) : setShowContent(true) }>
        <MusicNoteIcon style={{ color: '#333333' }}/>
      </ItemNav>
      <Iframe showContent={showContent}>
        <div className="content-iframe">
          <h2>¿Que quieres escuchar?</h2>
          <p>Desde Spotify copia el link de tu playlist o artista favorito y disfruta!</p>
          <input id="linkSpotify" type='text' autoComplete="off" onChange={(value) => setlinkFromSp(value.target.value)}/>
          <Button onClick={formatlink}>Escuchar</Button>
        </div>
        <iframe
          src={songPlay}
          width="100%"
          height="310"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          title="unique"
          >
        </iframe>
    </Iframe>
    </div>
  )
}

export default IframeSpotify