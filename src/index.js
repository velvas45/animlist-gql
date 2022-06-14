import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./index.css";
import App from "./App";
import { AnimeListProvider } from "contexts/anime.context";
import { CollectionProvider } from "contexts/collection.context";
const root = ReactDOM.createRoot(document.getElementById("root"));

const client = new ApolloClient({
  uri: "https://graphql.anilist.co/",
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AnimeListProvider>
          <CollectionProvider>
            <App />
          </CollectionProvider>
        </AnimeListProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
