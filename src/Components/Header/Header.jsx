import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Header page</h1>
                <Link to='register'>Register now</Link>
                <Link to='/'>Home</Link>
                <Link to='gallery'>Gallery</Link>
        </div>
    );
};

export default Header;