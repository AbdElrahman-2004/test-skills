"use client";

import { useSearchParams } from "next/navigation";
import { useSearchPosts } from "../_hooks/useSearchPosts";
import Post from "./Post";
import { PostData } from "../_types/types";

export default function PostList({ data }: { data: PostData[] }) {
  const searchParams = useSearchParams();
  const q = searchParams.get("search");
  const posts = useSearchPosts(data, q);

  return (
    <div>
      {" "}
      <div>Number of results: {posts.length}</div>
      <div className="flex justify-center items-stretch flex-wrap w-full mt-3">
        {posts.map((post) => (
          <Post key={`${post.id}-${post.userId}`} {...post} />
        ))}
      </div>
    </div>
  );
}
