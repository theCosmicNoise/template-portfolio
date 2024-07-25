import React from "react";

const options = {
  renderNode: {
    "embedded-asset-block": (node) => {
      const { title, file } = node.data.target.fields;
      const { url, fileName } = file;

      const imageUrl = url.startsWith("//") ? `https:${url}` : url;

      return <img src={imageUrl} alt={title || fileName} />;
    },
    "embedded-entry-block": (node) => {
      const { title, description } = node.data.target.fields;
      return (
        <div className="embedded-entry">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      );
    },
    "embedded-entry-inline": (node) => {
      const { title } = node.data.target.fields;
      return <span className="inline-entry">{title}</span>;
    },
  },
};

export default options;
