// import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

// export default class Übungen extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       counter: 0,
//       data: [
//         'goku',
//         'gohan',
//         'vegeta',
//         'trunks',
//         'piccolo',
//         'goten',
//         'bulma',
//         'chi chi',
//       ],
//       inputValue: '',
//     };

//     // this.handleCounter = this.handleCounter.bind(this);
//   }

//   handleCounter = () => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   handleInput = (e) => {
//     this.setState({ inputValue: e.target.value });
//   };
//   render() {
//     const { data } = this.state;
//     return (
//       <div>
//         {data.map((person) => (
//           <h3 key={uuidv4()}>{person} </h3>
//         ))}
//         {this.props.children}

//         <h2>{this.state.counter} </h2>

//         <button onClick={this.handleCounter}>Click</button>
//         <input
//           type='text'
//           value={this.state.inputValue}
//           onChange={(e) => this.handleInput(e)}
//         />
//       </div>
//     );
//   }
// }

import React, { useState, useEffect } from 'react';
import ÜbungenChild from './ÜbungenChild';
import ErrorBoundaray from './ErrorBoundaray';
import axios from 'axios';

export default function Übungen() {
  const [data, setData] = useState([
    'goku',
    'gohan',
    'vegeta',
    'trunks',
    'piccolo',
    'goten',
    'bulma',
    'chi chi',
  ]);

  const [person, setPerson] = useState([]);
  const addName = (newName) => {
    setData([...data, ...[newName]]);
  };

  useEffect(async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      console.log(console.log(response.data));
      setPerson(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      {person.length && <h1> {person[0].title} </h1>}
      <ÜbungenChild namesLength={data.length} addName={addName} data={data} />
      <ErrorBoundaray>
        <ÜbungenChild namesLength='error' addName={addName} data={data} />
      </ErrorBoundaray>
      <ÜbungenChild namesLength={data.length} addName={addName} data={data} />
    </div>
  );
}
