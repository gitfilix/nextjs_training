import React from 'react';
import Header from '../components/shared/Header';
import BaseLayout from '../components/layouts/BaseLayout';
// const Index = () => {
//     return (
//         <h1>my main index page</h1>
//     );
// }

// Class component:
// more functionality , user lifecycle functionality
class Index extends React.Component {


    render(){
        return(
            <BaseLayout>
            <div>
                <h1>my main index page as class Component</h1>
                <p>test</p>
            </div>
            </BaseLayout>
        );
    }
}



export default Index;
