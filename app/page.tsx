import { Communication, Hero, Product } from "@/sections";

export default function Home() {
  return (
    <div className="container mx-auto pt-[100px] pb-[100px]">
      <Hero />
      <Product />
      <Communication />
    </div>
  );
}
