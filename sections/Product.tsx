import { ProductItem } from "@/components";
import superagent from "@/assets/images/superagent.png";
import { productDarkModeData, productData } from "@/lib/data";

export default function Product() {
  return (
    <>
      <section
        id="product"
        className="mx-auto overflow-x-clip lg:mx-auto w-[100%] flex flex-col items-center mt-[var(--spacing-120)] mx-[var(--spacing-16)] lg:px-[var(--spacing-120)] md:px-[var(--spacing-20)]"
      >
        <div className="w-fit lg:w-[60%] flex flex-col justify-center px-[var(--spacing-20)]">
          <h2 className="text-center text-[36px] lg:text-[48px] font-bold">
            What's in Mirrro?
          </h2>
          <p className="text-center font-normal lg:text-base text-[var(--colors-black-50)] dark:text-[var(--colors-black-20)]">
            No more dropped context, no more silos, just seamless workflows and
            consistent customer experiences that drive predictable growth
          </p>
        </div>
        <div className="flex flex-col dark:hidden md:grid md:grid-cols-3 items-center justify-center gap-[20px] md:gap-16 mt-[var(--spacing-64)]">
          {productData.map((product) => (
            <ProductItem
              key={product.title}
              productLink={product.productLink}
              image={product.image}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
        <div className="hidden md:hidden lg:hidden dark:flex flex-col md:grid md:dark:grid md:grid-cols-3 items-center justify-center gap-[20px] md:gap-16 mt-[var(--spacing-64)]">
          {productDarkModeData.map((product) => (
            <ProductItem
              key={product.title}
              productLink={product.productLink}
              image={product.image}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}
