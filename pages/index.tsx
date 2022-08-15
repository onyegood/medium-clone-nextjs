import type { NextPage } from 'next';
import axios from 'axios';
import BannerComponent from '../components/banner';
import HeadComponent from '../components/head';
import HeaderComponent from '../components/header';
import { env } from 'process';
import { IPost } from '../models';
import Link from 'next/link';

interface Props {
  posts: IPost[];
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <HeadComponent />
      <HeaderComponent />
      <BannerComponent />
      <div>
        {posts.map((post: IPost) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <div className='flex justify-between p-5 my-3 bg-white'>
              <div>
                <p>{post.title}</p>
                <p>{post.body}</p>
              </div>
              <div className='h-12 w-12 rounded-full bg-slate-500 text-center justify-center content-center'>
                <p>AB</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
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
