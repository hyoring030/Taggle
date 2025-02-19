import React from "react";
import "./PostScrap.css";

//글쓰기 페이지 
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

const PostTag = () => {
    return (
        <div className="post-tag">
            <div className="post-tag-title">태그</div>
            <div className="post-tag-content">이 링크의 성격을 태그로 알려주세요</div>
            <div className="post-tag-content-tags">
                <div className="tag">태그1</div>
                <div className="tag">태그2</div>
                <div className="tag">태그3</div>
            </div>
            <div className="post-tag-find-tag">태그 찾기</div>
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
    return (
    <div className="post-scrap-container">
        <PostHeader />
        <PostContent title="제목" placeholder="제목은 생략할 수 있어요."/>
        <PostContent title="URL" placeholder="공유하고자 하는 링크를 적어주세요!"/>
        <PostTag />
        <PostFinish />
    </div>
  );
};

export default PostScrap;
