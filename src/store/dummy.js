import { create } from "zustand";
// https://docs.pmnd.rs/zustand/getting-started/introduction
const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

// 아래 처럼 사용

// function BearCounter() {
//     const bears = useStore((state) => state.bears)
//     return <h1>{bears} around here...</h1>
//   }
