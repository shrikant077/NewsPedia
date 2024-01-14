import React, { Component } from 'react'

export default class NewsItems extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, time, source } = this.props;
        return (
            <div>
                <div className="card" /*style={{width: "18rem"}}*/>
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}>
                        {source}
                    </span>
                    <img src={!imageUrl ? "https://images.wsj.net/im-908364/social" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"}</small></p>
                        <p className="card-text"><small className="text-muted">{new Date(time).toUTCString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
