import { Button } from "@/components/ui/button";
import { sanityFetch } from "@/sanity/lib/live";
import { ALL_CATEGORIES_QUERY } from "@/sanity/queries/categories";

export default async function Home() {
  const { data: categories } = await sanityFetch({
    query: ALL_CATEGORIES_QUERY
  })
  console.log(categories)
  return (
    <div className="">
      {/* Feature products carousel */}
      <Button>Click me</Button>
      
      {/* Page banner */}

      {/* Category titles */}

      {/* Products section */}
    </div>
  );
}
