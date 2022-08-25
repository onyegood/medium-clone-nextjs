import { IPost } from "../../models"
import PostCard from "../cards/PostCard"

interface Props {
  posts: IPost[]
}

const BodyComponent: React.FC<Props> = ({ posts }) => {
  return (
    <div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-3 md:p-6'>
        {posts.map((post: IPost) => <PostCard post={post} key={post.id} />)}
      </div>
  )
}

export default BodyComponent;
