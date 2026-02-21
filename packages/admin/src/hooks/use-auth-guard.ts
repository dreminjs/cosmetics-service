import { useGetMySelf } from "@/modules/users/api/query";
import { useEffect } from "react";
import { useNavigate } from "react-router";

type GuardType = "private" | "guest";

export const useAuthGuard = (type: GuardType) => {
  const { data: me, isSuccess } = useGetMySelf();

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      if (type === "private" && !me) {
        navigate("/");
      } else if (type === "guest" && me) {
        navigate("orders");
      }
    }
  }, [isSuccess, me]);
};
