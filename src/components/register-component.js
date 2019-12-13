import React, { Component } from 'react'
import axios from 'axios'


export default class Register extends Component {
    state = {
        errorMsg: ''
    }

    register = (e) => {
        e.preventDefault()
        const username = document.querySelector('input[name=registerName]').value
        const password = document.querySelector('input[name=registerPass]').value
        if (4 <= username.length && username.length<= 20) {
            if (4 <= password.length && password.length <= 20) {
                axios.post('/users/add',{username,password})
                .then(() => {
                    this.props.history.push("/login")
                })
                .catch(() => {
                    this.setState({
                        errorMsg: 'Try another username'
                    })
                })
            } else {
                this.setState({
                    errorMsg: 'Password must be 4-20 characters'
                })
            }
        } else {
            this.setState({
                errorMsg: 'Username must be 4-20 characters'
            })
        }
    }

    renderErrorMessage() {
        if(this.state.errorMsg.length > 0) {
            return <p>{this.state.errorMsg}</p>
        }
    }

    render() {
        return (
            <div id="login-register">
                <form id="register" onSubmit={this.register}>
                    <br/>
                    <input type="text" name="registerName" placeholder="username"/>
                    <br/>
                    <input type="password" name="registerPass" placeholder="password"/>
                    <br/>
                    <input type="submit" value="register"/>
                </form>
                <a href="/login">Click here to login</a>
                {this.renderErrorMessage()}
            </div>
        )
    }
}