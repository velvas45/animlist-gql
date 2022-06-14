import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Avatar from "react-avatar";
import Select from "react-select";

import { gql, useQuery } from "@apollo/client";
import Spinner from "components/spinner/Spinner";
import Modal from "components/modal/Modal";
import {
  FormTag,
  InputTag,
  LabelTag,
  AlertDiv,
  TemplateNoData,
} from "pages/collection/collection.styles";

import {
  Section,
  SectionDetail,
  SectionRating,
  SectionWrapper,
  AddCollectionDiv,
} from "./anime-preview.styles";
import NoData from "assets/no-data.svg";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { CollectionContext, specialChars } from "contexts/collection.context";

const GET_ANIME_DETAIL = gql`
  query ($id: Int) {
    Media(id: $id) {
      id
      title {
        romaji
        english
        native
        userPreferred
      }
      bannerImage
      coverImage {
        extraLarge
        large
        medium
      }
      type
      episodes
      duration
      season
      status
      seasonYear
      genres
      popularity
      averageScore
      startDate {
        year
        month
        day
      }
      studios {
        nodes {
          id
          name
        }
      }
      characters(sort: ID, role: MAIN) {
        nodes {
          name {
            full
          }
          image {
            large
            medium
          }
        }
      }
      description(asHtml: false)
    }
  }
`;

const AnimePreview = () => {
  const {
    collectionItems,
    errorObj,
    addCollection,
    addedMovieToCollection,
    setErrorObj,
  } = useContext(CollectionContext);

  const { animeId } = useParams();
  const { loading, data } = useQuery(GET_ANIME_DETAIL, {
    variables: {
      id: animeId,
    },
  });

  const [movie, setMovie] = useState({});
  const [option, setOption] = useState([]);
  const [showModal, setShowModal] = useState({
    addCollection: false,
    addMovie: false,
  });
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [collectionName, setCollectionName] = useState("");
  const [visibleAlert, setVisibleAlert] = useState(false);

  const numberWithCommas = (number) => {
    return number?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const onInputChange = (e) => {
    setCollectionName(e.target.value);
  };
  const onSubmit = () => {
    const payload_data = {
      name_collection: collectionName,
      id_collection: new Date().toString(),
      items: [],
    };
    addCollection(payload_data);

    if (
      collectionName.trim("") === "" ||
      !collectionName ||
      specialChars.test(collectionName)
    ) {
      setShowModal(() => ({
        addCollection: false,
        addMovie: false,
      }));
    } else {
      setShowModal(() => ({
        addCollection: false,
        addMovie: true,
      }));
    }

    setCollectionName("");
  };
  const onModalClose = () => {
    setCollectionName("");
    setSelectedCollection(null);
    setShowModal(() => ({
      addCollection: false,
      addMovie: false,
    }));
  };
  const onOpenModal = (type) => {
    if (type === "addCollection") {
      setShowModal(() => ({
        addCollection: true,
        addMovie: false,
      }));
    } else {
      setShowModal(() => ({
        addCollection: false,
        addMovie: true,
      }));
    }
  };
  const onSelect = (value) => {
    setSelectedCollection(value);
  };

  const onAddedMovie = () => {
    const payload_data = {
      collectionItemSelected: {
        id_collection: selectedCollection?.value,
        name_collection: selectedCollection?.label,
      },
      movieItem: data,
    };
    addedMovieToCollection(payload_data);
    setShowModal(() => ({
      addCollection: false,
      addMovie: false,
    }));
    setSelectedCollection(null);
  };
  const onAlertClose = () => {
    setErrorObj({
      has: false,
      response: "",
    });

    setVisibleAlert(false);
  };

  useEffect(() => {
    if (data) {
      const { Media } = data;

      setMovie(Media);
    }
  }, [data, animeId]);

  useEffect(() => {
    if (collectionItems.length > 0) {
      const option_data = collectionItems.map((each) => ({
        value: each.id_collection,
        label: each.name_collection,
      }));
      setOption(option_data);
    }
  }, [collectionItems]);

  useEffect(() => {
    setVisibleAlert(errorObj.has);
  }, [errorObj]);

  useEffect(() => {
    setErrorObj({
      has: false,
      response: "",
    });
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Section>
            {/* Alert */}
            {visibleAlert && (
              <AlertDiv status="error">
                <p>{errorObj?.response}</p>
                <AiOutlineCloseCircle onClick={() => onAlertClose()} />
              </AlertDiv>
            )}
            <SectionWrapper>
              <div className="section__left">
                <img
                  src={
                    movie?.coverImage?.extraLarge ??
                    "https://via.placeholder.com/300"
                  }
                  alt={movie.title?.english}
                  width="400"
                  height="400"
                />
                <AddCollectionDiv onClick={() => onOpenModal("addMovie")}>
                  Add To Collection
                </AddCollectionDiv>
              </div>

              <SectionDetail>
                {/* type */}
                <span className="section__detail-type">
                  {movie?.type} /{" "}
                  <span className="section__detail-genres">
                    {movie?.genres?.toString()}
                  </span>
                </span>
                <h3>
                  {movie?.title?.english} ({movie?.seasonYear})
                </h3>

                <div className="section__detail-studios">
                  <span>
                    Studios:
                    {movie?.studios?.nodes?.map((each, idx) => (
                      <span className="section__detail-studios-item" key={idx}>
                        {each?.name}
                      </span>
                    ))}
                  </span>
                </div>

                <SectionRating>
                  <div className="section__detail-rating">
                    {movie?.averageScore / 10}
                    <div className="section__detail-flex">
                      <span className="section__detail-rating-all">/10</span>
                      <span className="section__detail-popularity">
                        {numberWithCommas(movie?.popularity)}
                      </span>
                    </div>

                    <div className="section__detail-flex ml-10">
                      <span>Status: {movie?.status}</span>
                      <span>Season: {movie?.season}</span>
                    </div>
                  </div>
                </SectionRating>

                <div className="description__text">
                  <p>{movie.description}</p>
                </div>

                <h3>Character Info :</h3>
                <div className="description__character">
                  {movie?.characters?.nodes?.map((each, idx) => (
                    <Avatar key={idx} src={each?.image?.medium} round />
                  ))}
                  {movie?.characters?.nodes?.length === 0 && (
                    <p>No Character Info</p>
                  )}
                </div>
              </SectionDetail>
            </SectionWrapper>
          </Section>
        </>
      )}
      {/* add movie to collection */}
      <Modal
        show={showModal.addMovie}
        title="Add Movie To Collection"
        haveFooter={collectionItems.length > 0 ? true : false}
        onClose={onModalClose}
        onSubmit={onAddedMovie}
        btnTitle="Add"
      >
        {collectionItems.length > 0 ? (
          <>
            <Select
              onChange={onSelect}
              options={option}
              isSearchable={false}
              isClearable
              value={selectedCollection}
            />
          </>
        ) : (
          <>
            <TemplateNoData>
              <img src={NoData} alt="no-data" width="200" height="100" />
              <h3>You Have No Collection Yet</h3>
              <button onClick={() => onOpenModal("addCollection")}>
                Create New
              </button>
            </TemplateNoData>
          </>
        )}
      </Modal>

      {/* create Collection */}
      <Modal
        show={showModal.addCollection}
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
    </>
  );
};

export default AnimePreview;
