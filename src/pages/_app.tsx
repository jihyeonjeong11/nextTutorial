import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {loggerLink} from '@trpc/client/links/loggerLink';
import {httpBatchLink} from '@trpc/client/links/httpBatchLink'
import superjson from 'superjson';
import { AppRouter } from '../server/routers/_app';
import { trpc } from '../utils/trpc';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// todo-add-appRouter-to-generic

// https://trpc.io/docs/v9/nextjs 
// check references

export default trpc.withTRPC(App);
