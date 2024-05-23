import React, { useState } from 'react';
import './writepage.css';
import axios from 'axios';
import Layout from '../layout/layout';

function WritePage() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const [categories, setCategories] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !content || !price || !image || categories.length === 0) {
            alert('모든 필드를 채워주세요.');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('price', price);
        formData.append('image', image);

        // 카테고리 배열을 쉼표로 구분된 문자열로 변환하여 FormData에 추가
        formData.append('categories', categories.join(','));

        try {
            const response = await axios.post('http://localhost:8080/api/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response.data);
            alert('제품 등록에 성공했습니다.');
        } catch (error) {
            if (error.response) {
                console.error(error.response.data);
                alert('제품 등록에 실패했습니다: ' + error.response.data);
            } else if (error.request) {
                console.error('네트워크 에러가 발생했습니다.');
                alert('네트워크 에러가 발생했습니다.');
            } else {
                console.error('에러가 발생했습니다.', error.message);
                alert('에러가 발생했습니다: ' + error.message);
            }
        }
    };

    const handlePriceChange = (e) => {
        const re = /^[0-9\b]+$/; // 정규식을 사용하여 숫자만 입력 받음
        if (e.target.value === '' || re.test(e.target.value)) {
            setPrice(e.target.value);
        }
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        if (e.target.checked) {
            setCategories([...categories, category]);
        } else {
            setCategories(categories.filter((c) => c !== category));
        }
    };

    return (
        <Layout >
            <div className="writepage-container">
                <div className="write-page">
                    <form className="write-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">제목</label>
                            <input
                                type="text"
                                placeholder="제목을 입력해 주세요"
                                id="title"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">내용</label>
                            <textarea
                                id="content"
                                placeholder="내용을 입력해 주세요"
                                name="content"
                                rows="5"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="form-control"
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">가격</label>
                            <input
                                type="text"
                                placeholder="가격을 입력해 주세요"
                                id="price"
                                name="price"
                                value={price}
                                onChange={handlePriceChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">이미지</label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="form-control-file"
                            />
                        </div>
                        <div className="form-group">
                            <label>카테고리</label>
                            <div>
                                <input
                                    type="checkbox"
                                    id="textbook"
                                    name="category"
                                    value="textbook"
                                    onChange={handleCategoryChange}
                                />
                                <label htmlFor="textbook">교재</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="household"
                                    name="category"
                                    value="household"
                                    onChange={handleCategoryChange}
                                />
                                <label htmlFor="household">생활용품</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="gift"
                                    name="category"
                                    value="gift"
                                    onChange={handleCategoryChange}
                                />
                                <label htmlFor="gift">기프티콘</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="electronics"
                                    name="category"
                                    value="electronics"
                                    onChange={handleCategoryChange}
                                />
                                <label htmlFor="electronics">전자기기</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="clothing"
                                    name="category"
                                    value="clothing"
                                    onChange={handleCategoryChange}
                                />
                                <label htmlFor="clothing">의류</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="shoes"
                                    name="category"
                                    value="shoes"
                                    onChange={handleCategoryChange}
                                />
                                <label htmlFor="shoes">신발</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="others"
                                    name="category"
                                    value="others"
                                    onChange={handleCategoryChange}
                                />
                                <label htmlFor="others">기타</label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            글쓰기
                        </button>
                    </form>
                </div>
            </div>
        </ Layout>
    );
}

export default WritePage;