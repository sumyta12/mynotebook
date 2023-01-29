//ref : https://www.robinwieruch.de/react-hooks-fetch-data/
import { useState, useEffect } from "react";
const Example = () => {
  const [user, setUser] = useState("https://api.github.com/users/sumyta12");
  const [b, stb] = useState({});
  useEffect(() => {
    setapi();
  }, []);
  async function setapi() {
    const fetchingdata = await fetch(user);
    const data = await fetchingdata.json();
    setUser(data);
  }
  //question : why this way setuser not updated directly
  return (
    <div>
      <h1>{user?.name}</h1>
      <button
        onClick={() => {
          setUser("https://api.github.com/users/anyone");
        }}
      >
        {" "}
        click here for update url
      </button>
    </div>
  );
};
export default Example;
