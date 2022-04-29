import React, { Component } from "react";
import { render } from "react-dom";
import Card from "./components/Card";
import Search from "./components/Search";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";




class Index extends Component {

    state = {
        movies: []
    }


    componentDidMount() {
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=6095658c&s=marvel`)
            .then(res => res.json())
            .then(data => this.setState({ movies: data.Search }))
   
    }

    search = (arg) => {
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=6095658c&s=${arg}`)
            .then(res => res.json())
            .then(data => this.setState({ movies: data.Search }))
       
    }

    render() {
        return (
            <>
                <Navbar />
                <Search fun={this.search} />
                <div className="container">
                    <div className="row">
                        {
                            this.state.movies.map((element, index) => {
                                return (
                                    <Card key={index} data={element} />
                                )

                            })
                        }

                    </div>
                </div>
                <Footer />
            </>
        );
    }
}
export default Index;