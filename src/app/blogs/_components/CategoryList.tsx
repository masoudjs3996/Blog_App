import Link from "next/link";

type category = {
  _id: string;
  title: string;
  englishTitle: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
type CategoryResponse = {
  data: {
    categories: category[];
  };
};
async function CategoryList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  const {
    data: { categories },
  }: CategoryResponse = await res.json();


  return (
    <>
      <ul className="space-y-4">
        <Link href="/blogs">همه </Link>
        {categories.map((category) => {
          return (
            <li key={category._id}>
              <Link href={`/blogs/category/${category.slug}`}>
                {category.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CategoryList;
