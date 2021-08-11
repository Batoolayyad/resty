// import React from 'react';

// import './form.scss';

// class Form extends React.Component {

//   handleSubmit = e => {
//     e.preventDefault();
//     const formData = {
//       method:'GET',
//       url: 'https://pokeapi.co/api/v2/pokemon',
//     };
//     this.props.handleApiCall(formData);
//   }

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label >
//             <span>URL: </span>
//             <input name='url' type='text' />
//             <button type="submit">GO!</button>
//           </label>
//           <label className="methods">
//             <span id="get">GET</span>
//             <span id="post">POST</span>
//             <span id="put">PUT</span>
//             <span id="delete">DELETE</span>
//           </label>
//         </form>
//       </>
//     );
//   }
// }

// export default Form;


import React from 'react'
import { useState } from 'react';
import './form.scss';



function Form(props) {
  let [showBox, setShowBox] = useState(false);
  let [restMethod, setRestMethod] = useState('get');
  let [url, seturl] = useState('https://pokeapi.co/api/v2/pokemon');
  let [bodyText, setbodyText] = useState('https://pokeapi.co/api/v2/pokemon');
  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      restMethod: restMethod,
      url: url,
    };
    props.handleApiCall(formData);
  }
  function handleRestMethod(e) {
    setRestMethod(e.target.id);
  }
  function handleShowBox(e){
    setShowBox(true);
    setRestMethod(e.target.id);
  }
  function handlerUrl(e) {
    seturl(e.target.value);
  }
  function handelBodyText(e) {
    setbodyText(e.target.value)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={handlerUrl} />
          <button type="submit" data-testid="formTest" >GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={handleRestMethod}>  GET  </span>
          <span id="post" onClick={handleShowBox}>  POST  </span>
          <span id="put" onClick={handleShowBox}>  PUT  </span>
          <span id="delete" onClick={handleRestMethod}>  DELETE  </span>
        </label>
        {showBox && <textarea  rows='10' cols='40' onChange={handelBodyText} />}
      </form>
    </>
  )
}

export default Form
