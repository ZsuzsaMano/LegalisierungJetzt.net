import React from 'react';

const Main = () => {
  return (
    <main className="video">

        <h2 className="video__title title">Presskonferenz 12.10.2020, 11h Aquarium Berlin</h2>

        <iframe
            src="https://player.twitch.tv/?channel=legalisierungjetzt&parent=legalisierungjetzt.net&autoplay=true"
            frameborder="2"
            scrolling="no"
            allowfullscreen="true">
        </iframe>


    </main>
  );
};

export default Main;
