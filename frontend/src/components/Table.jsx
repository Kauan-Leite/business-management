import { connect } from 'react-redux';
import '../style/Table.css'

function Table(props) {
  const { enterprises } = props;

  const showEnterprises = () => enterprises.map((enterprise, index) => (
    <tr key= { enterprise.id }>
      <td className='id'>
        <p>{enterprise.id}</p>
      </td>
      <td className='nome'>
        <p>{enterprise.nome}</p>
      </td>
      <td className='endereco'>
        <p>{`${enterprise.address.street} ${enterprise.address.number}, ${enterprise.address.district}, ${enterprise.address.city} - ${enterprise.address.state}`}</p>
      </td>
      <td className='more'>
        <button>Mais Detalhes</button>
      </td>
      <td className='editar'>
        <button>Editar</button>
      </td>
      <td className='remove'>
        <button>Excluir</button>
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
          { showEnterprises() }
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  enterprises: state.enterprises,
  isFetching: state.isFetching,
})


export default connect(mapStateToProps)(Table);