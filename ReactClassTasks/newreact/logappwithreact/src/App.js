import { Route, Routes } from "react-router-dom";
import Header from "./layouts/header/header";
import BlogDetail from "./pages/blog-detail/detail";
import HomeBlog from "./pages/home-blog/home";
import NewBlog from "./pages/new-blog/new-blog";
import NotFound from "./pages/not-found";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<HomeBlog />} />
      <Route path="/new-blog" element={<NewBlog />} />
      <Route path="/:id" element={<BlogDetail />} />
      <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
