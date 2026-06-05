import {
  useEffect,
  useState,
} from "react";

const useFetch = (
  fetchFunction
) => {
  const [data, setData] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);

      const response =
        await fetchFunction();

      setData(response.data);

      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    setData,
    loading,
    error,
    refetch: fetchData,
  };
};

export default useFetch;