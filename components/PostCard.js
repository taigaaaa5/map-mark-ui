// components/PostCard.js
export default function PostCard({ title, excerpt }) {
  return (
    <div className="bg-splaPurple text-white p-4 rounded-2xl shadow-lg hover:bg-splaGreen transition">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{excerpt}</p>
    </div>
  )
}
