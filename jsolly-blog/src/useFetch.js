import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  //Runs with every render
  useEffect(() => {
    const abortContr = new AbortController();
    console.log("UseEffect ran!");
    fetch(url, { signal: abortContr.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("I had trouble fetching that data!");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted!");
        } else {
          setError(err.message);
          setIsPending(false);
        }
      });
    return () => abortContr.abort();
  }, [url]);
  // passing an empty dependency array as 2nd arument makes it so useEffect only runs on first render.
  return { data, isPending, error };
};

export default useFetch;
