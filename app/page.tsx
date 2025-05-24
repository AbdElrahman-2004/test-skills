import { Suspense } from "react";
import PostList from "./_components/PostList";
import Navbar from "./_components/Navbar";
import Loading from "./loading";
import useGetData from "./_hooks/useGetData";

export default async function Home() {
  const data = await useGetData();

  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <PostList data={data} />
      </Suspense>
    </div>
  );
}
