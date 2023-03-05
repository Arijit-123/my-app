import React from 'react';
import './Modal.css';

const Modal = ({ open, onClose }) => {
    console.log(open);
  if (!open) {
    return null
  }
 
  return (
    <div  className='overlay'>
      <div
        onClick={(e) => {
          
        }}
        className='modalContainer'
      >
        {/* <img src={nft} alt='/' /> */}
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}   >
        
            X 
          </p>
          <div className='content'>
            <p>Do you want a</p>
            <h1>$20 CREDIT</h1>
            <p>for your first tade?</p>
          </div>
          <div className='btnContainer'>
            <button className='btnPrimary'>
              <span className='bold'>YES</span>, I love NFT's
            </button>
            <button className='btnOutline'>
              <span className='bold'>NO</span>, thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;