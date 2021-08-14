import React from 'react';

import axios from 'axios';
import './app.scss';

import { useState, useEffect,useReducer } from 'react';


import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history';






const initialState=[];
function reducer(history=initialState, action){
  const {type, payload}=action;
  
  switch(type){
    case'GetHistory':
    history=[...history,payload];
    return history;
    
    default: return history;
  }
};


function getHistory(url, method, result){
  return({
    type:'GetHistory',
    payload:{
      url, method, result
    }
  })

}
function App() {
  const [history, dispatch]= useReducer(reducer, initialState)
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [requestBody, setRequestBody] = useState({});

  useEffect(async () => {
    setData(null);

    if (requestBody) {

      const result = await axios[requestParams.method](requestParams.url, JSON.parse(requestBody));
      const data = { headers: result.headers, count: result.data.count, results: result.data }
      setData(data);

      dispatch(getHistory(requestParams.url, requestParams.method,data));


    }else {

      const result = await axios[requestParams.method](requestParams.url);
      // console.log('staf', result)
      const data = { headers: result.headers, count: result.data.count, results: result.data }
      setData(data);

      dispatch(getHistory(requestParams.url, requestParams.method,data));
    }
  }, [requestParams]);


  function callApi(requestParams, requestBody) {
    setRequestBody(requestBody);
    setRequestParams(requestParams);
  }


  function setHistory(result){
    setData(result);
  }


  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      {history && <History setHistory={setHistory} history={history} />}
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