import React from "react";
import '../../styles/modal-letter.css';

const Modal = (props) => {
  const { open, close } = props;

  return (
    <>
      <div className={open ? 'letter-modal-openModal letter-modal' : 'letter-modal'}>
      {open ? (
        <>
          <section className="letter-modal-section">
            <header className="letter-modal-header">
              <button className="letter-modal-close" onClick={close}>
                &times;
              </button>
            </header>
            <main className="letter-modal-main">
              <div className="message-unkki">
                <img className="message-unkki-img" src="../../img/unkki-hi.png" alt="hi"/>
              </div>
              <div>
                <div className="message-text">따뜻한 메시지 따뜻한 메시지 따뜻한 메시지 따뜻한 메시지 따뜻한 메시지 따뜻한 메시지 따뜻한 메시지</div>
                <div></div>
              </div>
            </main>
          </section>
        </>
      ) : null}
      </div>
    </>
  );
};

export default Modal;
