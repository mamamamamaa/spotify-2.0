import axios from "axios";
import { useEffect, useState } from "react";

export const useAuth = (code: string) => {
  const { REACT_APP_SERVER_HOST: address = "/" } = process.env;
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    axios
      .post(`${address}/login`, { code })
      .then(({ data }) => {
        setAccessToken(data.accessToken);
        setRefreshToken(data.refreshToken);
        setExpiresIn(data.expiresIn);
        window.history.pushState({}, "", "/");
      })
      .catch((error) => {
        // @ts-ignore
        window.location = "/";
      });
  }, [code]);

  useEffect(() => {
    if (!expiresIn || !refreshToken) {
      return;
    }

    const interval = setInterval(() => {
      axios
        .post(`${address}/refresh`, { refreshToken })
        .then(({ data }) => {
          setAccessToken(data.accessToken);
          setExpiresIn(data.expiresIn);
        })
        .catch((error) => {
          // @ts-ignore
          window.location = "/";
        });
    }, (expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [refreshToken, expiresIn]);

  return { accessToken };
};
