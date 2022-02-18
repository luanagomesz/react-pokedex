import { useState, useEffect } from "react";
import { API } from "../api";

const useGet = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get(url).then((res) => {
      setData(res.data);
    });
  }, [url]);

  return {
    data,
  };
};

export default useGet;
