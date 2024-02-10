import React from "react";
import { getSortedPostsData } from "@/lib/posts";
import ListItem from "./ListItem";

export default function Articles() {
  const articles = getSortedPostsData();

  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold text-white/90">Articles</h2>
      <ul className="w-full">
        {articles.map((article) => (
          <ListItem key={article.id} post={article} />
        ))}
      </ul>
    </section>
  );
}
