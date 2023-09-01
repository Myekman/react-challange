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
            isLoaded: true
        }
      }

      render() {
        return (
        <div className={css.Content}>

            <div className = {css.TitleBar}>
                <h2>Bilddaggbok</h2>
            </div>

            <div className={css.SearchResults}>
                <p>bilder</p>
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