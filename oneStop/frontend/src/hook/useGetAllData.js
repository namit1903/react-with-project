import { useState, useEffect } from 'react';

const useGetAllData = () => {
  const [products, setProducts] = useState([]); // Initialize products as an empty array
  const [loading, setLoading] = useState(true); // Initialize loading state as true
  const [error, setError] = useState(null); // Initialize error state as null
  console.log("DATA IN CUSTOM HOOK")
  const getData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data.products); // Update products state with fetched data
    } catch (error) {
      setError(error.message); // Update error state if an error occurs
    } finally {
      setLoading(false); // Set loading to false after the fetch operation completes
    }
  };

  useEffect(() => {
    console.log("useEffect DATA IN CUSTOM HOOK")
    getData(); // Call getData when the component mounts
  }, []); 
  console.log("in custom hook products",products)

  return { products, loading, error }; // Return current state values
};

export default useGetAllData;
