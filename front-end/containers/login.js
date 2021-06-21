import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function () {
    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const history = useHistory();

    const handleChange = e => {
        setState((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
    };

    const submit = () => {
        axios({
            url: 'http://localhost:3000/api/user/login',
            method: 'Post',
            headers: { 'content-type': 'Application/json' },
            data: state
        }).then(res => {
            console.log("res === ", res.data.token , res.data.success);
            if (res.data.token && res.data.success) {
                localStorage.setItem('token', res.token);
                history.push("/listing")
            } else {
                alert("No user found")
            }
        }).catch(err => {
            console.log("error = ", err);
        })
    }

    return (
        <div className="App" >
            <TextField id="email" label="Email"
                onChange={handleChange}
                type="text" />
            <TextField id="password" label="Password"
                onChange={handleChange}
                type="password" />

            <Button type="button" onClick={submit} color="primary" className="form__custom-button">
                Log in
            </Button>
        </div>
    );
}
