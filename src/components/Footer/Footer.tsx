import footer_logo from "../../assets/logo.svg"
import instagram_icon from "../../assets/instagram_icon.svg"
import pinterest_icon from "../../assets/pinterest_icon.svg"
import whatsapp_icon from "../../assets/whatsapp_icon.svg"

export const Footer = () => {
  const icons = [instagram_icon, pinterest_icon, whatsapp_icon]
  return (
    <div className="footer flex flex-col justify-center items-center gap-12 mt-6 max-md:gap-5">
      <div className="flex items-center gap-10 max-md:flex-col max-md:gap-3">
        <div className="footer-logo flex items-center gap-x-5 max-md:gap-x-3 max-md:items-end">
          <img
            src={footer_logo}
            alt="footer-logo"
            className="w-[80px] max-md:w-10"
          />
          <p className="text-3xl font-bold max-md:text-2xl">Untitled Shop</p>
        </div>
        <div className="footer-social-icons flex gap-x-5">
          {icons.map((icon, index) => (
            <div
              className="footer-icons-container p-3 cursor-pointer"
              key={index}
            >
              <img
                src={icon}
                alt="social media icons"
                className="w-8 max-md:w-5"
              />
            </div>
          ))}
        </div>
      </div>
      <ul className="footer-links flex list-none gap-x-4 text-lg max-md:text-sm gap-3">
        {["Company", "Product", "Offices", "About", "Contact"].map(
          (link, index) => (
            <li key={index} className="cursor-pointer">
              {link}
            </li>
          )
        )}
      </ul>

      <div className="footer-copyright flex flex-col items-center gap-8 w-[100%] mb-8 text-lg max-md:text-sm text-center">
        <hr className="w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7]" />
        <p>
          © 2023 Untitled Shop. All rights reserved. <br />
          <span>Designed by @Chao.Wg</span>
        </p>
      </div>
    </div>
  )
}
