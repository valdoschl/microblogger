import React, { Component } from 'react'


const postMaxLength = 250
//Temporary hard coded posts
let posts = [
    {
        poster: 'pekka',
        post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ducimus facere, dolorem eius, distinctio repudiandae consequuntur sapiente a neque ex rerum animi! Nihil error molestiae quod inventore non aspernatur iure!'
    },
    {
        poster: 'pe123kka',
        post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ducimus facere, dolorem eius, distinctio repudiandae consequuntur sapiente a neque ex rerum animi! Nihil error molestiae quod inventore non aspernatur iure!'
    },
    {
        poster: 'pe11kka',
        post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ducimus facere, dolorem eius, distinctio repudiandae consequuntur sapiente a neque ex rerum animi! Nihil error molestiae quod inventore non aspernatur iure!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ducimus facere, dolorem eius, distinctio repudiandae consequuntur sapiente a neque ex rerum animi! Nihil error molestiae quod inventore non aspernatur iure!'
    },
    {
        poster: 'pek2sdfgsdgka',
        post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ducimus facere, dolorem eius, distinctio repudiandae consequuntur sapiente a neque ex rerum animi! Nihil error molestiae quod inventore non aspernatur iure!'
    },
    {
        poster: 'pe333kka',
        post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ducimus facere, dolorem eius, distinctio repudiandae consequuntur sapiente a neque ex rerum animi! Nihil error molestiae quod inventore non aspernatur iure!'
    },
]

//Temporary hard coded current user
const user = 'PekkaXD'


export default class Posts extends Component {
    state = {
        posts: posts
    }

    postList() {
        return posts.map(post => {
            console.log(post)
            return (
                <div>
                    <h2>{post.poster}</h2>
                    <p>{post.post}</p>
                </div>
            )
        })
    }

    submitPost() {
        const post = document.getElementById("blog-post").value
        if(post.length <= postMaxLength) {
            posts.unshift({
                poster: user,
                post
            })
            this.setState({posts})
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
