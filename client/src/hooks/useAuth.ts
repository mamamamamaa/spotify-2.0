import { useEffect, useState } from "react";
import axios from "axios";

const { REACT_APP_LOCAL_SEVER_LOGIN_ADDRESS: address = "/" } = process.env;

export const useAuth = (code: string) => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expireIn, setExpireIn] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await axios.post(address, { code });
      console.log(data);
    };

    getData();
  }, [code]);
};
