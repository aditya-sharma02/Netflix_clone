import React from 'react';
import ReactDom from 'react-dom';

import Cards from './Component';
// import './index.css';
import Sdata from './Netflixsdata';

ReactDom.render(
    <>
      <h2 className='heading_style'>Enjoy the webseries</h2>
      {Sdata.map((val) => {
        return (
          <Cards
            key={val.id}
            imgsrc={val.imgsrc}
            link={val.links}
            sname={val.sname}
            title={val.title}
          />
        )
      })};
    </>,
    document.getElementById("root")
  )

