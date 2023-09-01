import React from "react";

// all items from json posts
import {savedPosts} from "./posts.json";
import PostItem from "./PostItem";

import css from "./Content.module.css";
import Loader from "./Loader";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            posts: [],
        }
      }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                isLoaded: true,
                posts: savedPosts,
            })
        }, 2000)
    }

    handleChange = (e) => {
        const name = e.target.value.toLowerCase(); 
        const filerNames = savedPosts.filter((posts) => {
            return posts.name.includes(name)
        })
        this.setState ({
            posts: filerNames,
        })
    }

      render() {
        return (
        <div className={css.Content}>

            <div className = {css.TitleBar}>
            <h1>My Photos</h1>
                    <form>
                        <label htmlFor='searchinput'>Search</label>
                        <input 
                        type='search' 
                        id='searchinput' 
                        placeholder='By Author'
                        onChange={(e) => this.handleChange(e)}
                        />
                        <h4>posts found {this.state.posts.length}</h4>
                    </form>
            </div>

            <div className={css.SearchResults}>
                    {
                        this.state.isLoaded ?
                        <PostItem savedPosts={savedPosts} />
                        : <Loader />
                    }
            </div>
        
        </div>
        
        )
      }
}

export default Content;