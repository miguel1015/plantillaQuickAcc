import { create } from "zustand";
import { ResponseLogin } from "../../api/types/login/responseLogin";

interface LoginState {
  loginUser: ResponseLogin | null;
  setLoginUser: (user: ResponseLogin) => void;
}

export const loginStore = create<LoginState>((set) => ({
  loginUser: null,
  setLoginUser: (user) => set({ loginUser: user }),
}));
