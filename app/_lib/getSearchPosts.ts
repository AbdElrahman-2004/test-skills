import { PostData } from "../_types/types";
import { useMemo } from "react";

export function getSearchPosts(
  posts: PostData[],
  query: string | null
): PostData[] {
  const searchedPosts = useMemo(() => {
    const q = query?.toLowerCase().trim();
    if (!q) return posts;
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(q) ||
        post.body.toLowerCase().includes(q)
    );
  }, [query, posts]);

  return searchedPosts;
}
