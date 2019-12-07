import React, { Component } from 'react'
import { Redirect}  from 'react-router-dom'


export default class Login extends Component {

    login() {
        console.log('u logged in ')
    }

    render() {
        return (
            <div>
                <form>
                    username:
                    <br/>
                    <input type="text" name="username"/>
                    <br/>
                    password:
                    <br/>
                    <input type="text" name="password"/>
                    <br/>
                    <input type="submit" value="login" onClick={() => this.login()}/>
                </form>
            </div>
        )
    }
}