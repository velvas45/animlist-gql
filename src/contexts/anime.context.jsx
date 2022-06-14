import { createContext, useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

export const AnimeListContext = createContext({
  dataAnime: {},
});

export const ANIME_QUERY = gql`
  query ($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(type: ANIME) {
        id
        title {
          romaji
        }
        episodes
        coverImage {
          extraLarge
          large
          medium
        }
        season
        status
      }
    }
  }
`;

export const AnimeListProvider = ({ children }) => {
  const [payload, setPayload] = useState({
    page: 1,
    perPage: 10,
  });
  const [animeListMap, setAnimeListMap] = useState({});
  const { loading, error, data } = useQuery(ANIME_QUERY, {
    variables: payload,
  });

  useEffect(() => {
    if (data) {
      const { Page } = data;
      const format_media = Page.media.map((each) => ({
        ...each,
        isLiked: false,
      }));
      const fomart_data = {
        pageInfo: Page.pageInfo,
        media: format_media,
      };
      setAnimeListMap(fomart_data);
    }
  }, [data]);

  const value = { animeListMap, loading, setPayload, setAnimeListMap };
  return (
    <AnimeListContext.Provider value={value}>
      {children}
    </AnimeListContext.Provider>
  );
};
