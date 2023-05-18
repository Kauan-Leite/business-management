import "./App.css";
import { connect } from "react-redux";
import { getAllEnterprises } from "./redux/actions";
import { useState } from "react";
import Table from "./components/Table";
import MyModal from "./components/MyModal";

function App(props) {
  const { dispatch, enterprises } = props;

  document.title = "Gerenciamento de Empresas";

  useState(() => {
    dispatch(getAllEnterprises());
  }, []);

  return (
    <div className="App">
      <nav>
        <h1>Gerenciamento de Empresas</h1>
      </nav>

      <MyModal type="add" />
      {enterprises.length > 0 ? (
        <Table />
      ) : (
        <div className="no-enterprises">
          <h1>Nenhuma Empresa Cadastrada</h1>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  enterprises: state.enterprises,
});

export default connect(mapStateToProps)(App);
