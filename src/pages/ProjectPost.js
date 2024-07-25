import React, { useState, useEffect } from "react";
import "../styles/BlogPost.scss";
import { useParams } from "react-router-dom";
import { client } from "../utils/fetchClient";
import richTextOptions from "../utils/richTextOptions";
import PageNotFound from "./PageNotFound";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function ProjectPost() {
  const [projectPost, setProjectPost] = useState(null);
  const [error, setError] = useState(false);

  const { slug } = useParams();

  useEffect(() => {
    const fetchProjectPost = async () => {
      try {
        const entries = await client.getEntries({
          content_type: "post",
          "fields.slug": slug,
        });
        const filteredEntries = entries.items.filter(
          (post) => post.fields.isProject
        );

        if (filteredEntries.length > 0) {
          setProjectPost(filteredEntries[0]);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      }
    };

    fetchProjectPost();
  }, [slug]);

  if (error) {
    return <PageNotFound />;
  }

  const categories = projectPost?.fields.category
    ? projectPost.fields.category.map((cat) => cat.fields.categoryName)
    : [];

  console.log(projectPost);
  const content = projectPost?.fields.content;

  return (
    <div className="Blog-Post">
      <h1 className="title">{projectPost?.fields.title}</h1>
      <div className="categories">
        {categories.map((category, index) => (
          <h3 key={index} className="category">
            {category}
          </h3>
        ))}
      </div>
      <img
        className="cover-image"
        src={projectPost?.fields.coverImage.fields.file.url}
        alt={projectPost?.fields.coverImage.fields.file.title}
      />
      <div className="project-link">
        {projectPost?.fields.projectLink && (
          <a
            href={projectPost?.fields.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Project Link↗
          </a>
        )}
      </div>
      <div className="main-post">
        {content ? (
          documentToReactComponents(content, richTextOptions)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default ProjectPost;
