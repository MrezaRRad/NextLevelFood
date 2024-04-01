import Link from "next/link";

function MealProfile({ params }) {
  return (
    <div>
      <h1>{params.slug}</h1>
      <Link href="/meals">Meals</Link>
    </div>
  );
}

export default MealProfile;
