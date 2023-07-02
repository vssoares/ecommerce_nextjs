import { create } from 'zustand'

export type ToggleCarrinhoState = {
   toggleCarrinho: boolean;
   setToggleCarrinho: (value: boolean) => void;
};

const useToggleCarrinho = create<ToggleCarrinhoState>((set) => ({
   toggleCarrinho: false,
   setToggleCarrinho: (value: boolean) => set(() => ({ toggleCarrinho: value })),
}));

export default useToggleCarrinho;