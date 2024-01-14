import React, { Component } from 'react';
import data from '../../Data/data.json';
import { Img } from 'react-image';
import { useNavigate } from 'react-router-dom'

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

function WorkListItem({ items }) {
  const navigate = useNavigate();

  const handleItem = (frame) => {
    navigate('/main-grid', { state: frame });
  };

  const { data, id, 'product-img-1': imgSrc, 'product-img-2': imgSrc2, 'product-img-3': imgSrc3,  'product-img-4': imgSrc4,  'product-img-5': imgSrc5,  'product-img-6': imgSrc6,  'product-img-7': imgSrc7,  'product-img-8': imgSrc8, onhover, product, type, } = items;

  function changeBackground(e) {
    e.target.style.background = onhover;
    e.target.style.transition = 'background 0.3s ease';
  }

  function restoreBackground(e) {
    e.target.style.background = '';
    e.target.style.transition = 'background 0.3s ease';
  }

  return (
    <div className='worklist__card op-d s-1' onClick={() => handleItem({ data, id, imgSrc, imgSrc2, imgSrc3, imgSrc4, imgSrc5, imgSrc6, imgSrc7, imgSrc8,  onhover, product, type })}>
      <div className="worklist__card--head">
        <p>{data}</p>
        <div className="card--id">
          <p>ID</p>
          <pre>{id}</pre>
        </div>
      </div>
      <div className="worklist__card--content" onMouseLeave={restoreBackground} onMouseEnter={changeBackground}>
        <Img loading="lazy" src={imgSrc} alt="img" />
      </div>
    </div>
  );
}

export default MainGridList;