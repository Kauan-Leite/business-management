import { connect } from "react-redux";
import "../style/Table.css";
import MyModal from "./MyModal";

function Table(props) {
  const { enterprises } = props;

  const showEnterprises = () =>
    enterprises.map((enterprise, index) => (
      <tr key={enterprise.id}>
        <td className="id">
          <p>{enterprise.id}</p>
        </td>
        <td className="nome">
          <p>{enterprise.nome}</p>
        </td>
        <td className="endereco">
          <p>{`${enterprise.address.street} ${enterprise.address.number}, ${enterprise.address.district}, ${enterprise.address.city} - ${enterprise.address.state}`}</p>
        </td>
        <td className="more">
          <MyModal type="more" enterprise={enterprise} />
        </td>
        <td className="editar">
          <MyModal type="edit" enterprise={enterprise} />
        </td>
        <td className="remove">
          <MyModal type="remove" enterprise={enterprise} />
        </td>
      </tr>
    ));

  return (
    <div className="table">
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Mais Detalhes</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
          {showEnterprises()}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  enterprises: state.enterprises,
});

export default connect(mapStateToProps)(Table);
