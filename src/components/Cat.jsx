// react hooks
import { useState, useEffect } from "react";

function Cat(props) {

    const [ title, setTitle ] = useState('My Cat');
    const [ name, setName ] = useState('No Name');

    // use effect runs on every re-render of functional component
    useEffect(() => {
        // run on every re-render of the component
    });

    // useEffect runs once when the component is created
    useEffect(() => {
        // run on every re-render of the component

        // access your API calls

        // either fetch or axios
        fetch('http://localhost:3002/profile')
            .then(res => res.json())
            .then((data) => {
                // success block
                console.log('data:', data);
                setName(data.name);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const newCat = () => {
        setTitle('My new cat');
    };

    return (
        <div>  
            <h3> {name} </h3>
            <br/>
            <button onClick={newCat}>I want a new cat</button>
            <br/>
            <h4> {title} </h4>
            <div>
                <img src={props.catImage}/>
            </div>
        </div>
    )
    
}

export default Cat;


/*
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
*/