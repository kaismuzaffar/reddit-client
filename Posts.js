import React, { useState, useEffect } from "react";
import "../Posts/Posts.css";

const Posts = ({ match }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      const fetchItem = await fetch(
        `https://www.reddit.com/r/${match.params.subreddit}.json`
      );
      const items = await fetchItem.json();
      setItem(items.data.children);
      // console.log(items.data.children);
    };

    fetchItem();

    // console.log(match);
  }, [match]);

  return (
    <div className="subreddit-posts">
      {item.map((item) => (
        <div className="post" key={item.data.id}>
          <h1 className="title">{item.data.title}</h1>
          <hr />

          <p className="author">
            <span>by</span> {item.data.author}
          </p>
          <img src={item.data.url} alt="" />
          <p className="content">{item.data.selftext}</p>
          <hr />
          <p className="upvotes">
            {Math.round(item.data.upvote_ratio * 100)}% Upvoted
          </p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
