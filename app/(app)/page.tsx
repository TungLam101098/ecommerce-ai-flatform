import { Button } from "@/components/ui/button";
import { sanityFetch } from "@/sanity/lib/live";

export default async function Home() {
  const categories = await sanityFetch({
    query: '*'
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
