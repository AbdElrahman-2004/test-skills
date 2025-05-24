import { Suspense, use } from "react";
import PostList from "./_components/PostList";
import Navbar from "./_components/Navbar";
import Loading from "./loading";
import useGetData from "./_hooks/useGetData";

export default function Home() {
  const data = use(useGetData());

  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <PostList data={data} />
      </Suspense>
    </div>
  );
}
