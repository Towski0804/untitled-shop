import { new_collections } from "../../assets/new_collections";
import { Item } from "../Item/Item";

export const NewCollections = () => {
  return (
    <div className="new-collections flex flex-col items-center gap-3 pt-10 mb-[100px]">
      <h1 className="text-zinc-800 text-5xl font-semibold">
        New Collections for Men
      </h1>
      <hr className="w-[200px] h-[6px] rounded-lg bg-gray-800" />
      <div className="collections mt-12 gap-7 grid grid-cols-4 ">
        {new_collections.map((item, index) => (
          <Item
            key={index}
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
