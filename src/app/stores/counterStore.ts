// stores/counterStore.ts

import { create } from 'zustand';

type CounterStore = {
  count: number;
  increment: () => void;
};

const useCounterStore = create()(set => ({
  count: 0,
  language: 'en',
  increment: () => set(state => ({ count: state.count + 1 })),
  setLanguage: (language: string) => set({ language }),
}));

export default useCounterStore;
