import { useGetMySelf } from "@/modules/users/api/query";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const useCheckAuth = () => {
  const { data: me } = useGetMySelf();

  const navigate = useNavigate();

  useEffect(() => {
    if (!me) {
      navigate("/login");
    }
  }, [me]);
};
