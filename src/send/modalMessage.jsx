import React from "react";
import "../../styles/modal-message.css";

const ModalMessage = (props) => {
  const { open, close } = props;

  return (
    <>
      <div
        className={
          open ? "message-modal-openModal message-modal" : "message-modal"
        }
      >
        {open ? (
          <>
            <section className="message-modal-section">
              <div className="message-modal-area">
                <main className="message-modal-main">
                  <header className="message-modal-header">
                    <button className="message-modal-close" onClick={close}>
                      &times;
                    </button>
                  </header>
                  <div className="send-message-unkki">
                    <button className="unkki-img-button">&lt;</button>
                    <img
                      className="send-message-unkki-img"
                      src="../../img/unkki-hi.png"
                      alt="hi"
                    />
                    <button className="unkki-img-button">&gt;</button>
                  </div>
                  <div>
                    <textarea className="send-message-text" placeholder="따뜻한 메시지"></textarea>
                    <div></div>
                  </div>
                </main>
              </div>
              <button className="send-message-button">보내기</button>
            </section>
          </>
        ) : null}
      </div>
    </>
  );
};

export default ModalMessage;
