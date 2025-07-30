import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';

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
      date: data.date || null,
      contentHtml,
    },
  };
}

export default function Post({ title, date, contentHtml }) {
  return (
    <div className="prose mx-auto px-4">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">ホーム</Link> &gt;{' '}
        <Link href="/blog" className="hover:underline">ブログ一覧</Link> &gt;{' '}
        <span>{title}</span>
      </nav>

      {/* 戻るリンク */}
      <div className="mb-6">
        <Link href="/blog" className="text-blue-600 hover:underline">
          ← ブログ一覧に戻る
        </Link>
      </div>

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
