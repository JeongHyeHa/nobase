import React, { useState } from 'react';
import './withdraw.css';

function Withdraw({ onClose }) {
  const [inputValue, setInputValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleConfirmDelete = () => {
    if (inputValue === '계정' && isChecked) {
      alert('계정이 삭제되었습니다.');
      // 여기서 계정 삭제 로직을 추가하세요.
      onClose();
    } else {
      alert('계정 삭제 확인을 위해 필드를 올바르게 입력하고 체크박스를 선택해주세요.');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>정말로 계정을 삭제할까요?</h2>
        <p>계정 삭제시 내가 참여중인 워크스페이스의 내 드라이브와 내 드라이브의 모든 항목이 삭제될 거에요. 또한, 내가 소유권을 넘긴 워크스페이스의 일부 항목은 삭제되지 않을 수 있습니다.</p>
        <p>계정 삭제를 원하시면 아래에 '계정'을 입력해주세요.</p>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="계정"
        />
        <div>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label>내가 모든 데이터를 삭제되는 것에 동의합니다.</label>
        </div>
        <p className="warning">⚠️ 이 작업은 취소할 수 없습니다.</p>
        <button className="cancel-button" onClick={onClose}>취소</button>
        <button className="confirm-button" onClick={handleConfirmDelete}>계정 삭제</button>
      </div>
    </div>
  );
}

export default Withdraw;
