import React from 'react';

import axios from 'axios';
import { useState, useEffect } from 'react';
import './app.scss';


import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [requestBody, setRequestBody] = useState({});


  useEffect(async () => {
    setData(null);

    if (requestBody) {


      const result = await axios[requestParams.method](requestParams.url, JSON.parse(requestBody));
      const data = { headers: result.headers, count: result.data.count, results: result.data }
      setData(data);
    }else {


      const result = await axios[requestParams.method](requestParams.url);
      console.log('staf', result)
      const data = { headers: result.headers, count: result.data.count, results: result.data }
      setData(data);
    }
  }, [requestParams]);

  function callApi(requestParams, requestBody) {
    setRequestBody(requestBody);
    setRequestParams(requestParams);
  }


  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </>
  )
}
export default App;

    // mock output
    // const data = {
    //   Headers:{
    //     "conten type": "string application/json"
    //   },
    //   count: 2,
    //   results: [
    //     {name: 'fake thing 1', url: 'http://fakethings.com/1'},
    //     {name: 'fake thing 2', url: 'http://fakethings.com/2'},
    //   ],
    // };
    // this.setState({data, requestParams});
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Header />
//         <div>Request Method: {this.state.requestParams.method}</div>
//         <div>URL: {this.state.requestParams.url}</div>
//         <Form handleApiCall={this.callApi} />
//         <Results data={this.state.data} />
//         <Footer />
//       </React.Fragment>
//     );
//   }
// }
//
// export default App;