import useToken from "../functions/UseToken";
import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'


function Admin() {


    const tourShow = [];
    const musicShow = [];
    const videoShow = [];
    const bioShow = [];

    const {token, setToken} = useToken();
    const [bio, setBio] = useState([]);
    const [tours, setTours] = useState([]);
    const [videoInfo, setVideoInfo] = useState([]);
    const [musicInfo, setMusicInfo] = useState([]);

    const [bioActive, setBioActive] = useState(0);
    const [tourActive, setTourActive] = useState(0);
    const [musicActive, setMusicActive] = useState(0);
    const [videoActive, setVideoActive] = useState(0);

    //données de formulaire video
    const [videoTitreCredential, setVideoTitreCredential] = useState();
    const [videoEmbedCredential, setVideoEmbedCredential] = useState();

    //données de formulaire musique
    const [musicTitreCredential, setMusicTitreCredential] = useState();
    const [musicDateCredential, setMusicDateCredential] = useState();
    const [musicDescriptionCredential, setMusicDescriptionCredential] = useState();
    const [musicStreamCredential, setMusicStreamCredential] = useState();
    const [musicImageCredential, setMusicImageCredential] = useState();

    //données de formulaire bio
    const [bioLangueCredential, setBioLangueCredential] = useState();
    const [bioTextCredential, setBioTextCredential] = useState();

    //données de formulaire tours
    const [tourLieuCredential, setTourLieuCredential] = useState();
    const [tourVilleCredential, setTourVilleCredential] = useState();
    const [tourJourCredential, setTourJourCredential] = useState();
    const [tourMoisCredential, setTourMoisCredential] = useState();
    const [tourAnneeCredential, setTourAnneeCredential] = useState();


    useEffect(() => {


        fetch("http://localhost:8080/bios")
            .then(res => res.json())
            .then(
                (result) => {
                    setBio(result);
                },
                (error) => {
                    setBio([]);
                }
            )


        fetch("http://localhost:8080/tours")
            .then(res => res.json())
            .then(
                (tour) => {
                    setTours(tour);
                },
                (error) => {
                    setTours([]);
                }
            )


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

 /*
 *
 *
 *  fonctions d'insertion
 */

    async function handleSubmitVideo(e) {
        e.preventDefault();
console.log(JSON.stringify([{titre : videoTitreCredential,embed: videoEmbedCredential}]));
       // console.log(JSON.stringify(videoTitreCredential + videoEmbedCredential));

        return fetch('http://localhost:8080/videos/insert/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({titre : videoTitreCredential,embed: videoEmbedCredential})
        })
    }


    async function handleSubmitMusic(e) {
        e.preventDefault();
        // console.log(JSON.stringify(videoTitreCredential + videoEmbedCredential));
        return fetch('http://localhost:8080/albums/insert/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({titre : musicTitreCredential,date: musicDateCredential,description: musicDescriptionCredential,stream: musicStreamCredential, image: musicImageCredential })
        })
    }

    async function handleSubmitBio(e) {
        e.preventDefault();
        // console.log(JSON.stringify(videoTitreCredential + videoEmbedCredential));
        return fetch('http://localhost:8080/bios/insert/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({langue : bioLangueCredential,text: bioTextCredential })
        })
    }

    async function handleSubmitTour(e) {
        e.preventDefault();
        // console.log(JSON.stringify(videoTitreCredential + videoEmbedCredential));
        var date = tourMoisCredential + '/' + tourJourCredential + '/' + tourAnneeCredential
        var lieu = tourVilleCredential + ' @ ' + tourLieuCredential
        return fetch('http://localhost:8080/tours/insert/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({lieu : lieu ,moment: date })
        })
    }


   /*
    *
    *
    *  fonctions de suppression
    */

    async function deleteAlbum(number) {
        return fetch('http://localhost:8080/albums/delete/' + number )
            .then(console.log("album numero " + number + " enlevé"))
    }
    async function deleteVideo(number) {
        return fetch('http://localhost:8080/videos/delete/' + number )
            .then(console.log("video numero " + number + " enlevé"))
    }


    async function deleteBio(number) {
        return fetch('http://localhost:8080/bios/delete/' + number )
            .then(console.log("bio numero " + number + " enlevé"))
    }

    async function deleteTour(number) {
        return fetch('http://localhost:8080/tours/delete/' + number )
            .then(console.log("tour numero " + number + " enlevé"))
    }

    async function deletePhoto(number) {
        return fetch('http://localhost:8080/photos/delete/' + number )
            .then(console.log("photo numero " + number + " enlevé"))
    }


    /*
 *
 *
 *  fonctions de modification
 */

    async function showUpdateVideo(e, id) {
        console.log(id)
        setVideoActive(id)
    }
    async function showUpdateMusic(e, id) {
        console.log(id)

        setMusicActive(id);
    }
    async function showUpdateTour(e, id) {
        console.log(id)

        setTourActive(id);
    }
    async function showUpdateBio(e, id) {
        setBioActive(id);

    }


    async function handleUpdateVideo(e, id) {
        e.preventDefault();
        console.log(JSON.stringify([{titre : videoTitreCredential,embed: videoEmbedCredential}]));
        // console.log(JSON.stringify(videoTitreCredential + videoEmbedCredential));

        return fetch('http://localhost:8080/videos/update/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({titre : videoTitreCredential,embed: videoEmbedCredential, video_id : id})
        })
    }


    async function handleUpdateMusic(e, id) {
        e.preventDefault();
        // console.log(JSON.stringify(videoTitreCredential + videoEmbedCredential));
        return fetch('http://localhost:8080/albums/update/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({titre : musicTitreCredential,date: musicDateCredential,description: musicDescriptionCredential,stream: musicStreamCredential, image: musicImageCredential, album_id : id })
        })
    }

    async function handleUpdateBio(e, id) {
        e.preventDefault();
        // console.log(JSON.stringify(videoTitreCredential + videoEmbedCredential));
          return fetch('http://localhost:8080/bios/update/', {
                 method: 'PUT',
                 headers: {
                     'Content-Type': 'application/json'
                 },
                 body: JSON.stringify({langue: bioLangueCredential, text: bioTextCredential, bio_id: id})
             }
          )
    }

    async function handleUpdateTour(e, id) {
        e.preventDefault();
        // console.log(JSON.stringify(videoTitreCredential + videoEmbedCredential));
        var date = tourMoisCredential + '/' + tourJourCredential + '/' + tourAnneeCredential
        var lieu = tourVilleCredential + ' @ ' + tourLieuCredential
        return fetch('http://localhost:8080/tours/update/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({lieu : lieu ,moment: date, tour_id : id })
        })
    }




    for (let mus of musicInfo) {
        var src = "https://bandcamp.com/EmbeddedPlayer/album=" + mus.Stream + "/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/";
        musicShow.push(
            <div className=" p-2 ">
                <h6 className="font-weight-light">{mus.Titre} - {mus.Date} </h6>
                <button onClick={() => deleteAlbum(mus.Album_ID)} className="btn btn-default btn-rounded"><i className="fas fa-times"></i></button>
                <button onClick={e => showUpdateMusic(e, mus.Album_ID)} className="btn btn-default btn-rounded"><i className="fas fa-pen"></i></button>
                <hr/>

                <div className={ musicActive == mus.Album_ID ? "": "d-none"  } >

                <form /*onSubmit={e =>this.handleSubmitVideo(e, videoTitreCredential, videoEmbedCredential)}*/>
                    <div className="col-12">
                        <label className="col-form-label col-2">
                            <p>Titre</p>
                        </label>

                        <input type="text" className="col-10" onChange={e => setMusicTitreCredential(e.target.value)}/>

                    </div>
                    <div className="col-12 mt-4">

                        <label className="col-form-label col-2">
                            <p>Date (format année xxxx)</p>
                        </label>

                        <input className="col-10" type="text" onChange={e => setMusicDateCredential(e.target.value)}/>
                    </div>

                    <div className="col-12 mt-4">

                        <label className="col-form-label col-2">
                            <p>Description</p>
                        </label>

                        <input className="col-10" type="text" onChange={e => setMusicDescriptionCredential(e.target.value)}/>
                    </div>

                    <div className="col-12 mt-4">

                        <label className="col-form-label col-2">
                            <p>Stream</p>
                        </label>

                        <input className="col-10" type="text" onChange={e => setMusicStreamCredential(e.target.value)}/>
                    </div>

                    <div className="col-12 mt-4">

                        <label className="col-form-label col-2">
                            <p>Image</p>
                        </label>

                        <input className="col-10" type="text" onChange={e => setMusicImageCredential(e.target.value)}/>
                    </div>

                    <div className="col-12 mt-4">
                        <button type='button' onClick={(e) => handleUpdateMusic(e, mus.Album_ID)} className="btn btn-default btn-rounded border"><i className="fas fa-plus fa-2x"></i></button>                </div>
                </form>
                    <hr/>

                </div>

            </div>






        )
    }

    musicShow.push(
        <div>
            <h3>-Ajouter Album-</h3>

            <form /*onSubmit={e =>this.handleSubmitVideo(e, videoTitreCredential, videoEmbedCredential)}*/>
                <div className="col-12">
                    <label className="col-form-label col-2">
                        <p>Titre</p>
                    </label>

                    <input type="text" className="col-10" onChange={e => setMusicTitreCredential(e.target.value)}/>

                </div>
                <div className="col-12 mt-4">

                    <label className="col-form-label col-2">
                        <p>Date (format année xxxx)</p>
                    </label>

                    <input className="col-10" type="text" onChange={e => setMusicDateCredential(e.target.value)}/>
                </div>

                <div className="col-12 mt-4">

                    <label className="col-form-label col-2">
                        <p>Description</p>
                    </label>

                    <input className="col-10" type="text" onChange={e => setMusicDescriptionCredential(e.target.value)}/>
                </div>

                <div className="col-12 mt-4">

                    <label className="col-form-label col-2">
                        <p>Stream</p>
                    </label>

                    <input className="col-10" type="text" onChange={e => setMusicStreamCredential(e.target.value)}/>
                </div>

                <div className="col-12 mt-4">

                    <label className="col-form-label col-2">
                        <p>Image</p>
                    </label>

                    <input className="col-10" type="text" onChange={e => setMusicImageCredential(e.target.value)}/>
                </div>

                <div className="col-12 mt-4">
                    <button type='button' onClick={(e) => handleSubmitMusic(e)} className="btn btn-default btn-rounded border"><i className="fas fa-plus fa-2x"></i></button>                </div>
            </form>



        </div>
    );

    for (let video of videoInfo) {
        var vidSrc = "https://www.youtube.com/embed/" + video.Embed
        videoShow.push(
            <div className=" p-2 ">
                <h6 className="font-weight-light">{video.Titre}</h6>
                <button onClick={() =>deleteVideo(video.Video_ID)} className="btn btn-default btn-rounded"><i className="fas fa-times"></i></button>
                <button onClick={e => showUpdateVideo(e, video.Video_ID)} className="btn btn-default btn-rounded"><i className="fas fa-pen"></i></button>
                <hr/>
<div className={ videoActive == video.Video_ID ? "": "d-none"  } >

                <form /*onSubmit={e =>this.handleSubmitVideo(e, videoTitreCredential, videoEmbedCredential)}*/>
                    <div className="col-12">
                        <label className="col-form-label col-2">
                            <p>Texte</p>
                        </label>

                        <input type="text" className="col-10" onChange={e => setVideoTitreCredential(e.target.value)}/>

                    </div>
                    <div className="col-12 mt-4">

                        <label className="col-form-label col-2">
                            <p>Lien</p>
                        </label>

                        <input className="col-10" type="text" onChange={e => setVideoEmbedCredential(e.target.value)}/>
                    </div>
                    <div className="col-12 mt-4">
                        <button type='button' onClick={(e) => handleSubmitVideo (e)} className="btn btn-default btn-rounded border"><i className="fas fa-plus fa-2x"></i></button>                </div>
                </form>
    <hr/>
</div>
            </div>





        )
    }

    videoShow.push(
        <div>
            <h3>-Ajouter Vidéo-</h3>

            <form /*onSubmit={e =>this.handleSubmitVideo(e, videoTitreCredential, videoEmbedCredential)}*/>
                <div className="col-12">
                    <label className="col-form-label col-2">
                        <p>Texte</p>
                    </label>

                    <input type="text" className="col-10" onChange={e => setVideoTitreCredential(e.target.value)}/>

                </div>
                <div className="col-12 mt-4">

                    <label className="col-form-label col-2">
                        <p>Lien</p>
                    </label>

                    <input className="col-10" type="text" onChange={e => setVideoEmbedCredential(e.target.value)}/>
                </div>
                <div className="col-12 mt-4">
                    <button type='button' onClick={(e) => handleSubmitVideo (e)} className="btn btn-default btn-rounded border"><i className="fas fa-plus fa-2x"></i></button>                </div>
            </form>





        </div>
    );


    for (let bi of bio) {
        bioShow.push(
            <div><h6 className="fw-bold">{bi.Langue}</h6>
                <p className="text-start">{bi.Text}</p>
                <button onClick={() =>deleteBio(bi.Bio_ID)} className="btn btn-default btn-rounded"><i className="fas fa-times"></i></button>
                <button value={bi.Bio_ID} onClick={e => showUpdateBio(e, bi.Bio_ID)} className="btn btn-default btn-rounded"><i className="fas fa-pen"></i></button>

                <div className={ bioActive == bi.Bio_ID ? "": "d-none"  } id={'bioupdateform' + bi.Bio_ID}>
                <form /*onSubmit={e =>this.handleSubmitVideo(e, videoTitreCredential, videoEmbedCredential)}*/>
                    <div className="col-12">
                        <label className="col-form-label col-2">
                            <p>Langue</p>
                        </label>

                        <input type="text" className="col-10" onChange={e => setBioLangueCredential(e.target.value)}/>

                    </div>
                    <div className="col-12 mt-4">

                        <label className="col-form-label col-2">
                            <p>Texte</p>
                        </label>

                        <input className="col-10" type="text" onChange={e => setBioTextCredential(e.target.value)}/>
                    </div>
                    <div className="col-12 mt-4">
                        <button type='button' onClick={(e) => handleUpdateBio(e,bi.Bio_ID )} className="btn btn-default btn-rounded border"><i className="fas fa-plus fa-2x"></i></button>                </div>
                </form>
                <hr/>
                </div>
                <hr/>
            </div>
        );

    }

    bioShow.push(
        <div>
            <h3>-Ajouter Bio-</h3>

            <form /*onSubmit={e =>this.handleSubmitVideo(e, videoTitreCredential, videoEmbedCredential)}*/>
                <div className="col-12">
                    <label className="col-form-label col-2">
                        <p>Langue</p>
                    </label>

                    <input type="text" className="col-10" onChange={e => setBioLangueCredential(e.target.value)}/>

                </div>
                <div className="col-12 mt-4">

                    <label className="col-form-label col-2">
                        <p>Texte</p>
                    </label>

                    <input className="col-10" type="text" onChange={e => setBioTextCredential(e.target.value)}/>
                </div>
                <div className="col-12 mt-4">
                    <button type='button' onClick={(e) => handleSubmitBio(e)} className="btn btn-default btn-rounded border"><i className="fas fa-plus fa-2x"></i></button>                </div>
            </form>
        </div>
    );


    for (let tour of tours) {

        tourShow.push(
            <div><h6 className="fw-bold">{tour.Moment} - {tour.Lieu}</h6>
                <button onClick={() =>deleteTour(tour.Tour_ID)} className="btn btn-default btn-rounded"><i className="fas fa-times"></i></button>
                <button onClick={e =>showUpdateTour(e, tour.Tour_ID)} className="btn btn-default btn-rounded"><i className="fas fa-pen"></i></button>

                <div className={ tourActive ==  tour.Tour_ID ? "": "d-none"  }>
                    <form /*onSubmit={e =>this.handleSubmitVideo(e, videoTitreCredential, videoEmbedCredential)}*/>
                        <div className="col-12">
                            <label className="col-form-label col-2">
                                <p>Ville, Pays</p>
                            </label>

                            <input type="text" className="col-4" onChange={e => setTourVilleCredential(e.target.value)}/>
                            <label className="col-form-label col-2">
                                <p>Lieu</p>
                            </label>

                            <input type="text" className="col-4" onChange={e => setTourLieuCredential(e.target.value)}/>

                        </div>
                        <div className="col-12 mt-4">

                            <label className="col-form-label col-2">
                                <p>Jour</p>
                            </label>

                            <input className="col-2" type="text" onChange={e => setTourJourCredential(e.target.value)}/>
                            <label className="col-form-label col-2">
                                <p>Mois</p>
                            </label>

                            <input className="col-2" type="text" onChange={e => setTourMoisCredential(e.target.value)}/>
                            <label className="col-form-label col-2">
                                <p>Année</p>
                            </label>

                            <input className="col-2" type="text" onChange={e => setTourAnneeCredential(e.target.value)}/>

                        </div>
                        <div className="col-12 mt-4">
                            <button type='button' onClick={(e) => handleSubmitTour(e)} className="btn btn-default btn-rounded border"><i className="fas fa-plus fa-2x"></i></button>                </div>
                    </form>
                    <hr/>
                </div>
                <hr/>
            </div>
        )

    }

    tourShow.push(
        <div>
            <h3>-Ajouter date de concert-</h3>

            <form /*onSubmit={e =>this.handleSubmitVideo(e, videoTitreCredential, videoEmbedCredential)}*/>
                <div className="col-12">
                    <label className="col-form-label col-2">
                        <p>Ville, Pays</p>
                    </label>

                    <input type="text" className="col-4" onChange={e => setTourVilleCredential(e.target.value)}/>
                    <label className="col-form-label col-2">
                        <p>Lieu</p>
                    </label>

                    <input type="text" className="col-4" onChange={e => setTourLieuCredential(e.target.value)}/>

                </div>
                <div className="col-12 mt-4">

                    <label className="col-form-label col-2">
                        <p>Jour</p>
                    </label>

                    <input className="col-2" type="text" onChange={e => setTourJourCredential(e.target.value)}/>
                    <label className="col-form-label col-2">
                        <p>Mois</p>
                    </label>

                    <input className="col-2" type="text" onChange={e => setTourMoisCredential(e.target.value)}/>
                    <label className="col-form-label col-2">
                        <p>Année</p>
                    </label>

                    <input className="col-2" type="text" onChange={e => setTourAnneeCredential(e.target.value)}/>

                </div>
                <div className="col-12 mt-4">
                    <button type='button' onClick={(e) => handleSubmitTour(e)} className="btn btn-default btn-rounded border"><i className="fas fa-plus fa-2x"></i></button>                </div>
            </form>
        </div>
    );

  /*  if (!token) {
        return <Login setToken={setToken}/>
    }

*/
    return (
        <div className="Admin">


            <div className="container">

                <div className="bg-light p-2 rounded my-5">
                    <h1>-BIO-</h1>
                    {bioShow}
                </div>

                <div className="bg-light p-2 rounded my-5">
                    <h1>-MUSIC-</h1>
                    {musicShow}
                </div>


                <div className="bg-light p-2 rounded my-5">
                    <h1>-VIDEO-</h1>
                    {videoShow}
                </div>



                <div className="bg-light p-2 rounded my-5">
                    <h1>-TOUR DATES-</h1>
                    {tourShow}
                </div>


            </div>
        </div>
    );








}



export default Admin;