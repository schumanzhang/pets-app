import React, { Component } from 'react';

import Cat from './Cat';

// class component
class Pets extends Component {

    // props - is how components pass data to each other
    // state - data within the component
    constructor(props) {
        super(props);

        this.state = {
            title: "My Awesome Pets Component",
            number: 0,
            catImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80",
            anotherCat: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
        };

        // whenever state or props change
        // component will re-render
    }

    // lifecycle methods
    // after component gets created
    // componentDidMount will run
    componentDidMount() {
        // call your APIs
        // fetch or axio
    }

    clickMe = (e) => {
        // this.setState({ title: "My New Pets Component" });
        this.setState({ number: 1000 });
    };

    showNewCat = () => {
        this.setState(prevState => ({
            catImage: prevState.anotherCat,
        }));
    };

    render() {

        const { catImage } = this.state;

        return (
            <div className="container">
                <h2> {this.state.title}</h2>
                <p>Clicked {this.state.number} times </p>
                <p> { this.props.content } </p>
                <button onClick={this.clickMe}>Click Me</button>
                <Cat newCat={this.showNewCat} catImage={catImage}/>
            </div>
        )

    }


}

export default Pets;