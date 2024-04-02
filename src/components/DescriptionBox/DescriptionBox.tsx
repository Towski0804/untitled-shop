export const DescriptionBox = () => {
  return (
    <div className="descriptionbox my-[70px] mx-[170px]">
      <div className="nav flex">
        <div className="nav-box flex items-center justify-center text-base font-semibold w-[170px] h-[70px] border border-gray-400">
          Description
        </div>
        <div className="nav-box fade flex items-center justify-center text-base font-semibold w-[170px] h-[70px] border border-l-0 border-gray-400 text-[#555] bg-[#fbfbfb]">
          Reviews(122)
        </div>
      </div>
      <div className="descriptionbox-desc flex flex-col gap-6 p-12 pb-16 border border-gray-400">
        <p>
          An e-commerce platform is a virtual marketplace on the internet where
          buying and selling of products or services take place. It acts as an
          online hub where businesses and individuals can exhibit their
          offerings, engage with customers, and carry out transactions without
          the necessity for physical locations. E-commerce websites have become
          highly favored due to their convenience, accessibility, and global
          outreach.
        </p>
        <p>
          Typically, these websites feature products or services accompanied by
          comprehensive descriptions, images, prices, and any available options
          such as sizes or colors. Each product typically has its dedicated page
          containing pertinent information.
        </p>
      </div>
    </div>
  );
};
