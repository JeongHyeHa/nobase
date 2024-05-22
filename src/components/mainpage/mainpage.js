import './mainpage.css';
import React, { useState } from 'react';
import Layout from '../layout/layout';


const Sidebar = ({ show }) => {
    const style = { left: show ? '0' : '-250px' };
    return (
      <div className="sidebar" style={style}>
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
    );
  };
  
  const ProductList = () => {
    const products = ["중고 물품 1", "중고 물품 2", "중고 물품 3", "중고 물품 4"];
    return (
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product-item" key={index}>
            {product}
          </div>
        ))}
      </div>
    );
  };

const MainPage = () => {
    const [showCategory, setShowCategory] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Minimum swipe distance
    const minSwipeDistance = 50;

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > minSwipeDistance) {
            // Left swipe
            setShowCategory(false);
        } else if (touchEnd - touchStart > minSwipeDistance) {
            // Right swipe
            setShowCategory(true);
        }
        // Reset
        setTouchStart(null);
        setTouchEnd(null);
    };

    const toggleCategory = () => {
        setShowCategory(!showCategory);
    };
    
    // 카테고리 슬라이드 창이 왼쪽에서 오른쪽으로 나타나도록 스타일 설정
    const categoryStyle = {
        left: showCategory ? '0' : '-250px', // showCategory가 true면 왼쪽으로 0px만큼 이동하여 보이게 함, false면 왼쪽으로 -300px만큼 이동하여 숨김
    };
    
    return (
        <div className="main-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}>
            <Layout >
              <Sidebar show={showCategory} />
              <ProductList />
            </ Layout>
        </div>
    );
};

export default MainPage;