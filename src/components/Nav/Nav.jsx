import SearchBar from '../SearchBar/SearchBar'
import style from './Nav.module.css'
import { Link } from 'react-router-dom'


export default function Nav({onSearch}) {
    return (
    <nav>
        {/* <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngplay.com%2Fimage%2Ftag%2Frick-and-morty-logo&psig=AOvVaw04JOONumy3w7T7wrbQXL7p&ust=1687317692477000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCODTurPy0P8CFQAAAAAdAAAAABAa'
            width="100px"
         /> */}
        <Link to="/home" className={style.links}>
        <button>
        Home
        </button>
        </Link>
        <Link to="/about" className={style.links}>
        <button>
        About
        </button>
        </Link>
        <Link to="/favorites" className={style.links}>
        <button>
        Favorites
        </button>
        </Link>
        <SearchBar onSearch={onSearch} />
    </nav>
    )
}
