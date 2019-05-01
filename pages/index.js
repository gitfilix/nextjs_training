import React from 'react';


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
            <div>
                <h1>my main index page as class Component</h1>
                <a href="/"> Home </a>
                <a href="/blogs"> Blog </a>
                <a href="/portfolios"> Portfolios </a>
                <a href="/about"> About </a>
                <a href="/cv"> CV </a>
            </div>
        );
    }
}



export default Index;
