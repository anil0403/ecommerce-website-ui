import Banners from "@/components/Banners/Banners";
import Brand from "@/components/Brands/Brand";
import DepartmentMenu from "@/components/DepartmenMenu/DepartmentMenu";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import Footer from "@/components/Footer/Footer";
import Newsletter from "@/components/Newsletter/Newsletter";
import TrandingProducts from "@/components/TrandingProducts/TrandingProducts";
export default function Home() {
  return (
    <div className="w-full">
      <DepartmentMenu />
      <Brand />
      <TrandingProducts />
      <FeaturedProducts />
      <Banners />
      <Newsletter />
      <Footer />
    </div>
  );
}
