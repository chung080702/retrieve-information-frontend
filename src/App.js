
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Post from "./pages/Post";
import Home from "./pages/Home";


function App() {

  return (
    <div class="container">
      <div class="glass-container">
        <nav class="navbar">
          <div class="logo"><a href="#">Retrieve Information</a></div>
          <ul class="nav-links">
            <li class="nav-link"><a href="/">Home</a></li>
            <li class="nav-link"><a href="/search">Search</a></li>
          </ul>
        </nav>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} ></Route>
            <Route exact path="/search" element={<Search />} />
            <Route exact path="/search/msg/:msg" element={<Search />} />
            <Route exact path="/search/msg/:msg/page/:pageNumber" element={<Search />} />
            <Route exact path="/post/:postId" element={<Post />} />
          </Routes>
        </BrowserRouter>
      </div>

    </div>

  );
}

export default App;
