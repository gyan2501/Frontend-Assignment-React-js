import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const intialGender = searchParams.getAll("gender");
  const intialAvailable = searchParams.getAll("available");
  const intialDomain = searchParams.getAll("domain");

  const [gender, setGender] = useState(intialGender || []);
  const [available, setAvailable] = useState(intialAvailable || []);
  const [domain, setDomain] = useState(intialDomain || []);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "available") {
      if (value === "true") {
        setAvailable(checked ? ["true"] : []);
      } else if (value === "false") {
        setAvailable(checked ? ["false"] : []);
      }
    }
    if (name === "domain") {
      let newDomain = [...domain];
      if (newDomain.includes(value)) {
        newDomain = newDomain.filter((el) => el !== value);
      } else {
        newDomain.push(value);
      }
      setDomain(newDomain);
    }
    if (name === "gender") {
      let newGender = [...gender];
      if (newGender.includes(value)) {
        newGender = newGender.filter((el) => el !== value);
      } else {
        newGender.push(value);
      }
      setGender(newGender);
    }
  };

  useEffect(() => {
    let params = {
      gender,
      available,
      domain,
    };

    setSearchParams(params);
  }, [gender, available, domain]);

  return (
    <div id="sidebarcontainer">
      <h2>Filter Section</h2>
      <div id="gender">
        <h3>Gender</h3>
        <input
          type="checkbox"
          value={"Male"}
          name="gender"
          onChange={handleChange}
          checked={gender.includes("Male")}
        />
        <label>Male</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"Female"}
          name="gender"
          onChange={handleChange}
          checked={gender.includes("Female")}
        />
        <label>Female</label>
      </div>
      <div>
        <div>
          <input
            type="checkbox"
            value={"Agender"}
            name="gender"
            onChange={handleChange}
            checked={gender.includes("Agender")}
          />
          <label>Agender</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={"Bigender"}
            name="gender"
            onChange={handleChange}
            checked={gender.includes("Bigender")}
          />
          <label>Bigender</label>
        </div>
      </div>

      <div id="available">
        <h3>Availability</h3>
        <div>
          <input
            type="checkbox"
            value="true"
            name="available"
            onChange={handleChange}
            checked={available.includes("true")}
          />
          <label>Available</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="false"
            name="available"
            onChange={handleChange}
            checked={available.includes("false")}
          />
          <label>Not Available</label>
        </div>
      </div>

      <div id="domain">
        <h3>Domain</h3>
        <div>
          <input
            type="checkbox"
            value={"Sales"}
            name="domain"
            onChange={handleChange}
            checked={domain.includes("Sales")}
          />
          <label>Sales</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={"Finance"}
            name="domain"
            onChange={handleChange}
            checked={domain.includes("Finance")}
          />
          <label>Finance</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={"Marketing"}
            name="domain"
            onChange={handleChange}
            checked={domain.includes("Marketing")}
          />
          <label>Marketing</label>
        </div>

        <div>
          <input
            type="checkbox"
            value={"IT"}
            name="domain"
            onChange={handleChange}
            checked={domain.includes("IT")}
          />
          <label>IT</label>
        </div>

        <div>
          <input
            type="checkbox"
            value={"UI Designing"}
            name="domain"
            onChange={handleChange}
            checked={domain.includes("UI Designing")}
          />
          <label>UI Designing</label>
        </div>

        <div>
          <input
            type="checkbox"
            value={"Management"}
            name="domain"
            onChange={handleChange}
            checked={domain.includes("Management")}
          />
          <label>Management</label>
        </div>
        <Link to="/team">
          <button>Team</button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
