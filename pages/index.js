// splatoon-site/pages/index.js
export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">風太郎のスプラトゥーンサイト</h1>
      <p className="mb-6">実況動画やアプリ・ブログを紹介しています！</p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">🎥 最新の実況動画</h2>
        <div className="aspect-video">
        <iframe width="560" height="315"
src="https://www.youtube.com/watch?v=gxEbVB3o5ME"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen>
</iframe>

        </div>
      </div>

      <div className="space-x-4">
        <a href="/blog" className="text-blue-500 underline">ブログを見る</a>
        <a href="/apps" className="text-blue-500 underline">アプリを見る</a>
      </div>
    </main>
  );
}
