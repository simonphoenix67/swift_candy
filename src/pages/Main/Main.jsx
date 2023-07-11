import { Link } from 'react-router-dom';
import { Route, Routes, Router, BrowserRouter, NavLink, Outlet } from 'react-router-dom';
import s from './Styles.module.css';

const Main = () => {
  return(
    <>
      <h1 className={s.title}>Its Main</h1>
      <nav>
        <Link to="/">Go to Home</Link>
        <Outlet/>
      </nav>

    </>
  )
}

export default Main;
