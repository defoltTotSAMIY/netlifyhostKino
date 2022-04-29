import React from "react";
import { BsSearch } from 'react-icons/bs';

class Search extends React.Component {

    state = {
        searchInput:  ""
    }

    render() {

        return (
            <div className="container" style={{ marginTop: "120px"  }}>
                <div className="row">
                    <div className="col-lg-10">

                        <input type="search" placeholder="search..." 
                        value={this.state.searchInput}
                        onChange={(event) => this.setState({searchInput: event.target.value  }) } 
                        className="form-control" />
                    </div>
                    <div className="col-lg-2">

                        <button className="btn" style={{backgroundColor: "#FFA238"}} onClick={this.props.fun.bind(this, this.state.searchInput)}><BsSearch/></button>
                    </div>

                </div>
            </div>
        )
    }
}

export default Search;