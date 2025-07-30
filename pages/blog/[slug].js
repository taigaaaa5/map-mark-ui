// pages/blog/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'posts', `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      title: data.title || params.slug,
      date: data.date || null, // ← ここを追加
      contentHtml,
    },
  };
}

export default function Post({ title, date, contentHtml }) {
  return (
    <div className="prose mx-auto px-4">
      <h1>{title}</h1>
      {date && (
        <p className="text-gray-500 text-sm mb-4">
          投稿日: {new Date(date).toLocaleDateString('ja-JP')}
        </p>
      )}
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}
