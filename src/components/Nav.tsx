import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-6">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/dashboard" className="hover:underline">Dashboard</Link>
      <Link href="/create" className="hover:underline">Create Wager</Link>
      <Link href="/streaks" className="hover:underline">Streaks</Link>
      <Link href="/auth" className="hover:underline">Login / Signup</Link>
    </nav>
  );
}
