"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://test-nextjsinweb123.vercel.app/api');
      const result = await response.json();
      setData(result);
      console.log(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};