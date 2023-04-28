import { useState, useEffect } from 'react';

const GetQuote = () => {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const category = 'happiness';
      const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
      const headers = { 'X-Api-Key': 'OerwG+IRankwPJVvOobKeA==6C0spndifKZUtytk' };
      const options = {
        method: 'GET',
        headers,
        contentType: 'application/json',
      };
      setIsLoading(true);
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (hasError) return <div>Something went wrong!</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data.map((item) => (
        <div className="quote" key={item.id}>{item.quote}</div>
      ))}
    </div>
  );
};

export default GetQuote;
