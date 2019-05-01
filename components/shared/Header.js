import React from 'react';
import Link from 'next/Link';

// import scss
import '../../styles/main.scss';

class Header extends React.Component {

    render() {
        const title = this.props.title;

        return (
            <React.Fragment>
            <nav className='nav-class'>
                <h3 className='nav-title'>{title} </h3>
                {this.props.children}
                    <Link href="/">
                        <a> Home </a>
                    </Link>
                    <Link href="/portfolios">
                        <a> Portfolios </a>
                    </Link>
                    <Link href="/about">
                        <a> About </a>
                    </Link>
                    <Link href="/cv">
                        <a> CV </a>
                    </Link>
                    <style jsx>
                    {`
                        a {
                            padding: 4px;
                            font-size: 20px;
                            color: #999;
                            text-decoration: none;
                        }
                        a:hover {
                            color: #A33;
                            background: #444;
                        }
                        .header-title p{
                            padding: 4px;
                            font-family: verdana;
                            color: #444;
                        }
                        `}
                    </style>
                </nav>
            </React.Fragment>
        );
    }
}

export default Header;
