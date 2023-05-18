import { Modal, Box, Divider } from '@mui/material';
import { useState } from 'react';
import { getEnterprisesById, updateEnterprise, deleteEnterprise, createEnterprise } from '../redux/actions';
import { connect } from 'react-redux';
import '../style/MyModal.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function MyModal(props) {
  const { dispatch, enterprise, enterpriseByID, type } = props;
  const [openAdd, setOpenAdd] = useState(false);
  const [newItem, setNewItem] = useState({
    name: '',
    street: '',
    number: '',
    district: '',
    city: '',
    state: '',
  });
  const [openMore, setOpenMore] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editItem, setEditItem] = useState({
    name: '',
    street: '',
    number: '',
    district: '',
    city: '',
    state: '',
  });
  const [openExcluir, setOpenExcluir] = useState(false);

  const add = () => {
    setOpenAdd(true)
    setNewItem({
      name: '',
      street: '',
      number: '',
      district: '',
      city: '',
      state: '',
    })
  }

  const changeNew = ({target}) => {
    const { name, value } = target
    setNewItem(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const isEmpty = (data) => {
    if (data.name !== '' && data.street !== '' && data.number !== '' && data.district !== '' && data.city !== '' && data.state !== '') {
      return false
    }
    return true
  }

  const create = (data) => {
    if (!isEmpty(data)) {
      dispatch(createEnterprise(data))
      document.location.reload()
    }
  }

  const moreDetails = (id) => {
    setOpenMore(true)
    dispatch(getEnterprisesById(id))
  }

  const edit = (id) => {
    setOpenEdit(true)
    setEditItem({
      name: '',
      street: '',
      number: '',
      district: '',
      city: '',
      state: '',
    })
    dispatch(getEnterprisesById(id))
  }

  const changeEdit = ({target}) => {
    const { name, value } = target
    setEditItem(prevState => ({
      ...prevState,
      [name]: value,
    }))
  };

  const update = (id, data) => {
    if (!isEmpty(data)) {
      dispatch(updateEnterprise(id, data))
      document.location.reload()
    }
  }

  const deleteOpen = () => {
    setOpenExcluir(true)
  }

  const remove = (id) => {
    dispatch(deleteEnterprise(id))
    document.location.reload()
  }

  const handleClose = (func) => {
    func(false);
  };

  const isDisabled = (data) => {
    return (
      data.name.length > 0 &&
      data.street.length > 0 &&
      data.number.length > 0 &&
      data.district.length > 0 &&
      data.city.length > 0 &&
      data.state.length > 0
    )
  }


  const modalAdd = () => {
    return (
      <>
        <button className='btn-add' onClick={() => add()}>Adicionar Empresa</button>
        <Modal
          open={openAdd}
          onClose={() => handleClose(setOpenAdd)}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, minWidth: '50%', maxWidth:'70%', minHeight: '60%' }}>
            <h2 id="child-modal-title">Adicionar Empresa</h2>
            <Divider />
            <button className='close-modal' onClick={() => handleClose(setOpenAdd)}>X</button>
            <div id="child-modal-description">
              <label>Nome da Empresa: </label>
              <input className='inp-name' type='text' name='name' value={newItem.name} onChange={ changeNew } placeholder='Osten Group' />
              <div className='street-num'>
                <span className='street-span'>
                  <label>Rua/Avenida: </label>
                  <input className='inp-street' type='text' name='street' value={newItem.street} onChange={ changeNew } placeholder='Av. Airton Pretini' />
                </span>
                <span className='num-span'>
                  <label>N°: </label>
                  <input className='inp-number' type='number' name='number' value={newItem.number} onChange={ changeNew } placeholder='10'/>
                </span>
              </div>
              <label>Bairro: </label>
              <input className='inp-district' type='text' name='district' value={newItem.district} onChange={ changeNew } placeholder='Penha de França' />
              <div className='city-state'>
                <span className='city-span'>
                  <label>Cidade: </label>
                  <input className='inp-city' type='text' name='city' value={newItem.city} onChange={ changeNew } placeholder='São Paulo' />
                </span>
                <span className='state-span'>
                  <label>Estado: </label>
                  <input className='inp-state' type='text' name='state' value={newItem.state} onChange={ changeNew } placeholder='São Paulo' />
                </span>
              </div>
            </div>
            <button disabled={!isDisabled(newItem)} className='cadastrar' onClick={() => create(newItem)}>Cadastrar</button>
          </Box>
        </Modal>
      </>
    )
  }

  const modalMore = () => {
    return (
      <>
        <button className='btn-more' onClick={() => moreDetails(enterprise.id)}>Mais Detalhes</button>
        <Modal
          open={openMore}
          onClose={() => handleClose(setOpenMore)}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, minWidth: '10%', maxWidth: '70%', minHeight: '50%' }}>
            <h2 id="child-modal-title">Mais Detalhes</h2>
            <Divider />
            <button className='close-modal' onClick={() => handleClose(setOpenMore)}>X</button>
            <div id="child-modal-description">
              <h3>ID: <span className='dados'>{enterpriseByID.id}</span></h3>
              <h3>Nome da Empresa: <span className='dados'>{enterpriseByID.nome}</span></h3>
              <h3>Rua/Avenida: <span className='dados'>{enterpriseByID.address.street}</span></h3>
              <h3>N°: <span className='dados'>{enterpriseByID.address.number}</span></h3>
              <h3>Bairro: <span className='dados'>{enterpriseByID.address.district}</span></h3>
              <h3>Cidade: <span className='dados'>{enterpriseByID.address.city}</span></h3>
              <h3>Estado: <span className='dados'>{enterpriseByID.address.state}</span></h3>
            </div>
          </Box>
        </Modal>
      </>
    )
  }

  const modalEdit = () => {
    return (
      <>
        <button className='btn-edit' onClick={() => edit(enterprise.id)}>Editar</button>
        <Modal
          open={openEdit}
          onClose={() => handleClose(setOpenEdit)}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, minWidth: '50%', maxWidth:'70%', minHeight: '65%' }}>
            <h2 id="child-modal-title">Editar Empresa</h2>
            <Divider />
            <button className='close-modal' onClick={() => handleClose(setOpenEdit)}>X</button>
            <div id="child-modal-description">
              <h3>ID: {enterpriseByID.id}</h3>
              <label>Nome da Empresa: </label>
              <input className='inp-name' type='text' name='name' value={editItem.name} placeholder={enterpriseByID.nome} onChange={ changeEdit } />
              <div className='street-num'>
                <span className='street-span'>
                  <label>Rua/Avenida: </label>
                  <input className='inp-street' type='text' name='street' value={editItem.street} placeholder={enterpriseByID.address.street} onChange={ changeEdit } />
                </span>
                <span className='num-span'>
                  <label>N°: </label>
                  <input className='inp-number' type='number' name='number' value={editItem.number} placeholder={enterpriseByID.address.number} onChange={ changeEdit } />
                </span>
              </div>
              <label>Bairro: </label>
              <input className='inp-district' type='text' name='district' value={editItem.district} placeholder={enterpriseByID.address.district} onChange={ changeEdit } />
              <div className='city-state'>
                <span className='city-span'>
                  <label>Cidade: </label>
                  <input className='inp-city' type='text' name='city' value={editItem.city} placeholder={enterpriseByID.address.city} onChange={ changeEdit } />
                </span>
                <span className='state-span'>
                  <label>Estado: </label>
                  <input className='inp-state' type='text' name='state' value={editItem.state} placeholder={enterpriseByID.address.state} onChange={ changeEdit } />
                </span>
              </div>
            </div>
            <button disabled={!isDisabled(editItem)} className='atualizar' onClick={() => update(enterpriseByID.id, editItem)}>Atualizar</button>
          </Box>
        </Modal>
      </>
    )
  }

  const modalDelete = () => {
    return (
      <>
        <button className='btn-remove' onClick={deleteOpen}>Excluir</button>
        <Modal
          open={openExcluir}
          onClose={() => handleClose(setOpenExcluir)}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, minWidth: '25vw', maxWidth:'70%', minHeight: '20vh' }}>
            <h2 id="child-modal-title">Excluir</h2>
            <button className='close-modal' onClick={() => handleClose(setOpenExcluir)}>X</button>
            <Divider />
            <p id="child-modal-description">
              Tem Certeza que deseja excluir está empresa?
            </p>
            <button className='cancelar' onClick={() => handleClose(setOpenExcluir)}>Cancelar</button>
            <button className='confirm-delete' onClick={() => remove(enterprise.id)}>Apagar</button>
          </Box>
        </Modal>
      </>
    )
  }

  return (
    <>
      { 
        type === 'add' ?  modalAdd()  : 
        type === 'more' ? modalMore() :
        type === 'edit' ? modalEdit() : modalDelete()
      }
    </>
  )
}

const mapStateToProps = (state) => ({
  enterpriseByID: state.enterpriseByID,
  editItem: state.editItem,
})

export default connect(mapStateToProps)(MyModal);
