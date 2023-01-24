import React from 'react';

const ConformationModal = ({title,message,deleteDoc,deletingModal,deleting,closeModal}) => {
    return (
        <div>
            {/* The button to open modal */}
                

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="conformation-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                    <label onClick={() => deletingModal(deleting)} htmlFor="conformation-modal" className="btn btn-outline">{deleteDoc}</label>
                    <label onClick={closeModal} htmlFor="conformation-modal" className="btn btn-outline">Cancle</label>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default ConformationModal;