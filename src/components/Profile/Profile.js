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
        <input placeholder='enter the post' />
        <button>Add post</button>
        <div className='post'>
          <div className='post__img'></div>
          <span>Elon Mask</span>
          <p>Some text</p>
        </div>
      </div>
    </div>
  )
}

export default Profile;