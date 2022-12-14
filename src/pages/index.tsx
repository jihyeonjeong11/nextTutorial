import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { trpc } from '../utils/trpc'


export default function IndexPage() {
  const hello = trpc.hello.useQuery({ text: 'client' });
  console.log(hello.data)
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{hello.data.greeting}</p>
    </div>
  );
}