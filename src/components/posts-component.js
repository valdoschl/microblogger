import React, { Component } from 'react'
import axios from 'axios'


const postMaxLength = 250




export default class Posts extends Component {
    constructor(props) {
        super(props)

        this.state = {posts:[]}
    }

    /* state = {
        posts: []
    } */

    componentDidMount = () => {
        axios.get('/posts')
        .then(res => {
            this.setState({
                posts: res.data,
                user: this.props.user
            })
        })
    }

    postList() {
        return this.state.posts.map(post => {
            return (
                <div key={post._id}>
                    <h2>{post.poster}</h2>
                    <p>{post.post}</p>
                </div>
            )
        })
    }

    

    submitPost() {
        const post = document.getElementById("blog-post").value
        let posts = [...this.state.posts]
        const user = this.state.user
        if(post.length <= postMaxLength) {
            //add to db
            const newBlogPost = {
                post,
                poster: user
            }
            axios.post('/posts/add', newBlogPost)
            .then(res => {posts.unshift({
                    poster: user,
                    post
                })
                this.setState({posts})})
            .catch(err => console.log(err))
            //update state
            
            document.getElementById("blog-post").value = ''
        } else {
            alert('too long')
        }
    }

    render() {
        return (
            <div className="middle-content">
                <a href="#top">
                    <div id="header">
                        <h1>MICROBLOGGER</h1>
                    </div>
                </a>
                <div id="post-blog">
                    <textarea id="blog-post" placeholder="write a microblog"></textarea>
                    <input type="submit" value="post" onClick={() => this.submitPost()} />
                </div>
                <div id="posts">
                    {this.postList()}
                </div>
            </div>
        )
    }
}
