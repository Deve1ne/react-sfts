import React, { useEffect, useState } from 'react';

function Music() {
    const [videoInfo, setVideoInfo] = useState([]);
    const [musicInfo, setMusicInfo] = useState([]);

    useEffect(() => {
        fetchData('/Videos.json', setVideoInfo);
        fetchData('/Music.json', setMusicInfo);
    }, []);

    const fetchData = async (url, setState) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setState(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const renderMusic = () => {
        return musicInfo.map(mus => (
            <div key={mus.id} className="my-5 col-lg-6">
                <div className="mx-2 bg-light p-2">
                    <h2 className="font-weight-light">{mus.titre} - {mus.date}</h2>
                    <hr />
                    <div>
                        <iframe
                            title='hop'
                            className='bandcamp-player'
                            src={`https://bandcamp.com/EmbeddedPlayer/album=${mus.stream}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/`}
                            seamless
                        >
                            <a href={`https://stonefromthesky.bandcamp.com/album/${mus.stream}`}>{mus.titre} by Stone From The Sky</a>
                        </iframe>
                    </div>
                </div>
            </div>
        ));
    };

    const renderVideos = () => {
        return videoInfo.map(video => (
            <div key={video.id} className="my-5 rounded col-lg-6">
                <div className="mx-2 bg-light p-2">
                    <h2 className="font-weight-light">{video.titre}</h2>
                    <hr />
                    <div className="youtube-video-container">
                        <iframe
                            src={`https://www.youtube.com/embed/${video.embed}`}
                            title="YouTube video player"
                            width="100%"
                            height="480px"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="Music">
            <div className="container">
                <div className="row my-5 mx-auto">
                    <h1 className="text-light">VIDEOS</h1>
                    <hr className="text-light" />
                    {renderVideos()}
                </div>
                <div className="row my-5">
                    <h1 className="text-light">MUSIC</h1>
                    <hr className="text-light" />
                    {renderMusic()}
                </div>
            </div>
        </div>
    );
}

export default Music;
