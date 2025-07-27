export default function Apps() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">🛠 アプリ紹介</h1>
      <p className="mb-4">自作のスプラトゥーン分析アプリを紹介します。</p>

      <div className="border p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">勝率記録アプリ</h2>
        <img src="/apk/app_screenshot.png" alt="アプリ画像" className="w-full max-w-md mb-2" />
        <p className="mb-2">各ステージ・ルールごとに勝敗を記録できるアプリです。</p>
        <a href="/apk/splatoon-app.apk" download className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
          APKをダウンロード
        </a>
      </div>
    </main>
  );
}
