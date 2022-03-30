import './profile.css'
import Profile__img from '../../img/about.png'
function Profile() {
  return (
    <div className="profile">
      <div className="about-me">
        <img src={Profile__img}/>
        <h3>Зиганшин Алексей</h3>
      </div>
      <div className='posts'>
        <input placeholder='Enter the post' />
        <button>Add post</button>
        <div className='post'>
          <div className='post__img'></div>
          <span className='post__name'>Зиганшин Алексей</span>
          <p className='post__text'>Some text</p>
        </div>
      </div>
    </div>
  )
}

export default Profile;