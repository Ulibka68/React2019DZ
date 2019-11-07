import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// Заготовка формы редактирования поста

class FormEdit extends React.Component {
  constructor (props)  {
    super(props);
    this.state = {modal : false};
  };

  toggle = () => this.setState(
      ({modal}) => ( {modal : !modal} )
    );

 render() {
  const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
  
  // eslint-disable-next-line
  const {buttonLabel,className} = this.props;
  
  return (
  <div>

    {/* Это запускающая кнопка     */}
    {/* <Button color="danger" onClick={this.toggle}>{buttonLabel}</Button> */}

    <Modal isOpen={this.state.modal} toggle={this.toggle} className={className}>
      <ModalHeader toggle={this.toggle} close={closeBtn}>Отредактируй элемент</ModalHeader>
      <ModalBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={this.toggle}>Отредактировать</Button>{' '}
        <Button color="secondary" onClick={this.toggle}>Отменить</Button>
      </ModalFooter>
    </Modal>
  </div>
 );
}
}


export default FormEdit;