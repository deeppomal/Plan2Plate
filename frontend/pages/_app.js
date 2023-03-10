import 'tailwindcss/tailwind.css';
import React from "react";
import "../styles/globals.scss";
import Layout from '../components/Layout';

import {ReactQueryDevtools } from 'react-query/devtools'
import {QueryClientProvider, QueryClient} from 'react-query'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient} >
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
 
  );
}

export default MyApp;
