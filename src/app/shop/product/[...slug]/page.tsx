import {
  newArrivalsData as latestProducts,
  relatedProductData as suggestedProducts,
  topSellingData as bestSellers,
} from "@/app/page";
import ProductListSection from "@/components/common/ProductListSec";
import Breadcrumb from "@/components/product-page/BreadcrumbProduct";
import ProductHeader from "@/components/product-page/Header";
import ProductTabs from "@/components/product-page/Tabs";
import { Product } from "@/types/product.types";
import { notFound } from "next/navigation";

const combinedProducts: Product[] = [
  ...latestProducts,
  ...bestSellers,
  ...suggestedProducts,
];

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const selectedProduct = combinedProducts.find(
    (item) => item.id === Number(params.slug[0])
  );

  if (!selectedProduct?.title) {
    notFound();
  }

  return (
    <main>
      <div className="container mx-auto px-4 xl:px-0">
        <hr className="divider h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <Breadcrumb title={selectedProduct?.title ?? "Product"} />
        <section className="product-header mb-11">
          <ProductHeader data={selectedProduct} />
        </section>
        <ProductTabs />
      </div>
      <div className="suggestions mb-[50px] sm:mb-20">
        <ProductListSection
          title="You might also like"
          data={suggestedProducts}
        />
      </div>
    </main>
  );
}
