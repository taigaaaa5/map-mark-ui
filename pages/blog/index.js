import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { useState } from 'react';
import Link from 'next/link';

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title || '無題',
      date: data.date || null,
      tags: data.tags || [],
    };
  });

  // 日付で新着順ソート
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // 全タグを集めて重複除去
  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)));

  return {
    props: { posts, allTags },
  };
}

export default function BlogList({ posts, allTags }) {
  const [selectedTag, setSelectedTag] = useState(null);

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  return (
    <div className="prose mx-auto px-4">
      <h1>ブログ一覧</h1>

      {/* タグフィルタ */}
      <div className="mb-4 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedTag(null)}
          className={`px-2 py-1 border rounded ${selectedTag === null ? 'bg-black text-white' : 'bg-gray-200'}`}
        >
          すべて表示
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-2 py-1 border rounded ${
              selectedTag === tag ? 'bg-black text-white' : 'bg-gray-200'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* フィルタ後の投稿リスト */}
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="font-bold text-blue-600 hover:underline">
              {post.title}
            </Link>
            {post.date && (
              <p className="text-sm text-gray-500">
                投稿日: {new Date(post.date).toLocaleDateString('ja-JP')}
              </p>
            )}
            {post.tags.length > 0 && (
              <p className="text-sm text-gray-400">
                タグ: {post.tags.join(', ')}
              </p>
            )}
          </li>
        ))}
      </ul>

      {filteredPosts.length === 0 && (
        <p className="text-gray-500 mt-4">このタグの記事はまだありません。</p>
      )}
    </div>
  );
  // コンポーネント内適当な場所に
<div className="mb-4">
  <Link href="/" className="text-blue-600 hover:underline">
    ← ホームに戻る
  </Link>
</div>
}
