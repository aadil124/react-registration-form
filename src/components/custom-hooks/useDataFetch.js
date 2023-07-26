import axios from "axios";
import React, { useEffect, useState } from "react";

const useDataFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError("Error in fetching or Loading data");
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useDataFetch;
