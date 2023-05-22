import Brand from "@/components/Brands/Brand";
import DepartmentMenu from "@/components/DepartmenMenu/DepartmentMenu";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import TrandingProducts from "@/components/TrandingProducts/TrandingProducts";
export default function Home() {
  return (
    <div className="w-full">
      <DepartmentMenu />
      <Brand />
      <TrandingProducts />
      <FeaturedProducts />
    </div>
  );
}
