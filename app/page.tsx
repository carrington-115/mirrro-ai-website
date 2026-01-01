import { Communication, Features, Hero, Product, Updates } from "@/sections";

export default function Home() {
  return (
    <div className="container mx-auto pt-[100px] pb-[100px]">
      <Hero />
      <Product />
      <Communication />
      <Features />
      <Updates />
    </div>
  );
}
