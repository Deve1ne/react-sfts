//import React from "react";
import React, {useEffect, useState} from 'react';


function Music() {

    const [videoInfo, setVideoInfo] = useState([]);
    const [musicInfo, setMusicInfo] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/videos")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setVideoInfo(result);
                },
                (error) => {
                    setVideoInfo([]);


                }
            )

        fetch("http://localhost:8080/albums")
            .then(res => res.json())
            .then(
                (result) => {
                    setMusicInfo(result);
                },
                (error) => {
                    setMusicInfo([]);


                }
            )


    }, [])


    const musicShow = [];


    const videoShow = [];








    for (let mus of musicInfo) {
        var src = "https://bandcamp.com/EmbeddedPlayer/album=" + mus.Stream + "/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/";
        musicShow.push(
            <div className=" my-5 col-lg-6">
                <div className="mx-2 bg-light p-2 ">
                    <h2 className="font-weight-light">{mus.Titre} - {mus.Date} </h2>
                    <hr/>

                    <div>
                        <iframe title='hop' className='bandcamp-player' src={src} seamless><a
                            href="https://stonefromthesky.bandcamp.com/album/live-in-la-grange">Live in La Grange by
                            Stone From The Sky</a></iframe>

                    </div>

                </div>

            </div>
        )
    }


    for (let video of videoInfo) {
        var vidSrc = "https://www.youtube.com/embed/" + video.Embed
        videoShow.push(
            <div className="my-5 rounded col-lg-6">
                <div className="mx-2 bg-light p-2">
                    <h2 className="font-weight-light"> {video.Titre}</h2>
                    <hr/>

                    <div className="youtube-video-container">

                        <iframe src={vidSrc}
                                title="YouTube video player" width="100%" height="480px" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>

                        </iframe>

                    </div>

                </div>

            </div>
        )
    }


    return (
        <div className="Music">
            <div className="container">
                <div className="row my-5 mx-auto">
                    <h1 className="text-light">VIDEOS</h1>
                    <hr className="text-light"/>
                    {videoShow}
                </div>

                <div className="row my-5">
                    <h1 className="text-light">MUSIC</h1>
                    <hr className="text-light"/>

                    {musicShow}
                </div>
            </div>
        </div>
    );
}

export default Music;