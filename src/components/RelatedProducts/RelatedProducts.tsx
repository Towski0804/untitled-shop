import { Item } from "../Item/Item";
import { data_product } from "../../assets/data";

export const RelatedProducts = () => {
  return (
    <div className="relatedproducts flex flex-col items-center gap-3 min-h-[90vh]">
      <h1 className="text-5xl font-semibold">Related Products</h1>
      <hr className="w-[200px] h-[6px] rounded-[10px] bg-[#252525]" />
      <div className="relatedproducts-item mt-[50px] flex gap-7">
        {data_product.map((item, index) => (
          <Item
            key={index}
            id={item.id}
            name={item.name}
            img={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};
