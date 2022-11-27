import {FaSignInAlt, FaUser, FaPaw, FaSignOutAlt} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'
import {FaArrowAltCircleLeft} from 'react-icons/fa'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>אתר אימוץ</Link>
            <button className="btn" onClick={() => navigate(-1)}>
                <FaArrowAltCircleLeft /> חזרה
            </button>
            
        </div>
        <div className="right">
        
            {user ? (
                <>
                    <ul>
                        <li>
                            <div className="btn2">
                                <button onClick={onLogout}>
                                    התנתקות&nbsp;
                                    <FaSignOutAlt />
                                </button>
                            </div>

                        </li>
                        {user.isAdmin && (
                            <li>
                                <Link to='/register'>
                                    רישום משתמש חדש&nbsp;<FaUser /> 
                                </Link>
                            </li>
                        )}
                    </ul>
                    <div className="profile">
                        <Link to='/profile' className='profile-text'>
                            פרופיל&nbsp;&nbsp;<FaPaw />
                        </Link>
                    </div>
                </>

            ) : (
                <>
                    <ul>      
                        <li>
                            <Link to='/login'>
                                התחברות&nbsp;<FaSignInAlt /> 
                            </Link>
                        </li>
                    </ul>
                </>
            )}
        
        </div>
    </header>
  )
}

export default Header
