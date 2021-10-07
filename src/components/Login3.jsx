import React, {Component} from "react";
import axios from 'axios';



class Login3 extends Component {

    constructor(props) {
        super(props)

        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangeMdp = this.onChangeMdp.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            log: '',
            pass: ''
        }
    }


    onChangeLogin(e) {
        this.setState({ name: e.target.value })
    }

    onChangeMdp(e) {
        this.setState({ email: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            log: this.state.log,
            pass: this.state.pass
        };

        axios.post('http://localhost:8080/admin', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
            console.log(error)
        });

        this.setState({ log: '', pass: '' })
    }





    render() {

        return (

            <div className="login">
                <div className="container">
                    <div className="row align-items-center my-5 border rounded bg-light p-2 ">

                        <div className="offset-lg-3 col-lg-6">


                            <h1 className="font-weight-light">Freeze ! Identify yourself !</h1>
                            <hr className="little-line my-4"/>

                            <form onSubmit={this.onSubmit}>
                                <div className="col-12">
                                    <label>
                                        <p>Login</p>
                                        <input type="text" onChange={this.state.log}/>
                                    </label>

                                </div>
                                <div className="col-12 mt-4">

                                    <label>
                                        <p>Mot de Passe</p>
                                        <input type="password" onChange={this.state.pass}/>
                                    </label>
                                </div>
                                <div className="col-12 mt-4">
                                    <input type="submit" value='login' className="btn btn-light border rounded shadow-sm">Connection
                                    </input>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Login3;