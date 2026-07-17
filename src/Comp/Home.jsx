import React, { useEffect, useState } from "react";
import HomeProductDetail from "./HomeProductDetail";
import Hero from "./Hero";
import Search from "./Search";
import axios from "axios";

const Home = () => {
  const [resp, setResp] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const dataa = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
        // const result = await data.json();
        setResp(dataa.data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  const displayData =
    search === ""
      ? resp
      : resp.filter((item) =>
          item.category.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <Hero />

      <div className="flex flex-wrap gap-1 justify-center">
        {displayData.map((x) => (
          <HomeProductDetail key={x.id} prod={x.id}>
            <div className="flex justify-center">
              <img
                src={x.image}
                alt={x.title}
                className="h-40 object-contain"
              />
            </div>

            <ul>
              <li className="font-semibold">
                {x.title.slice(0, 36)}...
              </li>

              <br />

              <li>
                ${x.price} &nbsp;&nbsp;
                <del>
                  $
                  {(
                    x.price +
                    Math.floor(Math.random() * 100) +
                    1
                  ).toFixed(2)}
                </del>
              </li>
            </ul>

            <br />
          </HomeProductDetail>
        ))}
      </div>
    </>
  );
};

export default Home;