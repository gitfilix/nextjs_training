// layout component
import React from 'react';
import Header from '../shared/Header';


const BaseLayout = (props) => {
    return (
        <React.Fragment>
        <Header title={'header App title'} />
            { props.children }
        </React.Fragment>
    );
}


export default BaseLayout;
