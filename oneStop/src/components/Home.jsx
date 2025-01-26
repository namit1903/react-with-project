import React, { useContext, useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import ShimmerUi from './ShimmerUi';
import useGetAllData from '../hook/useGetAllData';
import ThemeContext from '../Context/ThemeContext';

function Home() {
  console.log("home rendered...");
  let [ProductArray, setProductArray] = useState([]);
  const [query, setQuery] = useState(''); // take the search input
  const [result, setResult] = useState([]);
  const [flag, setFlag] = useState(false); // Flag for filtering results
  let { theme, handleTheme } = useContext(ThemeContext);

  // Fetch data
  let { products, loading, error } = useGetAllData();
  console.log("get..", products);
  console.log("get array product", ProductArray);

  // Update ProductArray when products change
  useEffect(() => {
    if (products) {
      setProductArray(products);
    }
  }, [products]);

  // Handle search functionality
  useEffect(() => {
    if (query.trim() !== '') {
      const filtered = products.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setResult(filtered);
    } else {
      setResult([]);
    }
  }, [query, products]);

  function topRatedProduct() {
    let data = products.filter(item => item.rating >= 4.5);
    setProductArray(data);
  }

  function filterProduct(e, proName) {
    e.target.classList.add('btn-active');
    let data = products.filter(item => item.category === proName);
    setProductArray(data);
  }

  function submitSearch(e) {
    e.preventDefault();
    let value = e.target[0].value;
    let data = products.filter(product =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setProductArray(data);
  }

  let darkTheme = `bg-black border-[5px] border-red-800`;
  let lightTheme = `bg-white border-[5px] border-red-800`;

  return (
    ProductArray.length === 0 ? (
      <div className={theme === 'light' ? lightTheme : darkTheme}>
        <ShimmerUi />
      </div>
    ) : (
      <div className={theme === 'light' ? lightTheme : darkTheme}>
        <div className="filter flex justify-evenly">
          <div className="options bg-white flex justify-between">
            <button className="btn btn-xs btn-primary" onClick={topRatedProduct}>
              Top-Rated
            </button>
            <button className="btn btn-xs btn-primary" onClick={(e) => filterProduct(e, "beauty")}>
              Beauty
            </button>
            <div className="search flex flex-col relative">
              <form onSubmit={submitSearch}>
                <input
                  type="text"
                  placeholder="hunt your stuff...."
                  className="border-2"
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button className="btn btn-xs btn-secondary">hunt items</button>
              </form>
              {!flag && (
                <ul className="absolute top-10">
                  {result.map((item, index) => (
                    <li key={index}>
                      <button
                        className="hover:bg-white"
                        onClick={() => setFlag(true)}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button className="btn btn-xs btn-primary" onClick={(e) => filterProduct(e, "groceries")}>
              Groceries
            </button>
            <button className="btn btn-xs btn-primary" onClick={(e) => filterProduct(e, "fragrances")}>
              Fragrances
            </button>
          </div>
        </div>
        <div className="item-container flex flex-wrap gap-3">
          {ProductArray.map((obj) => (
            <ItemCard obj={obj} key={`${Date.now()}_${obj.id}`} />
          ))}
        </div>
      </div>
    )
  );
}

export default Home;
