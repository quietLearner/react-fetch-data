import Header from "./Header";
import { useEffect, useState } from "react";
import Content from "./Content";
import LoadingWarning from "./LoadingWarning";

function App() {
  //   /posts	100 posts
  // /comments	500 comments
  // /users	10 users

  const menus = ["users", "comments", "posts"];

  const API_URL = "https://jsonplaceholder.typicode.com/";

  const [items, setItems] = useState([]);
  const [menuSelected, setMenuSelected] = useState("users");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchItems = async () => {
    try {
      const response = await fetch(`${API_URL}${menuSelected}`); //GET http://localhost:3500/itemss 404 (Not Found)
      if (!response.ok) {
        throw Error("Did not receive expected data");
      }
      const listItems = await response.json(); //Unexpected token 'N', "Not Found" is not valid JSON

      // listItems.forEach((item) => {
      //   for (const [key, value] of Object.entries(item)) {
      //     console.log(`${key}: ${JSON.stringify(value)}`);
      //   }
      // });

      //console.log(listItems);
      setItems(listItems);
      setFetchError(null);
    } catch (err) {
      //console.error(err.stack);
      // console.error(err.message);
      setFetchError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    //simulate time deplay to get data from outside api.
    setTimeout(fetchItems, 2000);
    //fetchItems();
  }, [menuSelected]); // whenever menuSelected changes, run this code

  return (
    <div className="App">
      <Header
        menus={menus}
        setMenuSelected={setMenuSelected}
        menuSelected={menuSelected}
        setIsLoading={setIsLoading}
      ></Header>
      <main>
        <LoadingWarning isLoading={isLoading}></LoadingWarning>
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content items={items}></Content>}
      </main>
    </div>
  );
}

export default App;
