import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loader from '../components/Loader';

const AddGroupEvent = () => {
  return (
    <React.Fragment>
        <Loader />
        <div className='wrapper'>
            <Header />

            <Footer />
        </div>
    </React.Fragment>
  )
}

export default AddGroupEvent;