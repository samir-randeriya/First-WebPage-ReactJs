import React from 'react';
import classes from './Topbar.module.css';

const Topbar = () => {
    return(
        <nav className={classes.Topbar}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo" />
          {/* https://i.dlpng.com/static/png/197684_preview.png */}
        </nav>
    );
}

export default Topbar;