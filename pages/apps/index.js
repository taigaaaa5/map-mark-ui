export default function Apps() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">アプリ紹介</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold">勝率カウントアプリ</h2>
        <a
  href="https://github.com/taigaaaa5/splatoon-stats/releases/download/v1.0.0/splatoon-stats.apk"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 underline"
>
  APKをダウンロード
</a>
      </section>

      <section>
        <h2 className="text-xl font-semibold">マップアプリ</h2>
        <a
      href="https://github.com/taigaaaa5/map-mark-ui/releases/download/v1.0.0/map-mark-ui.apk"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline"
    >
      APKをダウンロード
    </a>
      </section>
    </main>
  );
}
