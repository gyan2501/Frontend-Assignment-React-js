import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/users/Action";
import Card from "../components/Card";
import "./Home.css";
import Pagination from "../components/Pagination";
import { useLocation, useSearchParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
const Home = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.userReducer);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  // console.log(location);

  const handleSearch =(e)=>{
    setQuery(e.target.value)
    // console.log(query);
  }

  let obj = {
    params: {
      gender: searchParams.getAll("gender"),
      available: searchParams.getAll("available"),
      domain: searchParams.getAll("domain"),
      q: query,
    },
  };
  useEffect(() => {
    dispatch(getUsers(obj, page,query));
  }, [location.search, page,query]);

  return (
    <>
      <Navbar handleSearch={handleSearch} />
      <div id="container">
        <div id="filter">
          <Sidebar />
        </div>
        <div id="cardcontainer">
          {users?.map((el) => (
            <Card {...el} key={el.id} />
          ))}
        </div>
      </div>
      <Pagination current={page} onChange={(i) => setPage(i)} />
    </>
  );
};

export default Home;
