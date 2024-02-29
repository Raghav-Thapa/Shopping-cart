import { useEffect, useState } from "react";

const useProduct = (path) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com${path}`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setData(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [path]);

  return { data, error, loading };
};

export default useProduct;


export const useProductCart = (ids) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all(
      ids.map((id) =>
        fetch(`https://fakestoreapi.com/products/${id}`).then((response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }
          return response.json();
        })
      )
    )
      .then((response) => setData(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [ids]);

  return { data, error, loading };
};