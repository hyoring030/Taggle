import React, { useState } from "react";
import "./PostScrap.css";
import AddTagModal from "./AddTagModal";
//글쓰기 페이지 
const openModal = () => {

}

const PostHeader = () => {
    return (
        <div className="post-scrap-header">
                <div className="post-scrap-header-back">
                    <img src='/img/back_arrow.svg'/>
                </div>
                <div className="post-scrap-header-title">
                    <div className="post-scrap-header-title-text">포스트 작성</div>
                </div>
        </div>
    )
}

const PostContent = ({title, placeholder}) => {
    return (
        <div className="post-scrap-content">
            <div className="post-inputBox">
                <div className="post-inputBox-title">{title}</div>
                <input className="post-inputBox-content" placeholder={placeholder}/>
            </div>
        </div>
    )
}

const PostTag = ({ onOpenModal }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [tags, setTags] = useState(['태그1', '태그2', '태그3', '태그4']);

    const handleTagClick = () => {
        if (!isExpanded) {
            // 더 많은 태그 추가
            setTags([...tags, '태그5', '태그6', '태그7', '태그8']);
            setIsExpanded(true);
        } else {
            // '태그 추가' 버튼을 클릭하면 모달 열기
            onOpenModal();
        }
    };

    return (
        <div className="post-tag">
            <div className="post-tag-title">태그</div>
            <div className="post-tag-content">이 링크의 성격을 태그로 알려주세요</div>
            <div className="post-tag-content-tags">
                {tags.map((tag, index) => (
                    <div key={index} className="tag">{tag}</div>
                ))}
            </div>
            <div className="post-tag-find-tag" onClick={handleTagClick}>
                {isExpanded ? '태그 추가' : '태그 찾기'}
            </div>
        </div>
    )
}

const PostFinish = () => {
    return (
        <div className="post-finish">
            <div className="post-finish-title">작성 완료</div>
        </div>
    )
}

const PostScrap = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    return (
    <div className="post-scrap-container">
        <PostHeader />
        <div className="post-scrap-container-content">
            <PostContent title="제목" placeholder="제목은 생략할 수 있어요."/>
            <PostContent title="URL" placeholder="공유하고자 하는 링크를 적어주세요!"/>
            <PostTag onOpenModal={handleOpenModal} />
            <PostFinish />
        </div>
        {isModalOpen && 
            <AddTagModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default PostScrap;
