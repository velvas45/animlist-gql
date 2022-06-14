import { createContext, useState, useEffect } from "react";

export const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

const addNewCollection = (collectionItems, collectionToAdd) => {
  let errObj;

  if (specialChars.test(collectionToAdd.name_collection)) {
    errObj = {
      has: true,
      response: "Field tidak boleh ada special character!",
    };
    return { data: collectionItems, error: errObj };
  } else if (
    collectionToAdd.name_collection.trim() === "" ||
    !collectionToAdd.name_collection
  ) {
    errObj = {
      has: true,
      response: "Field tidak boleh kosong!",
    };
    return { data: collectionItems, error: errObj };
  }
  // check apakah collection sudah ada atau tidak
  const existingCollection = collectionItems.find(
    (collectionItem) =>
      collectionItem.name_collection === collectionToAdd.name_collection
  );

  if (existingCollection) {
    errObj = {
      has: true,
      response: "Data tidak boleh sama!",
    };
    return { data: collectionItems, error: errObj };
  }

  const new_collection = [...collectionItems, { ...collectionToAdd }];
  errObj = { has: false, response: "" };

  return { data: new_collection, error: errObj };
};

const removeCollection = (collectionItems, collectionToRemove) => {
  const existingCollection = collectionItems.find(
    (collectionItem) =>
      collectionItem.id_collection === collectionToRemove.id_collection
  );
  if (existingCollection) {
    return collectionItems.filter(
      (collectionItem) =>
        collectionItem.id_collection !== collectionToRemove.id_collection
    );
  } else {
    return collectionItems;
  }
};

const editCollection = (collectionItems, collectionToEdit) => {
  const existingCollection = collectionItems.find(
    (collectionItem) =>
      collectionItem.name_collection === collectionToEdit.name_collection
  );

  if (existingCollection) {
    return {
      data: collectionItems,
      error: { has: true, response: "Data tidak boleh sama!" },
    };
  }

  if (
    collectionToEdit.name_collection.trim() === "" ||
    !collectionToEdit.name_collection
  ) {
    const errObj = {
      has: true,
      response: "Field tidak boleh kosong!",
    };
    return { data: collectionItems, error: errObj };
  }

  const updated_collection = collectionItems.map((collectionItem) => {
    if (collectionItem.id_collection === collectionToEdit.id_collection) {
      return {
        ...collectionItem,
        name_collection: collectionToEdit.name_collection,
      };
    }
    return collectionItem;
  });

  return {
    data: updated_collection,
    error: { has: false, response: "" },
  };
};

const addMovieToCollection = (
  collectionItems,
  collectionSelectedItem,
  movieItem
) => {
  let errorObj = {
    has: false,
    response: "",
  };
  if (!collectionSelectedItem.name_collection) {
    errorObj = {
      has: true,
      response: "Field collection list tidak boleh kosong!",
    };
    return { data: collectionItems, error: errorObj };
  }
  collectionItems.forEach((collectionItem) => {
    if (collectionItem.id_collection === collectionSelectedItem.id_collection) {
      const my_items = collectionItem.items;
      if (my_items.length === 0) {
        my_items.push(movieItem);
      } else {
        const existingMovieItem = my_items.find((my_item) => {
          if (my_item.Media.id === movieItem.Media.id) {
            return true;
          }

          return false;
        });

        if (existingMovieItem) {
          errorObj = {
            has: true,
            response: `Movie ini sudah terdapat pada collection ${collectionItem.name_collection}!`,
          };
        } else {
          my_items.push(movieItem);
          errorObj = {
            has: false,
            response: "",
          };
        }
      }
    }
  });
  return { data: collectionItems, error: errorObj };
};

const removeMovieFromCollection = (
  collectionItems,
  collectionSelectedItem,
  movieItem
) => {
  const existingCollection = collectionItems.find(
    (collectionItem) =>
      collectionItem.id_collection === collectionSelectedItem.id_collection
  );

  if (existingCollection) {
    const new_exist_data = existingCollection.items.filter(
      (item) => item.Media.id !== movieItem.id
    );

    existingCollection.items = new_exist_data;
  }
  return collectionItems.map((collectionItem) => {
    if (collectionItem.id_collection === existingCollection.id_collection) {
      return {
        ...existingCollection,
      };
    } else {
      return {
        ...collectionItem,
      };
    }
  });
};

export const CollectionContext = createContext({
  collectionItems: [],
  addCollection: () => {},
  removeCollectionItem: () => {},
  editCollectionItem: () => {},
  addedMovieToCollection: () => {},
  removeMovieCollection: () => {},
});

export const CollectionProvider = ({ children }) => {
  const [collectionItems, setCollectionItems] = useState([]);
  const [errorObj, setErrorObj] = useState({
    has: false,
    response: "",
  });

  const addCollection = (collectionToAdd) => {
    const { data, error } = addNewCollection(collectionItems, collectionToAdd);
    setCollectionItems(data);
    setErrorObj(error);

    window.localStorage.setItem("collection_user", JSON.stringify(data));
  };
  const removeCollectionItem = (collectionToRemove) => {
    const data = removeCollection(collectionItems, collectionToRemove);
    setCollectionItems(data);
    window.localStorage.setItem("collection_user", JSON.stringify(data));
  };
  const editCollectionItem = (collectionToEdit) => {
    const { data, error } = editCollection(collectionItems, collectionToEdit);
    setCollectionItems(data);
    setErrorObj(error);
    window.localStorage.setItem("collection_user", JSON.stringify(data));
  };
  const addedMovieToCollection = ({ collectionItemSelected, movieItem }) => {
    const { data, error } = addMovieToCollection(
      collectionItems,
      collectionItemSelected,
      movieItem
    );
    setCollectionItems(data);
    setErrorObj(error);
    window.localStorage.setItem("collection_user", JSON.stringify(data));
  };

  const removeMovieCollection = ({ collectionItemSelected, movieItem }) => {
    const data = removeMovieFromCollection(
      collectionItems,
      collectionItemSelected,
      movieItem
    );
    setCollectionItems(data);
    window.localStorage.setItem("collection_user", JSON.stringify(data));
  };

  const value = {
    collectionItems,
    addCollection,
    removeCollectionItem,
    editCollectionItem,
    addedMovieToCollection,
    removeMovieCollection,
    errorObj,
    setErrorObj,
  };

  useEffect(() => {
    if (JSON.parse(window.localStorage.getItem("collection_user"))) {
      const data = JSON.parse(window.localStorage.getItem("collection_user"));
      setCollectionItems(data);
    }
  }, []);

  return (
    <CollectionContext.Provider value={value}>
      {children}
    </CollectionContext.Provider>
  );
};
