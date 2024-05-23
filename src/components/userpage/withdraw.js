import React, { useState, useEffect } from 'react';
import './withdraw.css';
import { useCookies } from 'react-cookie';
import Layout from '../layout/layout';
import { ReactComponent as XClose } from '../../assets/icon/x.svg';
import alertIcon from '../../assets/icon/alert.png';
import xIcon from '../../assets/icon/x.png'

function Withdraw({ onClose }) {
  const [inputValue, setInputValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [cookies] = useCookies(['user']);
  const userId = cookies.user?.id;

  const handleConfirmDelete = () => {
    if (inputValue === userId && isChecked) {
      alert('계정이 삭제되었습니다.');
      // 여기서 계정 삭제 로직 추가
      onClose();
    } else {
      alert('계정 삭제 확인을 위해 필드를 올바르게 입력하고 체크박스를 선택해주세요.');
    }
  };

  useEffect(() => {
    if (inputValue !== '' && isChecked) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [inputValue, isChecked]);

  return (
    <Layout>
      <div className="modal">
        <div className="modal-content">
          <button className="x-button" onClick={onClose}><img src={xIcon} alt="xIcon" className="xIcon" /></button>
          <div className="header">
            <h1>정말로 계정을 삭제할까요?</h1>
          </div>
          <p className='alertContent'>
            만약 계정을 삭제하면<b> 내 드라이브와 내 드라이브 하위의 모든 데이터가 영구적으로 삭제될 거예요.</b> 또한, 내가 소유권을 넘긴 워크스페이스의 일부 항목은 삭제되지 않을 수 있습니다.
          </p>
          <section className='input_userid'>
            <h2>확인을 위해 나의 이메일을 입력해주세요</h2>
            <div className='textfieldview'>
              <label className='text_label'>나의 계정 입력</label>
              <input 
                type="text" 
                placeholder={userId} 
                className='text_input' 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
              />
            </div>
            <div className='checkboxview'>
              <input 
                type="checkbox" 
                checked={isChecked} 
                onChange={(e) => setIsChecked(e.target.checked)} 
              />
              <label className='checkbox_label'><span>나의 모든 데이터가 삭제되는 것을 이해했습니다.</span></label>
            </div>
          </section>    
          <div className='statusMessage'>
            <p className="warning"><img src={alertIcon} alt="alertIcon" className="alertIcon" /> 이 작업은 취소할 수 없습니다.</p>
          </div>
          <div className='footer'>
            <button className="cancel-btn" onClick={onClose}>취소</button>
            <button className={`confirm-btn ${isButtonEnabled ? 'enabled' : ''}`} disabled={!isButtonEnabled} onClick={handleConfirmDelete}>계정 삭제</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Withdraw;
