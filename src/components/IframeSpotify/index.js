import React, { useState } from 'react';
import Iframe from './styledIframe'
import Button from '../BtnNav/styledBtns';

const IframeSpotify = () => {

  const [linkFromSp, setlinkFromSp] = useState('https://open.spotify.com/playlist/4oNxXK5uDvjetJl6k3yOEP?si=ab679831c01b4716');
  const [songPlay, setSogPlay] = useState('https://open.spotify.com/embed/playlist/4oNxXK5uDvjetJl6k3yOEP?si=548d497eb6104874')

  const formatlink = () => {
    let getLink = linkFromSp.split('.com')
    getLink.splice(1,0, ...['.com/embed']);
    setSogPlay(getLink.join(''))
  }
  

  return(
    <Iframe>
      <div>
        <input id="linkSpotify" type='text' onChange={(value) => setlinkFromSp(value.target.value)}/>
        <Button onClick={formatlink}>Escuchar</Button>
      </div>
      <iframe src={songPlay} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="unique" ></iframe>
    </Iframe>
  )
}

export default IframeSpotify