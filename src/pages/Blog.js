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
  const filteredBlogPosts = blogPosts.filter((post) => !post.fields.isProject);

  return (
    <div className="Blog">
      <div className="Page-Title">
        <h1>
          <i>Bl</i>og
        </h1>
      </div>
      {filteredBlogPosts.length > 0 ? (
        <div className="Blog-Container">
          {filteredBlogPosts.map((post) => {
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
      ) : (
        <p className="None-Available">No blogs available</p>
      )}
    </div>
  );
}

export default Blog;
