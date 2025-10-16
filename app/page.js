import Link from "next/link";
export default function Page() {
  return (
    <main>
      <h1 className="text-4xl text-blue-600 font-bold"> CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="week-2" className='text-xl font-bold'>Week 2</Link>
      <br />
      <Link href="week-3" className='text-xl font-bold'>Week 3</Link>
      <br />
      <Link href="week-4" className='text-xl font-bold'>Week 4</Link>
      <br />
      <Link href="week-5" className='text-xl font-bold'>Week 5</Link>
      <br />
      <Link href="week-6" className='text-xl font-bold'>Week 6</Link>
      <br />
      <Link href="week-7" className='text-xl font-bold'>Week 7</Link>
      <br />
      </main>
  );
}