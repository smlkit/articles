import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSortedPostsData, getPostData } from "@/lib/posts";
import formatDate from "@/lib/formatDate";

type Params = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: Params) {
  const posts = getSortedPostsData();
  const { id } = params;

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: post?.title,
  };
}

export default async function Post({ params }: Params) {
  const posts = getSortedPostsData();
  const { id } = params;

  if (!posts.find((post) => post.id === id)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getPostData(id);
  const formattedDate = formatDate(date);

  return (
    <main className="px-6 prose prose-xl prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{formattedDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/">← Back to home</Link>
        </p>
      </article>
    </main>
  );
}
