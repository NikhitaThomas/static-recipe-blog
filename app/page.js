import PostCard from "@/components/PostCard";
import getPostMetadata from "@/utils/getPostMetadeta";
import Image from "next/image";

export default function Home() {
  const postMetadata = getPostMetadata("recipes");
  return (
    <main>
      <div className="postsContainer grid md:grid-cols-2">
        {postMetadata.map((post, postIndex) => {
          return <PostCard key={postIndex} post={post} />;
        })}
      </div>
    </main>
  );
}
