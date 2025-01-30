
  import { client } from "@/sanity/lib/client";
  import { NextResponse } from "next/server";


  export async function GET(req: Request) {
    try {
      console.log("🔍 API called for search...");

      const { searchParams } = new URL(req.url);
      const searchQuery = searchParams.get("search")?.toLowerCase() || "";

      console.log("🔎 Search Query:", searchQuery);

      // Sanity API Query
      const allProducts = await client.fetch(`
        *[_type == "product"]{
          _id,
          name,
          "image": image.asset->url,
          price
        }
      `);

      console.log("✅ Products Fetched:", allProducts.length);

      // Filter products based on search query
      const filteredProducts = allProducts.filter((product: { name: string }) =>
        product.name.toLowerCase().includes(searchQuery)
      );

      console.log("🔹 Filtered Products:", filteredProducts.length);

      return NextResponse.json(filteredProducts);
    } catch (error) {
      console.error("❌ API Error:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }


