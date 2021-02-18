import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.querySelector('#modal');
const portalElement = (children: JSX.Element) => {
  return modalRoot ? ReactDOM.createPortal(children, modalRoot) : null;
};

interface IModalParams {
  title: string;
  actions: JSX.Element;
  onDismiss: () => void
}

const modalContent = ({ title, actions, onDismiss }: IModalParams) => (
  <div
    className="modal d-block"
    style={{ backgroundColor: 'rgba(0, 0, 0, .5)' }}
    onClick={onDismiss}
  >
    <div className="modal-dialog" onClick={e => e.stopPropagation()}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{title}</h5>
          <button
            type="button"
            className="btn close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={onDismiss}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div className="modal-footer">
         {actions}
        </div>
      </div>
    </div>
  </div>
);

const Modal: React.FC<IModalParams> = (params: IModalParams) => {
  return portalElement(modalContent(params));
};

export default Modal;
