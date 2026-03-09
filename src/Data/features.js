import { blogPosts } from "./blogData.js";

export const features = blogPosts.map((post) => ({
  title: post.title.trim(),
  description: post.description,
  slug: post.slug,
}));
