import Link from "next/link";

function Share() {
  return (
    <div>
      <h1>Share</h1>
      <Link href="/">Home</Link>
      <Link href="/meals">BACK</Link>
    </div>
  );
}

export default Share;
