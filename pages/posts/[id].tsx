import React from 'react'
import axios from 'axios';
import { env } from 'process';
import { IPost } from '../../models';
import { GetServerSideProps, GetStaticProps } from 'next';

interface Props {
  post: IPost
}

const PostDetails: React.FC<Props> = ({ post }) => {
  return (
    <div>
      <p>Hello bro! {post.id}</p>
      <p>{post.body}</p>
    </div>
  )
}

export default PostDetails;

export const getStaticPaths = async () => {
  const res = await axios.get(`${env.NEXT_PUBLIC_API_URL}posts`);
  const posts: IPost[] = res.data;

  const paths = posts.map((post: IPost) => {
    return {
      params: {
        id: post.id.toString()
      }
    }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await axios.get(`${env.NEXT_PUBLIC_API_URL}posts/${params?.id}`);
  if (!res.data) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      post: res.data
    },
  }
}

// export const getServerSideProps: GetServerSideProps = async ({
//   req,
//   res,
//   params,
// }) => {
//   const { data } = await axios.get(`${env.NEXT_PUBLIC_API_URL}posts/${params?.id}`);
//   return {
//     props: {
//       post: data
//     },
//   }
// }
