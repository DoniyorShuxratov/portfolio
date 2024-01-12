import data from '../../Data/data.json';

export default function MainGreedList(){
    return(
        <section className="worklist--section">
            <div className="container">
                <div className="worklist">
                    {data?.works?.map((items, i) => (
                        <div key={i} className="worklist__card">
                        <div className="worklist__card--head">
                            <p>{items.data}</p>
                            <div className="card--id">
                                <p>ID</p>
                                <pre>{items.id}</pre>
                            </div>
                        </div>
                        <div className="worklist__card--content">
                            <img src={require(items['product-img-1'])} alt="" srcset="" />
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}