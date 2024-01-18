import { create } from "zustand";
import {emojis} from "@/system_data/emojis"

export const useThemeStore = create((set) => ({
  theme: emojis,
  themeSelect: emojis.theme_1,
  setTheme: (index:number) => set((state:any) => ({ themeSelect: state.theme[index]})),
}));
