import type { NextPage } from 'next';
import axios from 'axios';
import BannerComponent from '../components/banner';
import HeadComponent from '../components/head';
import HeaderComponent from '../components/header';
import { env } from 'process';
import { IPost } from '../models';
import BodyComponent from '../components/body';

interface Props {
  posts: IPost[];
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div className='max-w-7xl mx-auto'>
      <HeadComponent />
      <HeaderComponent />
      <BannerComponent />
      <BodyComponent posts={posts} />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const res = await axios.get(`${env.NEXT_PUBLIC_API_URL}posts`);
  return {
    props: {
      posts: res.data,
    },
  };
};
