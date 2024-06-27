import React from "react";
import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "@/utils/getPostMetadeta";
import Markdown from "markdown-to-jsx";

function getPostContent(slug) {
  const folder = "recipes/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata("recipes");
  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({ params, searchParams }) {
  const id = params?.slug ? " ⋅ " + params?.slug : "";
  return {
    title: `The Baker ${id.replaceAll("_", " ")}`,
  };
}

function RecipePage(props) {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <main className="bg-gray-100 min-h-screen py-8">
      <article className="max-w-3xl mx-auto p-10 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6">{post.data.title}</h1>
        <Markdown
          options={{
            overrides: {
              h1: {
                props: {
                  className:
                    "text-4xl text-gray-700 mt-6 mb-4 bg-gray-300 p-2 rounded-lg",
                },
              },
              h2: {
                props: {
                  className: "text-2xl text-gray-700 mt-6 mb-4",
                },
              },
              p: {
                props: {
                  className: "text-base text-gray-600 leading-relaxed mb-4",
                },
              },
              ul: {
                props: {
                  className: "list-disc list-inside mb-4",
                },
              },
              li: {
                props: {
                  className: "text-base text-gray-600 leading-relaxed mb-2",
                },
              },
            },
          }}
          className="text-black"
        >
          {post.content}
        </Markdown>
      </article>
    </main>
  );
}

export default RecipePage;
