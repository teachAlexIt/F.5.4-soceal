import Profile__img from '../../../img/about.png'
import Post from './Post/Post.js'
function Posts() {
  return (
    <div className='posts'>
      <div className='posts__head'>
      <h2>My posts</h2>
      <input placeholder='Enter the post' />
      <button>Add post</button>
      </div>
      <div className='posts__list'>
        <Post massage='Test' />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
    
  )
}

export default Posts;