import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloClient";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default MyApp;
