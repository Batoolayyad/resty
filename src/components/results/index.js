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

import React from 'react'
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

function Results(props) {

  return (
    <section>
        <JSONPretty id="json-pretty"  data-testid="resultTest" data={props.data ? JSON.stringify(props.data, undefined, 2) : 'Loading...'}/>
      </section>
  )
}

export default Results
