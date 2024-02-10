import React from "react";
import Image from "next/image";

export default function Avatar() {
  return (
    <section className="w-full mx-auto">
      <Image
        src="/images/cat.jpg"
        alt="Avatar"
        priority={true}
        className="border-4 border-indigo-900 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        width={200}
        height={200}
      />
    </section>
  );
}
