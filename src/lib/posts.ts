import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: number;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

export function getSortedPosts(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((f) => f.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const result = matter(fileContents);
      const wordCount = result.content.split(/s+/).length;
      const readingTime = Math.ceil(wordCount / 200);
      return { slug, title: result.data.title as string, date: result.data.date as string, excerpt: result.data.excerpt as string, tags: (result.data.tags as string[]) ?? [], readingTime };
    });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.filter((f) => f.endsWith('.md')).map((f) => f.replace(/.md$/, ''));
}

export async function getPost(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, slug + '.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const result = matter(fileContents);
  const processed = await remark().use(html).process(result.content);
  const contentHtml = processed.toString();
  const wordCount = result.content.split(/s+/).length;
  const readingTime = Math.ceil(wordCount / 200);
  return { slug, title: result.data.title as string, date: result.data.date as string, excerpt: result.data.excerpt as string, tags: (result.data.tags as string[]) ?? [], readingTime, contentHtml };
}