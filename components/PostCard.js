import Link from "next/link";
import React from "react";

function PostCard(props) {
  const { post } = props;
  return (
    <Link href={`/recipe/${post.slug}`} className="unstyled">
      <div className="postCard w-9/12 mx-auto border-2 rounded-2xl my-4 p-8 drop-shadow-lg hover:bg-white hover:text-black hover:opacity-65 hover:scale-110">
        <h3 className="font-bold py-2">{post.title}</h3>
        <p>{post.bio}</p>
        <div className="statsContainer flex justify-between py-3">
          <div>
            <h5 className="font-semibold">Prep Time</h5>
            <p>{post.prep_time}</p>
          </div>
          <div>
            <h5 className="font-semibold">Cook Time</h5>
            <p>{post.cook_time}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
