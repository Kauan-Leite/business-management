import './App.css';
import { connect } from 'react-redux';
import { getAllEnterprises } from './redux/actions';
import { useState } from 'react';
import Table from './components/Table';

function App(props) {
  const { dispatch } = props;

  useState(() => {
    dispatch(getAllEnterprises())
  }, [])

  return (
    <div className="App">
      <nav>
        <h1>Business Management</h1>
      </nav>

      <Table />
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
  isFetching: state.isFetching,
  offset: state.offset
})


export default connect(mapStateToProps)(App);