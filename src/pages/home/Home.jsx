import React, { useContext } from "react";

import {
  Section,
  SectionContent,
  SectionTitle,
  PaginationWrapper,
} from "./home.styles";

import Card from "components/card/Card";
import Pagination from "components/pagination/Pagination";
import List from "components/list-item/List";
import Spinner from "components/spinner/Spinner";

import { AnimeListContext } from "contexts/anime.context";

const Home = () => {
  const {
    animeListMap: { media: animes, pageInfo },
    loading,
    setPayload,
  } = useContext(AnimeListContext);

  const handlePageChange = (page) => setPayload({ page, perPage: 10 });

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Section>
          <Card>
            <SectionTitle>
              <h3>Anime Movie</h3>
            </SectionTitle>

            <SectionContent>
              {animes &&
                animes.map((data, idx) => (
                  <List
                    isAnimated
                    data={data}
                    key={idx}
                    // addCollection={addToCollection}
                    // removeCollection={removeItemFromCollection}
                  />
                ))}
            </SectionContent>

            {/* Pagination */}
            <PaginationWrapper>
              <Pagination
                currentPage={pageInfo?.currentPage}
                totalCount={pageInfo?.total}
                pageSize={pageInfo?.perPage}
                onPageChange={handlePageChange}
              />
            </PaginationWrapper>
          </Card>
        </Section>
      )}
    </>
  );
};

export default Home;
