import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage = () => {
  const [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setpage] = useState(1);
  let [currenSearch, setCurrenSearch] = useState("");
  const auth = "cqMJBiJvTxB8QpmEzgW4OKtL0g2itDW2GZJxr6Z420YafSK6q72Rf7W8";
  const initialUrl = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchUrl = `https://api.pexels.com/v1/search?query=${currenSearch}&per_page=15&page=1`;
  const search = async (url) => {
    setpage(2);
    const dataFecth = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataFecth.json();
    setData(parsedData.photos);
  };

  const morepict = async () => {
    let newUrl;

    if (input === "") {
      newUrl = `https://api.pexels.com/v1/curated?per_page=15&page=${page}`;
    } else {
      newUrl = `https://api.pexels.com/v1/search?query=${currenSearch}&per_page=15&page=${page}`;
    }
    setpage(page + 1);
    const dataFecth = await fetch(newUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataFecth.json();
    setData(data.concat(parsedData.photos));
  };

  useEffect(() => {
    if (currenSearch == "") {
      search(initialUrl);
    } else {
      search(searchUrl);
    }
  }, [currenSearch]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          setCurrenSearch(input);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="morepicture">
        <button onClick={morepict}>Load more</button>
      </div>
    </div>
  );
};

export default Homepage;
