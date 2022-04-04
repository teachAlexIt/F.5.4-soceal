import Profile__img from '../../../../img/about.png'
function Post() {
  return (
    <div className='post'>
      <img className='post__img' src={Profile__img}/>
      <span className='post__name'>Зиганшин Алексей</span>
      <p className='post__text'>Some text</p>
    </div>
  )
}

export default Post;