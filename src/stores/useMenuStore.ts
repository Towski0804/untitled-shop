import { create } from "zustand"

type Menu = {
  menu: string
  setMenu: (menu: string) => void
}

export const useMenuStore = create<Menu>((set) => ({
  menu: "Shop",
  // setMenu is a function, it would take a parameter and set the menu to parameter's value
  setMenu: (menu: string) => set({ menu })
}))
