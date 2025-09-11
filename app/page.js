import Link from "next/link";
export default function Page() {
  let a = 10;
  let b = 20;
  return (
    <main>
      <h1 className="text-3xl text-blue-400 bold-font"> CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="week-2">Week 2</Link>
    </main>
  );
}