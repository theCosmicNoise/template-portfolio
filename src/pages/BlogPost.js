/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "../styles/BlogPost.scss";
import { useParams, useNavigate } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import { client } from "../utils/fetchClient";

function BlogPost() {
  const [blogPost, setBlogPost] = useState(null);
  const [error, setError] = useState(false);

  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const entries = await client.getEntries({
          content_type: "post",
          "fields.slug": slug,
        });
        if (entries.items.length > 0) {
          setBlogPost(entries.items[0]);
        } else {
          setError(true);
          navigate(<PageNotFound />);
        }
      } catch (error) {
        setError(true);
        navigate(<PageNotFound />);
      }
    };

    fetchBlogPost();
  }, [slug]);

  if (error) {
    return <div>Blog post not found</div>;
  }
  const categories = blogPost?.fields.category
    ? blogPost.fields.category.map((cat) => cat.fields.categoryName)
    : [];
  console.log(blogPost);
  return (
    <div className="Blog-Post">
      <h1 className="title">{blogPost?.fields.title}</h1>
      <p className="date">
        - {new Date(blogPost?.sys.updatedAt).toLocaleDateString()}
      </p>
      <div className="categories">
        {categories.map((category, index) => (
          <h3 key={index} className="category">
            {category}
          </h3>
        ))}
      </div>
      <img
        className="cover-image"
        src={blogPost?.fields.coverImage.fields.file.url}
        alt={blogPost?.fields.coverImage.fields.file.title}
      />
    </div>
  );
}

export default BlogPost;
