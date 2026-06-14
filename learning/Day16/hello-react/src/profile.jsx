function Avatar({ persion, size }) {
  return (
    <img
      src={persion}
      alt={persion.name}
      className="avatar"
      width={size}
      height={size}
    />
  );
}
export default function Profile() {
  return (
    <Avatar persion={{ name: "Lin Lanying", imageId: "1bX5QH6" }} size={100} />
  );
}
