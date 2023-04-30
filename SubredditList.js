import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../SubredditList/SubredditList.css";

const SubredditList = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://www.reddit.com/subreddits.json");
    const items = await data.json();
    setItems(items.data.children);
    // console.log(items);
  };

  return (
    <div className="subreddit-list">
      <h1>SubReddits</h1>
      <hr />
      {items.map((item) => (
        <div className="categories" key={item.data.id}>
          <img src={item.data.icon_img} alt={item.data.display_name} />
          <h2>
            <Link to={`/subreddit/${item.data.display_name}`}>
              {item.data.display_name}
            </Link>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default SubredditList;
