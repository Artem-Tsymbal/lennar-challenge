import React from "react";
import { ApolloProviderWrapper } from "../lib/apolloClient";
import "../styles/globals.scss";

const MyApp: React.FC<{ Component: React.FC; pageProps: any }> = ({
  Component,
  pageProps,
}) => {
  return (
    <ApolloProviderWrapper>
      <Component {...pageProps} />
    </ApolloProviderWrapper>
  );
};

export default MyApp;
