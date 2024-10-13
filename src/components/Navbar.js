import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = ({ title }) => {
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {title}
        </a>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="mode"
            onClick={toggleMode}
          />
          <label
            className={`form-check-label text-${mode === 'light' ? 'dark' : 'light'}`}
            htmlFor="mode"
          >
            {mode.charAt(0).toUpperCase() + mode.slice(1)} Mode Enabled
          </label>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'Enter Your Title Here',
};

export default Navbar;
