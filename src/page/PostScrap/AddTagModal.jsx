import "./AddTagModal.css";

const AddTagModal = ({ onClose }) => {
    return (
        <div className="add-tag-modal">
            <div className="add-tag-modal-content">
                <div className="add-tag-modal-content-header">
                    <div className="add-tag-modal-content-header-title">태그 추가</div>
                    <div className="add-tag-modal-content-header-done" onClick={onClose}>닫기</div>
                </div>
                <div className="add-tag-modal-content-body">
                    <div className="add-tag-modal-content-body-sub">원하시는 태그가 없는 경우, 신청을 받아서 추가하고있어요.<br/>
                    원하는 태그를 입력한 후, 신청해주세요! 
                    </div>
                    <div className="add-tag-modal-content-body-input">
                        <input className="add-tag-modal-content-body-input-input" type="text" placeholder="원하시는 태그" />
                        <button className="add-tag-modal-content-body-input-button">신청</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTagModal;