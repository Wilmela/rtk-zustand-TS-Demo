import { Provider } from "react-redux";
import store from "./redux/store";
import Books from "./components/Books";
import Pen from "./components/Pen";
import Posts from "./components/Posts";

import { useBooks } from "./zustore";

const App = () => {
  const { zOrderBook, zRestockBooks, numberOfBooks, zCourses } =
    useBooks();
  return (
    <Provider store={store}>
      <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
        <div>
          <h1>React-ReduxToolkit Basics</h1>
          <Books />
          <Pen />
          <Posts />
         
        </div>
        <div>
          <h1>Hello from Zustand</h1>
          <p>Number of Books: {numberOfBooks}</p>
          <button type="button" onClick={() => zOrderBook()}>
            Order
          </button>
          <button type="button" onClick={() => zRestockBooks(5)}>
            Restock
          </button>
          <p>{zCourses()}</p>
         
        </div>
      </div>
    </Provider>
  );
};

export default App;
