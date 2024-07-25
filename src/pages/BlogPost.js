import React, { useState, useEffect } from "react";
import "../styles/BlogPost.scss";
import { useParams } from "react-router-dom";
import { client } from "../utils/fetchClient";
import PageNotFound from "./PageNotFound";
import { marked } from "marked";

function BlogPost() {
  const [blogPost, setBlogPost] = useState(null);
  const [error, setError] = useState(false);

  const { slug } = useParams();

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const entries = await client.getEntries({
          content_type: "post",
          "fields.slug": slug,
        });
        const filteredEntries = entries.items.filter(
          (post) => !post.fields.isProject
        );

        if (filteredEntries.length > 0) {
          setBlogPost(filteredEntries[0]);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      }
    };

    fetchBlogPost();
  }, [slug]);

  if (error) {
    return <PageNotFound />;
  }

  const categories = blogPost?.fields.category
    ? blogPost.fields.category.map((cat) => cat.fields.categoryName)
    : [];

  const content = blogPost?.fields.contentMain;

  const getExcerptHtml = (markdownText) => {
    return { __html: marked(markdownText) };
  };

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

      {content ? (
        <div
          className="main-post"
          dangerouslySetInnerHTML={getExcerptHtml(content)}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BlogPost;
