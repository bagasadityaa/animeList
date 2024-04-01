"use client";
import React from "react";

const CollectionButton = ({ anime_mal_id, user_email }) => {
  const handleCollection = async (event) => {
    event.preventDefault();
    const data = { anime_mal_id, user_email };

    const response = await fetch("/api/v1/collection", {
      method: "post",
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    console.log({ collection });
  };
  return (
    <button onClick={handleCollection} className="px-2 py-1 bg-color-accent ">
      Add to Collection
    </button>
  );
};

export default CollectionButton;
