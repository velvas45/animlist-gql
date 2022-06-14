import { useNavigate } from "react-router-dom";

import {
  DirectoryItemContainer,
  ContentText,
  ContextDescription,
  ButtonRemove,
  // ContainerLove,
} from "./list.styles";

import { FiTrash2 } from "react-icons/fi";
import Image from "components/image/Image";

const List = ({ data, isAnimated = false, onRemove, removeButton = false }) => {
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(`/anime-detail/${data.id}`);

  return (
    <DirectoryItemContainer>
      <Image
        onClick={onNavigateHandler}
        isAnimated={isAnimated}
        src={data?.coverImage?.large}
        alt={data?.title?.romaji}
      />

      <ContentText>
        <h2>{data?.title?.romaji}</h2>
        <ContextDescription>
          <p>Season: {data?.season}</p>
          <p>Status: {data?.status}</p>
        </ContextDescription>

        {removeButton && (
          <ButtonRemove onClick={() => onRemove(data)}>
            <FiTrash2 />
            Delete
          </ButtonRemove>
        )}
      </ContentText>
    </DirectoryItemContainer>
  );
};

export default List;
