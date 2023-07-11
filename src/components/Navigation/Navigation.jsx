import { Link } from 'react-router-dom';

const Navigation = () => {
  return(
    <>
    <h1>Its Navigation, dude</h1>
      <Link to="/">Go to Home</Link>
      <Link to="/Main">---Go to Main</Link>
      <Link to="/Registration">Registration</Link>
    </>
  )
}

export default Navigation;
