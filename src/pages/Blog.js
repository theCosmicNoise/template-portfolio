import "../styles/Blog.scss";
import BlogCard from "../components/BlogCard";
import React, { useEffect, useState } from "react";
import { client } from "../utils/fetchClient";

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await client.getEntries({
          content_type: "post",
          order: "-sys.updatedAt",
        });
        setBlogPosts(entries.items);
        console.log(entries.items);
      } catch (error) {
        console.log("error", error);
      }
    };
    getAllEntries();
  }, []);

  return (
    <div className="Blog">
      <div className="Page-Title">
        <h1>
          <i>Bl</i>og
        </h1>
      </div>
      <div className="Blog-Container">
        {blogPosts.map((post) => {
          const categories = post.fields.category
            ? post.fields.category.map((cat) => cat.fields.categoryName)
            : [];
          return (
            <BlogCard
              key={post.sys.id}
              title={post.fields.title}
              link={`blog/${post.fields.slug}`}
              excerpt={post.fields.excerpt}
              categories={categories}
              date={new Date(post.sys.updatedAt).toLocaleDateString()}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
