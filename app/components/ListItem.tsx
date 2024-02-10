import React from "react";
import Link from "next/link";
import formatDate from "@/lib/formatDate";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = formatDate(date);

  return (
    <li className="mt-4 text-2xl text-white/90">
      <Link className="underline hover:text-white" href={`/articles/${id}`}>
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1 text-indigo-200">{formattedDate}</p>
    </li>
  );
}
