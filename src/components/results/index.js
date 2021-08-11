// import React from 'react';

// class Results extends React.Component {
//   render() {
//     return (
//       <section>
//         <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
//       </section>
//     );
//   }
// }

// export default Results;

import React from 'react';
import JSONPretty from 'react-json-pretty';
import Loading from './loading/index';
import 'react-json-pretty/themes/monikai.css';

function Results(props) {
console.log(props.data)
  return (
    <section>
     { props.data ?<><h2>Headers</h2><JSONPretty  data={props.data.headers}></JSONPretty><h2>Result</h2><JSONPretty  data={props.data}></JSONPretty></>  :  <Loading/>}
    </section>
    //  { props.data ?<JSONPretty data-testid="resultTest" data={props.data}></JSONPretty>  :  <Loading/>}
  )
}

export default Results
