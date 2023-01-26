import axios from "axios";
import { useEffect, useState } from "react";

export const useAuth = (code: string) => {
  const { REACT_APP_SERVER_HOST: address = "/" } = process.env;
  const [accessToken, setAccessToken] = useState<string>("");
  const [refreshToken, setRefreshToken] = useState<string>("");
  const [expiresIn, setExpiresIn] = useState<number>();

  useEffect(() => {
    if (!code) {
      return;
    }

    axios
      .post(`${address}/auth/login`, { code })
      .then(({ data }) => {
        setAccessToken(data.accessToken);
        setRefreshToken(data.refreshToken);
        setExpiresIn(data.expiresIn);
        window.history.pushState({}, "", "/");
      })
      .catch((error) => {
        // @ts-ignore
        window.location = "/login";
      });
  }, [code]);

  useEffect(() => {
    if (!expiresIn || !refreshToken) {
      return;
    }

    const interval = setInterval(() => {
      axios
        .post(`${address}/auth/refresh`, { refreshToken })
        .then(({ data }) => {
          setAccessToken(data.accessToken);
          setExpiresIn(data.expiresIn);
        })
        .catch((error) => {
          // @ts-ignore
          window.location = "/login";
        });
    }, (expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [refreshToken, expiresIn]);

  return accessToken;
};
