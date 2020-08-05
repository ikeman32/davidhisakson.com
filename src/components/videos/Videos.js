import React from 'react';
import { layoutGenerator } from "react-break";
import './Videos.scss';

const Videos = () => {
  //configure responsiveness
  const layout = layoutGenerator({
    mobile: 0,
    phablet: 550,
    tablet: 768,
    desktop: 992,
  });

  const OnMobile = layout.is("mobile");
  const OnAtLeastTablet = layout.isAtLeast("tablet");
  const OnAtMostPhablet = layout.isAtMost("phablet");
  const OnDesktop = layout.is("desktop");

  return (
    <>
      <OnAtLeastTablet></OnAtLeastTablet>
      <OnAtMostPhablet></OnAtMostPhablet>
      <OnMobile>
        <div className='Mvideo-container'>
          <div>
            <h3>Walk Throughs</h3>
            <iframe title='WalkThroughsPlayList' src="https://www.youtube-nocookie.com/embed/videoseries?list=PLg5BoFlx-HIakoUeSJ4x6QWA4YWU8gZcw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>

          <div>
            <h3 >Vlog</h3>
            <iframe title='VlogPlayList' src="https://www.youtube-nocookie.com/embed/videoseries?list=PLg5BoFlx-HIbC1TNqMrQpCxYQGBSWhhj5" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>

        </div>
      </OnMobile>
      <OnDesktop>
        <div className='video-container'>
          <div>
            <h3>Walk Throughs</h3>
            <iframe title='WalkThroughsPlayList' src="https://www.youtube-nocookie.com/embed/videoseries?list=PLg5BoFlx-HIakoUeSJ4x6QWA4YWU8gZcw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>

          <div>
            <h3 >Vlog</h3>
            <iframe title='VlogPlayList' src="https://www.youtube-nocookie.com/embed/videoseries?list=PLg5BoFlx-HIbC1TNqMrQpCxYQGBSWhhj5" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>

        </div>
      </OnDesktop>
    </>

  );
};

export default Videos;