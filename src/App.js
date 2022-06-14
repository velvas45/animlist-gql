import { Routes, Route } from "react-router-dom";
import Home from "pages/home/Home";
import AnimeDetail from "pages/anime-detail/AnimeDetail";
import CollectionDetail from "pages/collection-detail/CollectionDetail";
import Collection from "pages/collection/Collection";
import Navigation from "pages/navigation/Navigation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="anime-detail/*" element={<AnimeDetail />} />
        <Route path="collection-detail/*" element={<CollectionDetail />} />
        <Route path="my-collection" element={<Collection />} />
      </Route>
    </Routes>
  );
};

export default App;
