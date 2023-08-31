import React from "react";
import {savedPosts} from "./posts.json";
import PostItem from "./PostItem";
import css from "./Content.module.css";

class Content extends React.Component {
    constructor(props) {
        super(props);
      }

      render() {
        return (
        <div className={css.Content}>

            <div className = {css.TitleBar}>
                <h2>Hello</h2>
            </div>

            <div className={css.SearchResults}>
                <h2>Hello</h2>
            </div>
            <PostItem savedPosts={savedPosts} />
        </div>
        
        )
      }
}

export default Content;