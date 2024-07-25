import React from "react";
import "../styles/BlogCard.scss";
import PropTypes from "prop-types";

function BlogCard({ title, link, excerpt, date, categories }) {
  return (
    <div className="Blog-Card">
      <a href={link} rel="noopener noreferrer">
        <div className="Blog-Title">
          <h3>{title}</h3>
        </div>
        <div className="Blog-Excerpt">
          {excerpt}
        </div>
        <div className="Blog-Metadata">
          <div className="Blog-Categories">
            {categories.map((category, index) => (
              <span key={index} className="Blog-Category">
                {category}
              </span>
            ))}
          </div>
          <div className="Blog-Date">{date}</div>
        </div>
      </a>
    </div>
  );
}

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BlogCard;
