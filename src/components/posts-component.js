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
        this.getPosts()
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

    getPosts = () => {
        axios.get('/posts')
        .then(res => {
            this.setState({
                posts: res.data,
                user: this.props.user
            })
        })
    }

    submitPost = () => {
        const post = document.getElementById("blog-post").value
        const user = this.state.user
        if(post.length <= postMaxLength) {
            const newBlogPost = {
                poster:user,
                post
            }
            axios.post('/posts/add', newBlogPost)
            .then(this.getPosts())
            .catch(err => console.log(err))
            
            
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
