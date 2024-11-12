import PropTypes from 'prop-types';
import './index.scss';
import { NavLink } from 'react-router-dom';

function Default({ children }) {
  return (
    <>
      <header>
        <NavLink to='/'>Logo</NavLink>
        <NavLink to='contact'>Contact</NavLink>
      </header>

      <main>{children}</main>
      <footer>My Footer</footer>
    </>
  );
}

Default.propTypes = {
  children: PropTypes.node,
};

export default Default;
