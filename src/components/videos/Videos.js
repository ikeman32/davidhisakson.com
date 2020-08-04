import React from 'react';

const Videos = () => {
  /*Put all of your hooks, functions, etc here */

  return (
    <div>
      <h3>Walk Throughs</h3>
      <iframe title='WalkThroughsPlayList' width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?list=PLg5BoFlx-HIakoUeSJ4x6QWA4YWU8gZcw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <br></br>
      <h3>Vlog</h3>
      <iframe title='VlogPlayList' width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?list=PLg5BoFlx-HIbC1TNqMrQpCxYQGBSWhhj5" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  );
};

export default Videos;