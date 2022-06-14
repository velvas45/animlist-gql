import React, { useState, useContext, useEffect } from "react";
import {
  Section,
  SectionTitle,
  ButtonAdd,
  SectionContent,
  TemplateNoData,
  FormTag,
  LabelTag,
  InputTag,
  AlertDiv,
} from "./collection.styles";

import Card from "components/card/Card";
import Modal from "components/modal/Modal";
import CollectionList from "components/collection-list/CollectionList";
import NoData from "assets/no-data.svg";
import { BsPlus } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CollectionContext } from "contexts/collection.context";

const Collection = () => {
  const {
    collectionItems,
    errorObj,
    addCollection,
    removeCollectionItem,
    editCollectionItem,
    setErrorObj,
  } = useContext(CollectionContext);
  const [showModal, setShowModal] = useState({
    add: false,
    remove: false,
    edit: false,
  });
  const [collectionName, setCollectionName] = useState("");
  const [collectionSelected, setCollectionSelected] = useState({});
  const [visibleAlert, setVisibleAlert] = useState(false);

  const onInputChange = (e) => {
    setCollectionName(e.target.value);
  };

  const onModalClose = () => {
    setCollectionName("");
    setShowModal(() => ({
      add: false,
      remove: false,
      edit: false,
    }));
  };

  const onSubmit = () => {
    const payload_data = {
      name_collection: collectionName,
      id_collection: new Date().toString(),
      items: [],
    };
    addCollection(payload_data);

    setShowModal(() => ({
      add: false,
      remove: false,
      edit: false,
    }));
    setCollectionName("");

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const onRemove = () => {
    removeCollectionItem(collectionSelected);

    setShowModal(() => ({
      add: false,
      remove: false,
      edit: false,
    }));
    setCollectionSelected({});
  };
  const onEdit = () => {
    const payload_data = {
      ...collectionSelected,
      name_collection: collectionName,
    };

    editCollectionItem(payload_data);

    setShowModal(() => ({
      add: false,
      remove: false,
      edit: false,
    }));
    setCollectionName("");
    setCollectionSelected({});
  };
  const onAlertClose = () => {
    setErrorObj({
      has: false,
      response: "",
    });

    setVisibleAlert(false);
  };

  const selectedCollectionItem = (data, type) => {
    setShowModal((showModal) => ({ ...showModal, [type]: true }));
    setCollectionSelected(data);
    if (type === "edit") setCollectionName(data.name_collection);
  };

  useEffect(() => {
    setVisibleAlert(errorObj.has);
  }, [errorObj]);

  useEffect(() => {
    setVisibleAlert(errorObj.has);
  }, [errorObj]);

  return (
    <Section>
      {/* Alert */}
      {visibleAlert && (
        <AlertDiv status="error">
          <p>{errorObj?.response}</p>
          <AiOutlineCloseCircle onClick={() => onAlertClose()} />
        </AlertDiv>
      )}
      <Card>
        <SectionTitle>
          <h3>Collection List</h3>

          {collectionItems?.length > 0 && (
            <ButtonAdd
              onClick={() =>
                setShowModal((showModal) => ({ ...showModal, add: true }))
              }
            >
              <BsPlus />
            </ButtonAdd>
          )}
        </SectionTitle>

        <SectionContent>
          {collectionItems?.length > 0 ? (
            collectionItems.map((collectionData, idx) => (
              <CollectionList
                key={idx}
                {...collectionData}
                onClickIcon={selectedCollectionItem}
              />
            ))
          ) : (
            <>
              {/* jika tidak ada data */}
              <TemplateNoData>
                <img src={NoData} alt="no-data" />
                <h3>You Have No Collection Yet</h3>
                <button
                  onClick={() =>
                    setShowModal((showModal) => ({ ...showModal, add: true }))
                  }
                >
                  Create New
                </button>
              </TemplateNoData>
            </>
          )}
        </SectionContent>
      </Card>

      {/* Add Collection */}
      <Modal
        show={showModal.add}
        title="Add New Collection"
        haveFooter
        onClose={onModalClose}
        onSubmit={onSubmit}
        btnTitle="Add"
      >
        <FormTag>
          <InputTag
            type="text"
            id="add_collection"
            name="add_collection"
            value={collectionName}
            autocomplete="off"
            placeholder=" "
            onChange={onInputChange}
          />
          <LabelTag htmlFor="add_collection">Name</LabelTag>
        </FormTag>
      </Modal>

      {/* remove Collection */}
      <Modal
        show={showModal.remove}
        title="Remove Collection"
        haveFooter
        onClose={onModalClose}
        onSubmit={onRemove}
        btnTitle="Remove"
      >
        <div>
          <p>
            Are you sure want to delete {collectionSelected.name_collection}{" "}
            collection?
          </p>
        </div>
      </Modal>

      {/* edit Collection */}
      <Modal
        show={showModal.edit}
        title="Edit Collection"
        haveFooter
        onClose={onModalClose}
        onSubmit={onEdit}
        btnTitle="Update Data"
      >
        <div>
          <FormTag>
            <InputTag
              type="text"
              id="edit_collection"
              name="edit_collection"
              value={collectionName}
              autocomplete="off"
              placeholder=" "
              onChange={onInputChange}
            />
            <LabelTag htmlFor="edit_collection">Name</LabelTag>
          </FormTag>
        </div>
      </Modal>
    </Section>
  );
};

export default Collection;
