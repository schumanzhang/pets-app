import React, { Component } from 'react';

class Cat extends Component {

    newCat = () => {
        this.props.newCat();
    };

    render() {

        return (
            <div>
                <br/>
                <button onClick={this.newCat}>I want a new cat</button>
                <br/>
                <div>
                    <img src={this.props.catImage}/>
                </div>
            </div>
        )
    }

}

export default Cat;