import { useEffect } from "react";
import { loginStore } from "../../store/login/loginStore";
import { useLoginApi } from "../../api/queries/login/loginQueries";

export const useFetchLogin = () => {
  const { data, error, isLoading } = useLoginApi();
  const setLoginUser = loginStore((state) => state.setLoginUser);

  useEffect(() => {
    if (data) {
      setLoginUser(data);
    }
  }, [data, setLoginUser]);

  return { data, error, isLoading };
};
