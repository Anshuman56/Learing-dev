export default function UserCard({
  name,
  email,
  verified,
}: {
  name: string;
  email: string;
  verified?: boolean;
}) {
  return (
    <div className="">
      <p>
        {name} <span>{email}</span> <span>{verified ? "✓ verified" : ""}</span>
      </p>
    </div>
  );
}
