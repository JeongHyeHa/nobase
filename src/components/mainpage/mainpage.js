import './mainpage.css';
import React, { useState } from 'react'; // useState를 추가
import Header from '../../components/mainpage/header';
import Navigation from '../../components/mainpage/navigation';



const MainPage = () => {
    const [showCategory, setShowCategory] = useState(false);

    const toggleCategory = () => {
        setShowCategory(!showCategory);
    };
    
    // 카테고리 슬라이드 창이 왼쪽에서 오른쪽으로 나타나도록 스타일 설정
    const categoryStyle = {
        left: showCategory ? '0' : '-250px', // showCategory가 true면 왼쪽으로 0px만큼 이동하여 보이게 함, false면 왼쪽으로 -300px만큼 이동하여 숨김
    };
    
    return (
        <div className="main-container">
            <Header />
            <div className="sidebar" style={categoryStyle}>
                <ul>
                    <li><button>의류</button></li>
                    <li><button>신발</button></li>
                    <li><button>기프트카드</button></li>
                    <li><button>전자제품</button></li>
                    <li><button>책</button></li>
                    <li><button>생활용품</button></li>
                    <li><button>기타</button></li>
                </ul>
            </div>

            <main>
                <div className="product-list">
                    <div className="product-item">
                        {/* 중고 물품 1 */}
                    </div>
                    <div className="product-item">
                        {/* 중고 물품 2 */}
                    </div>
                    <div className="product-item">
                        {/* 중고 물품 3 */}
                    </div>
                    <div className="product-item">
                        {/* 중고 물품 4 */}
                    </div>
                    <div className="product-item">
                        {/* 중고 물품 4 */}
                    </div>
                    <div className="product-item">
                        {/* 중고 물품 4 */}
                    </div>
                </div>
            </main>
            <Navigation />
        </div>
    );
};

export default MainPage;