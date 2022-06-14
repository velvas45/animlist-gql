import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CollectionContext } from "contexts/collection.context";

import { Section, SectionContent, SectionTitle } from "pages/home/home.styles";

import Card from "components/card/Card";
import List from "components/list-item/List";
import Modal from "components/modal/Modal";

const CollectionPreview = () => {
  const { collectionItems, removeMovieCollection } =
    useContext(CollectionContext);
  const { collectionId } = useParams();

  const [collectionItem, setCollectionItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [movieSelected, setMovieSelected] = useState(null);

  const onRemove = () => {
    const payload_data = {
      collectionItemSelected: collectionItem,
      movieItem: movieSelected,
    };
    removeMovieCollection(payload_data);
    setShowModal(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const onOpenModal = (data) => {
    setShowModal(true);
    setMovieSelected(data);
  };

  useEffect(() => {
    if (collectionId) {
      const id_from_params = atob(collectionId);
      const selectedItem = collectionItems.find(
        (collectionItem) => collectionItem.id_collection === id_from_params
      );

      setCollectionItem(selectedItem);
    }
  }, [collectionItems, collectionId]);

  return (
    <>
      <Section>
        <Card>
          <SectionTitle>
            <h3>{collectionItem?.name_collection}</h3>
          </SectionTitle>

          <SectionContent>
            {collectionItem?.items?.length > 0 &&
              collectionItem?.items.map((data, idx) => (
                <List
                  removeButton
                  onRemove={onOpenModal}
                  isAnimated
                  data={data.Media}
                  key={idx}
                />
              ))}
          </SectionContent>
        </Card>
        {/* remove Collection */}
        <Modal
          show={showModal}
          title="Remove movie from collection"
          haveFooter
          onClose={() => setShowModal(false)}
          onSubmit={onRemove}
          btnTitle="Remove"
        >
          <div>
            <p>
              Are you sure want to delete {movieSelected?.title?.romaji}
              collection?
            </p>
          </div>
        </Modal>
      </Section>
    </>
  );
};

export default CollectionPreview;
