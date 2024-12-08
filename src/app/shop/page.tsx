import BreadcrumbNavigation from "@/components/shop-page/BreadcrumbShop"; 
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"; 
import { FiSliders } from "react-icons/fi"; 
import { 
  newArrivalsData as arrivals, 
  relatedProductData as relatedProducts, 
  topSellingData as bestSellers 
} from "../page"; 
import ProductCard from "@/components/common/ProductCard"; 
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious, 
  PaginationEllipsis 
} from "@/components/ui/pagination"; 

const ShopPage: React.FC = () => {
  const productData = [
    ...relatedProducts.slice(1, 4), 
    ...arrivals.slice(1, 4), 
    ...bestSellers.slice(1, 4),
  ];

  return (
    <main className="pb-20">
      <div className="container mx-auto px-4 xl:px-0">
        <hr className="divider h-[1px] border-t-black/10 mb-5 sm:mb-6" />

        <BreadcrumbNavigation />

        <div className="flex flex-col w-full space-y-5">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="flex items-center justify-between">
              <h1 className="page-title font-bold text-2xl md:text-[32px]">
                Casual
              </h1>
            </div>

            <div className="flex flex-col sm:items-center sm:flex-row">
              <span className="product-count text-sm md:text-base text-black/60 mr-3">
                Showing 1-10 of 100 Products
              </span>
              <div className="sort-options flex items-center">
                Sort by:{" "}
                <Select defaultValue="most-popular">
                  <SelectTrigger className="font-medium text-sm px-1.5 sm:text-base w-fit bg-transparent shadow-none border-none">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="most-popular">Most Popular</SelectItem>
                    <SelectItem value="low-price">Low Price</SelectItem>
                    <SelectItem value="high-price">High Price</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="product-grid w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {productData.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>

          <hr className="divider border-t-black/10" />

          <Pagination className="pagination-controls justify-between">
            <PaginationPrevious href="#" className="border border-black/10" />
            <PaginationContent>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="text-black/50 font-medium text-sm"
                  isActive
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="text-black/50 font-medium text-sm"
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="hidden lg:block">
                <PaginationLink
                  href="#"
                  className="text-black/50 font-medium text-sm"
                >
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis className="text-black/50 font-medium text-sm" />
              </PaginationItem>
              <PaginationItem className="hidden lg:block">
                <PaginationLink
                  href="#"
                  className="text-black/50 font-medium text-sm"
                >
                  8
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="hidden sm:block">
                <PaginationLink
                  href="#"
                  className="text-black/50 font-medium text-sm"
                >
                  9
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="text-black/50 font-medium text-sm"
                >
                  10
                </PaginationLink>
              </PaginationItem>
            </PaginationContent>
            <PaginationNext href="#" className="border border-black/10" />
          </Pagination>
        </div>
      </div>
    </main>
  );
};

export default ShopPage;
