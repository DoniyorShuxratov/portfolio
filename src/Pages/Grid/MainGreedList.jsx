import React, { Component } from 'react';
import data from '../../Data/data.json';
import { Img } from 'react-image';

class MainGridList extends Component {
  render() {
    return (
      <section className="worklist--section">
        <div className="container">
          <div className="worklist">
            {data?.works?.map((items, i) => (
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
    const { data, id, 'product-img-1': imgSrc } = this.props.items;

    return (
      <div className="worklist__card op-d s-2">
        <div className="worklist__card--head">
          <p>{data}</p>
          <div className="card--id">
            <p>ID</p>
            <pre>{id}</pre>
          </div>
        </div>
        <div className="worklist__card--content">
          <Img src={imgSrc} alt="img" />
        </div>
      </div>
    );
  }
}

export default MainGridList;
