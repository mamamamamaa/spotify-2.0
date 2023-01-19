import { useEffect, useState } from "react";
import axios from "axios";

export const useAuth = (code: string) => {
  const { REACT_APP_LOCAL_SERVER_LOGIN_ADDRESS: address = "/" } = process.env;
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expireIn, setExpireIn] = useState();

  useEffect(() => {
    axios
      .post(address, { code })
      .then((data) => {
        console.log(data);
        window.history.pushState({}, "", "/");
      })
      .catch((error) => {
        // @ts-ignore
        window.location = "/";
      });
  }, [code]);
};
