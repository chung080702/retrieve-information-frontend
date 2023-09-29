
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPost from "./pages/ListPost";
import Search from "./pages/Search";
import Post from "./pages/Post";


function App() {

  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Search />} />
          <Route exact path="/post/:postId" element={<Post />} />
          <Route exact path="/search/msg/:msg" element={<ListPost />} />
          <Route exact path="/search/msg/:msg/pageNumber/:pageNumber" element={<ListPost />} />
        </Routes>
      </BrowserRouter>




    </div>
  );
}

export default App;
