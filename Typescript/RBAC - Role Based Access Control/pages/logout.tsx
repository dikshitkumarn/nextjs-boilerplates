import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useLayoutEffect } from "react";
import { AppLoader } from "../components/ui";
import { useActions } from "../hooks";
import { deleteCookie } from "../lib";

const Logout: NextPage = () => {
  const { logout } = useActions();
  const { replace } = useRouter();
  useLayoutEffect(() => {
    deleteCookie("token");
    logout();
    replace("/auth/login");
  }, []);

  return <AppLoader />;
};

export default Logout;
