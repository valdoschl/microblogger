import React, { Component } from 'react'
import { Redirect}  from 'react-router-dom'
import axios from 'axios'


export default class Login extends Component {
    /* constructor(props) {
        super(props)
    } */

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
                    alert('Wrong password')
                }
            } else {
                alert('account not found')
            }
        })
    }

    register = (e) => {
        e.preventDefault()
        const username = document.querySelector('input[name=registerName]').value
        const password = document.querySelector('input[name=registerPass]').value
        if (4 <= username.length && username.length<= 20) {
            if (4 <= password.length && password.length <= 20) {
                axios.post('/users/add',{username,password})
                .then(() => alert('user created'))
            } else {
                alert('Password must be 4-20 characters')
            }
        } else {
            alert('Username must be 4-20 characters')
        }
    }

    redirectToMain = () => {
        if (this.props.isLogged) {
            return <Redirect to='/' />
        }
    }
   


    render() {
        return (
            <div className="middle-content">
                {this.redirectToMain()}
                <form onSubmit={this.login} >
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
                <h2>register</h2>
                <form onSubmit={this.register}>
                    username:
                    <br/>
                    <input type="text" name="registerName"/>
                    <br/>
                    password:
                    <br/>
                    <input type="password" name="registerPass"/>
                    <br/>
                    <input type="submit" value="register"/>
                </form>
            </div>
        )
    }
}