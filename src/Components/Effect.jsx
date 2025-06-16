import { useEffect, useState } from "react";

const Effect = () => {
  const [list, setList] = useState(["One", "Two", "Three", "Four", "Five"]);
  let [counter, setCounter] = useState(0);
  const [arrayOfObjects, setArrayOfObjects] = useState([]);
  const [res, setResult] = useState([]);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let data = await fetch("https://fakestoreapi.com/products");
      if (data.status === 200) {
        let result = await data.json();
        setArrayOfObjects(result);
        setResult(result);
      } else {
        setError("There is some error");
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log(filters);
  }, [counter]);

  const filterProducts = (value) => {
    let filteredArr = arrayOfObjects.filter((product) => {
      return product.category === value;
    });
    setArrayOfObjects(filteredArr);
  };

  const updateFilters = (value) => {
    setCounter(counter + 1);
    if (filters.includes(value)) {
      let f = filters;
      let pos = f.indexOf(value);
      f.splice(pos, 1);
      setFilters(f);
    } else {
      let f = filters;
      f.push(value);
      setFilters(f);
    }

    let result = res.filter((item) => filters.includes(item.category));
    setArrayOfObjects(result);

    console.log(filters);
  };

  const viewDetails = async (id) => {
    console.log("https://fakestoreapi.com/products/" + id);
    let data = await fetch("https://fakestoreapi.com/products/" + id);
    if (data.status === 200) {
      let result = await data.json();
      console.log(result);
    } else {
      setError("There is some error");
    }
  };

  return (
    <>
      <h2>{error}</h2>
      <input
        type="checkbox"
        value="jewelery"
        onChange={(e) => updateFilters(e.target.value)}
      />{" "}
      Jewellary
      <input
        type="checkbox"
        value="men's clothing"
        onChange={(e) => updateFilters(e.target.value)}
      />{" "}
      Men's Clothing
      <input
        type="checkbox"
        value="women's clothing"
        onChange={(e) => updateFilters(e.target.value)}
      />{" "}
      Women's Clothing
      <input
        type="checkbox"
        value="electronics"
        onChange={(e) => updateFilters(e.target.value)}
      />{" "}
      Electronics
      <div className="container">
        {arrayOfObjects.map((obj) => {
          const { category, image, id } = obj;
          return (
            <div className="product">
              <h3>{category}</h3>
              <img src={image} alt="sasasa" width="200px" height="200px" />
              <button onClick={() => viewDetails(id)}>View More</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Effect;
