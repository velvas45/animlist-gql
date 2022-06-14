import { Routes, Route } from "react-router-dom";

import AnimePreview from "components/anime-preview/AnimePreview";

const AnimeDetail = () => {
  return (
    <Routes>
      <Route path=":animeId" element={<AnimePreview />} />
    </Routes>
  );
};

export default AnimeDetail;
