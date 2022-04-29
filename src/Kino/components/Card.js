import { Component } from "react";
import { Youtube } from 'react-bootstrap-icons';



class Card extends Component {
    render() {
        const {Poster, Title, Year ,imdbID, Type } = this.props.data;
        return (
            <div className="col-lg-3 mt-5 ms-5" style={{backgroundColor: "#151515"}}>
                <div className="card text-light " style={{backgroundColor: "#151515"}}>
                    <img src={this.props.data.Poster} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title" >{this.props.data.Title}</h5>
                        <p className="card-text">{this.props.data.Year}</p>
                        <a href="https://kinogo.zone/" className="btn" style={{backgroundColor: "#FFA238"}}><Youtube />  Link</a>
                    </div>
                </div>
            </div>

        )
    }
}

export default Card;