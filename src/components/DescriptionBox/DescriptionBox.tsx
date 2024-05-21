type DescriptionBoxProps = {
  description: string
}

export const DescriptionBox: React.FC<DescriptionBoxProps> = (props) => {
  const { description } = props
  return (
    <div
      className="descriptionbox my-[70px] mx-[170px]
    max-xl:m-[70px]
    max-md:m-[60px_20px]"
    >
      <div className="nav flex">
        <div className="nav-box flex items-center justify-center text-base font-semibold w-[170px] h-[70px] border border-gray-400">
          Description
        </div>
        <div className="nav-box fade flex items-center justify-center text-base font-semibold w-[170px] h-[70px] border border-l-0 border-gray-400 text-[#555] bg-[#fbfbfb]">
          Reviews(122)
        </div>
      </div>
      <div
        className="descriptionbox-desc flex flex-col gap-6 p-12 pb-16 border border-gray-400
      max-md:text-sm max-md:p-6"
      >
        <p>{description}</p>
      </div>
    </div>
  )
}
