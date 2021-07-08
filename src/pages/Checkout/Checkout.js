import React, { useEffect } from 'react';
// import axios from '../../axios/axios';

function Checkout() {
  //   useEffect(() => {
  //     axios.post('/checkout', {});
  //   }, []);
  function redirectToPayU(pd) {
    //use window.bolt.launch if you face an error in bolt.launch
    window.bolt.launch(pd, {
      responseHandler: function (response) {
        // your payment response Code goes here
        fetch('http://localhost:8000/api/checkout/response', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(response.response),
        })
          .then(function (a) {
            return a.json();
          })
          .then(function (json) {
            console.log(json);
          });
      },
      catchException: function (response) {
        // the code you use to handle the integration errors goes here
        // Make any UI changes to convey the error to the user
        console.error(response);
      },
    });
  }
  //Create a Data object that is to be passed to LAUNCH method of Bolt
  function payumoney() {
    var pd = {
      key: 'rjQUPktU',
      txnid: '123456789',
      amount: '2',
      firstname: 'Neel',
      email: 'neelthakkar2001@gmail.com',
      phone: '6355082848',
      productinfo: 'COD',
      surl: 'http://localhost:3000/about',
      furl: 'http://localhost:3000/sponsor',
      hash: '',
    };

    let data = {
      txnid: pd.txnid,
      email: pd.email,
      amount: pd.amount,
      productinfo: pd.productinfo,
      firstname: pd.firstname,
    };
    // let self = this;

    // API call to get the Hash value
    fetch('http://localhost:8000/api/checkout', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(function (a) {
        return a.json();
      })
      .then(function (json) {
        pd.hash = json['hash'];
        //  With the hash value in response, we are ready to launch the bolt overlay.
        //Function to launch BOLT
        redirectToPayU(pd);
        console.log(pd.hash);
      });
  }

  useEffect(() => {
    try {
      payumoney();
    } catch (e) {
      console.error(e);
    }
  }, []);
  return <div>Hello Neel</div>;
}

export default Checkout;
