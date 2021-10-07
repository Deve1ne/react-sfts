import React, {useState} from "react";
import PropTypes from 'prop-types';



async function loginUser(credentials) {
    return fetch('http://localhost:8080/admin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}



function Login({ setToken }) {
    const [log, setLogin] = useState();
    const [pass, setPassword] = useState();



    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            log,
            pass
        });
        setToken(token);
    }


    return (

        <div className="login">
            <div className="container">
                <div className="row align-items-center my-5 border rounded bg-light p-2 ">

                    <div className="offset-lg-3 col-lg-6">


                        <h1 className="font-weight-light">Freeze ! Identify yourself !</h1>
                        <hr className="little-line my-4" />

                        <form onSubmit={handleSubmit}>
                            <div className="col-12">
                            <label>
                                <p>Login</p>
                                <input type="text" onChange={e => setLogin(e.target.value)}/>
                            </label>

                            </div>
                            <div className="col-12 mt-4">

                            <label>
                                <p>Mot de Passe</p>
                                <input type="password" onChange={e => setPassword(e.target.value)}/>
                            </label>
                            </div>
                            <div className="col-12 mt-4">
                                <button type="submit" className="btn btn-light border rounded shadow-sm">Connection</button>
                            </div>
                        </form>





                    </div>
                </div>
            </div>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;