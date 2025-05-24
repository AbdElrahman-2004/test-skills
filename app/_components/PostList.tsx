"use client";

import { useSearchParams } from "next/navigation";
import { getSearchPosts } from "../_lib/getSearchPosts";
import Post from "./Post";
import { PostData } from "../_types/types";

export default function PostList({ data }: { data: PostData[] }) {
  const searchParams = useSearchParams();
  const q = searchParams.get("search");
  const posts = getSearchPosts(data, q);

  return (
    <div className="flex justify-center items-stretch flex-wrap w-full mt-3">
      {posts.map((post) => (
        <Post key={`${post.id}-${post.userId}`} {...post} />
      ))}
    </div>
  );
}
