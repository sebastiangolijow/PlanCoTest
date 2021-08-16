import { useState } from 'react';
import {Link,  useHistory} from 'react-router-dom';




export function Landing() {

    return (
      <div>
        <Link to="/characters">
        <img src="https://pbs.twimg.com/profile_images/1743284059/yoda3_400x400.jpg" alt="starwarsgif"/>
        </Link>
        <Link to="/myVessels">
        <img src="https://media4.giphy.com/media/SiEz6hxdcJuOf2n3TE/giphy.gif" alt="starwarsgif"/>
        </Link>
      </div>
  )
}