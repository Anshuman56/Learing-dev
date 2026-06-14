export default function Card({ title, description, emoji }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{emoji}</p>
    </div>
  );
}
