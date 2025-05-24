"use server";

import { useSearchParams } from "next/navigation";
import { PostData } from "../_types/types";

export default async function useGetData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: Promise<PostData[]> = await res.json();

  return data;
}
