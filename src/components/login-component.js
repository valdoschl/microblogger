import React, { Component } from 'react'
import { Redirect}  from 'react-router-dom'
import axios from 'axios'


export default class Login extends Component {
    constructor(props) {
        super(props)
    }

    login = (e) => {
        e.preventDefault()
        const username = document.querySelector('input[name=username]').value
        const password = document.querySelector('input[name=password]').value
        axios.get('/users')
        .then(res => {
            const user = res.data.filter(user => user.username === username)
            if (user.length > 0) {
                if (password === user[0].password) {
                    this.props.login(username)
                } else {
                    console.log('Wrong password')
                }
            } else {
                console.log('account not found')
            }
        })
    }

    redirectToMain = () => {
        if (this.props.isLogged) {
            return <Redirect to='/' />
        }
    }


    render() {
        return (
            <div>
                {this.redirectToMain()}
                <form onSubmit={this.login}>
                    username:
                    <br/>
                    <input type="text" name="username"/>
                    <br/>
                    password:
                    <br/>
                    <input type="password" name="password"/>
                    <br/>
                    <input type="submit" value="login"/>
                </form>
            </div>
        )
    }
}