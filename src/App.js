import React from 'react';

const App = props => {
    return (
      <section className="about">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-user"></i> About</h2>
        <div>{props.jsonObj.basics.name}</div>
      </section>
    );
};

export default App;