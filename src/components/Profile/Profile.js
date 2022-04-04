import './profile.css'
import Profile__img from '../../img/about.png'
import Posts from './Posts/Posts';
function Profile() {
  return (
    <div className="profile">
      <div className="about-me">
        <img src={Profile__img}/>
        <h3>Зиганшин Алексей</h3>
      </div>
      <Posts />
    </div>
  )
}

export default Profile;