export default function Greet({
  name,
  excited,
}: {
  name: string;
  excited?: boolean;
}) {
  return `Hello, ${name}${excited ? "!!!" : "!"} `;
}
