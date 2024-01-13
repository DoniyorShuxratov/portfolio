import React, { Component } from 'react';
import data from '../../Data/data.json';
import { Img } from 'react-image';

class LogosList extends Component {

  render() {
    const filterItems = data?.works?.filter(items => items.type === 'logo');
    return (
      <section className="worklist--section">
        <div className="container">
          <div className="worklist">
            {filterItems.map((items, i) => (
              <WorkListItem key={i} items={items} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

class WorkListItem extends Component {
  render() {
    const { data, id, 'product-img-1': imgSrc, onhover } = this.props.items;
    function changeBackground(e) {
      e.target.style.background = onhover;
      e.target.style.transition = 'background 0.3s ease';
    }
    function restoreBackground(e) {
      e.target.style.background = ''; 
      e.target.style.transition = 'background 0.3s ease';
    }
    return (
      <div className='worklist__card op-d s-1'>
        <div className="worklist__card--head">
          <p>{data}</p>
          <div className="card--id">
            <p>ID</p>
            <pre>{id}</pre>
          </div>
        </div>
        <div className="worklist__card--content" onMouseLeave={restoreBackground} onMouseEnter={changeBackground}>
          <Img src={imgSrc} alt="img" />
        </div>
      </div>
    );
  }
}

export default LogosList;
