import { Routes, Route } from "react-router-dom";

import CollectionPreview from "components/collection-preview/CollectionPreview";

const CollectionDetail = () => {
  return (
    <Routes>
      <Route path=":collectionId" element={<CollectionPreview />} />
    </Routes>
  );
};

export default CollectionDetail;
