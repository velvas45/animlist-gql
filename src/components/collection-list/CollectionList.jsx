import React from "react";
import { useNavigate } from "react-router-dom";

import { CollectionListContainer } from "./collection-list.styles";

import { BiEdit, BiTrash } from "react-icons/bi";

const CollectionList = ({
  name_collection,
  id_collection,
  items,
  onClickIcon,
}) => {
  const navigate = useNavigate();

  const onNavigateHandler = () =>
    navigate(`/collection-detail/${btoa(id_collection)}`);
  return (
    <>
      <CollectionListContainer lastItem>
        <div className="collection__title" onClick={onNavigateHandler}>
          {name_collection}{" "}
          <span className="collection__badge-title">
            {items.length > 99 ? "99+" : items.length}
          </span>{" "}
        </div>

        <div className="button__cta">
          <span
            className="button__cta-edit"
            onClick={() =>
              onClickIcon({ name_collection, id_collection }, "edit")
            }
          >
            <BiEdit />
          </span>
          <span
            className="button__cta-remove"
            onClick={() =>
              onClickIcon({ name_collection, id_collection }, "remove")
            }
          >
            <BiTrash />
          </span>
        </div>
      </CollectionListContainer>
    </>
  );
};

export default CollectionList;
