<template>
    <div class="container main-container">
        <div class="view column-view">
            <div class="main-area article-area shadow">
                <!-- 文章主体 -->
                <article class="article">
                    <!-- 作者信息 -->
                    <div class="author-info-block">
                        <a href="javascript:void(0);" class="avatar-link">
                            <img
                                :src="article.author_user_info.avatar_large"
                                alt=""
                                class="lazy avatar avatar"
                                onerror = "this.src = 'https://p6-passport.byteacctimg.com/img/mosaic-legacy/3795/3033762272~300x300.image'"
                            />
                        </a>
                        <div class="author-info-box">
                            <div class="author-name">
                                <a
                                    href="javascript:void(0);"
                                    class="username ellipsis"
                                >
                                    <span class="name">{{
                                        article.author_user_info.user_name
                                    }}</span>
                                    <span class="rank"
                                        ><img
                                            src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/f8d51984638784aff27209d38b6cd3bf.svg"
                                            alt="lv-5"
                                    /></span>
                                </a>
                            </div>
                            <div class="meta-box">
                                <time datetime="" class="time">{{
                                    article.article_info.ctime | timeFormat
                                }}</time>
                                <span class="views-count">
                                    阅读
                                    {{ article.article_info.view_count }}</span
                                >
                            </div>
                        </div>
                        <button class="follow-button">关注</button>
                    </div>
                    <!-- 首图 -->
                    <img
                        :src="article.article_info.cover_image"
                        :alt="article.article_info.title"
                        class="lazy article-hero"
                    />
                    <!-- 文章标题 -->
                    <h1 class="article-title">
                        {{ article.article_info.title }}
                    </h1>
                    <!-- 文章主要内容 -->
                    <div v-html="article.article_content"></div>
                </article>
                <!-- 分类及标签 -->
                <div class="tag-list-box">
                    <div class="tag-list">
                        <div class="tag-list-title">文章分类</div>
                        <a class="item">
                            <div class="tag-title">
                                {{ article.category_info.first_category_name }}
                            </div>
                        </a>
                    </div>
                    <div class="tag-list">
                        <div class="tag-list-title">文章标签</div>
                        <div class="tag-list-container">
                            <a class="item">
                                <div class="tag-title">
                                    {{
                                        article.category_info
                                            .first_category_name
                                    }}
                                </div>
                            </a>
                            <a class="item">
                                <div class="tag-title">
                                    {{
                                        article.category_info
                                            .second_category_name
                                    }}
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- 作者信息 -->
                <a href="javascript:void(0);">
                    <div class="footer-author-block">
                        <div class="author-info-block">
                            <a class="avatar-link">
                                <img
                                    :src="article.author_user_info.avatar_large"
                                    alt=""
                                    class="lazy avatar"
                                />
                            </a>
                            <div class="author-info-box">
                                <div class="profile-box">
                                    <a class="username ellipsis">
                                        <span
                                            class="name"
                                            style="max-width: 128px"
                                            >{{
                                                article.author_user_info
                                                    .user_name
                                            }}</span
                                        >
                                        <span class="rank"
                                            ><img
                                                src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/f8d51984638784aff27209d38b6cd3bf.svg"
                                                alt="lv-5"
                                        /></span>
                                    </a>
                                    <span class="position ellipsis">{{
                                        article.author_user_info.company
                                    }}</span>
                                </div>
                                <div class="meta-box">
                                    <a class="">
                                        <span class="count post-count"
                                            >发布了
                                            {{
                                                article.author_user_info
                                                    .post_article_count
                                            }}
                                            篇文章 ·
                                        </span>
                                        <span class="count"
                                            >获得点赞
                                            {{
                                                article.author_user_info
                                                    .got_digg_count
                                            }}
                                            ·
                                        </span>
                                        <span class="count"
                                            >获得阅读
                                            {{
                                                article.author_user_info
                                                    .got_view_count
                                            }}</span
                                        >
                                    </a>
                                </div>
                            </div>
                            <button class="follow-button follow">关注</button>
                        </div>
                    </div>
                </a>
                <!-- <hr /> -->
                <!-- 评论 -->
                <div class="container">
                    <!-- 发布评论区 -->
                    <div class="comment-form hasborder">
                        <div class="avatar-box">
                            <img
                                src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e30559a8dc5b1a0ea4b8b2a485d34018.svg"
                                alt=""
                                class="lazy avatar avatar"
                                data-src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e30559a8dc5b1a0ea4b8b2a485d34018.svg"
                            />
                        </div>
                        <div class="form-box">
                            <div class="auth-card">
                                <div class="input-box">
                                    <div
                                        class="rich-input empty"
                                        spellcheck="false"
                                        placeholder="输入评论（Enter换行，Ctrl + Enter发送）"
                                        disabled="disabled"
                                    ></div>
                                    <!-- contenteditable="true" -->
                                </div>
                            </div>
                            <div class="action-box">
                                <div class="submit">
                                    <button
                                        class="submit-btn"
                                        disabled="disabled"
                                    >
                                        发表评论
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 全部评论 -->
                    <div class="comment-list-wrapper">
                        <div class="title">
                            <span>全部评论 ({{ commentsTotal }})</span>
                            <!-- <div class="sort">
                                <div class="item active">最新</div>
                                <div class="divide"></div>
                                <div class="item">最热</div>
                            </div> -->
                        </div>
                        <div class="comment-list">
                            <div
                                class="comment"
                                v-for="item in commentList"
                                :key="item.comment_id"
                            >
                                <div class="popover-box user-popover popover">
                                    <a class="user-link">
                                        <!-- 用户头像 -->
                                        <img
                                            :src="item.user_info.avatar_large"
                                            alt=""
                                            class="lazy avatar avatar"
                                            onerror = "this.src = 'https://p6-passport.byteacctimg.com/img/mosaic-legacy/3795/3033762272~300x300.image'"
                                        />
                                    </a>
                                </div>
                                <div class="content-box">
                                    <!-- 一级评论区 -->
                                    <div class="comment-main">
                                        <div class="user-box">
                                            <div
                                                class="popover-box user-popover"
                                            >
                                                <a class="username">
                                                    <!-- 用户姓名 -->
                                                    <span class="name">{{
                                                        item.user_info.user_name
                                                    }}</span>
                                                </a>
                                            </div>
                                            <span class="divide"></span>
                                            <span class="position">{{
                                                item.user_info.job_title
                                            }}</span>
                                            <span
                                                class="divide"
                                                :style="{
                                                    display: item.user_info
                                                        .job_title
                                                        ? ''
                                                        : 'none',
                                                }"
                                            ></span>
                                            <time class="time">{{
                                                item.comment_info.ctime | Timer
                                            }}</time>
                                        </div>
                                        <!-- 评论内容 -->
                                        <div class="content">
                                            {{
                                                item.comment_info
                                                    .comment_content
                                            }}
                                        </div>
                                        <div class="action-box">
                                            <div class="item dig-item">
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="#86909c"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class=""
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M8.89171 0.830428L9.01333 0.887423C9.82397 1.27824 11.0012 2.06718 11.0012 3.33376C11.0012 3.83594 10.7783 4.50196 10.3324 5.33182H12.8585C14.8478 5.33182 15.3046 7.08773 14.8478 8.40345L12.8585 13.6402C12.6904 14.2493 12.1306 14.6718 11.4918 14.6718H3.32843V5.33182H4.69308L7.65979 1.1115C7.84711 0.813472 8.35277 0.584994 8.89171 0.830428ZM2.33333 5.33268V14.666H1V5.33268H2.33333ZM8.55916 2.15072L5.3856 6.66528H4.66176V13.3386H11.4918C11.5331 13.3386 11.5653 13.3143 11.5732 13.2856L11.5899 13.2253L13.5938 7.94998C13.8572 7.17389 13.5945 6.66528 12.8585 6.66528H8.10231L9.15785 4.70085C9.50885 4.0476 9.66789 3.57253 9.66789 3.33389C9.66789 2.94703 9.2534 2.50946 8.55916 2.15072Z"
                                                    ></path>
                                                </svg>
                                                <span
                                                    :style="{
                                                        display:
                                                            item.comment_info
                                                                .digg_count == 0
                                                                ? ''
                                                                : 'none',
                                                    }"
                                                    >点赞</span
                                                >
                                                <span
                                                    :style="{
                                                        display:
                                                            item.comment_info
                                                                .digg_count != 0
                                                                ? ''
                                                                : 'none',
                                                    }"
                                                    >{{
                                                        item.comment_info
                                                            .digg_count
                                                    }}</span
                                                >
                                            </div>
                                            <div class="item">
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="#86909c"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class=""
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M14 1C14.3682 1 14.6667 1.29848 14.6667 1.66667V12.3333C14.6667 12.7015 14.3682 13 14 13H10.5924L8.44602 14.932C8.19248 15.1601 7.8076 15.1601 7.55406 14.932L5.40737 13H2.00004C1.63185 13 1.33337 12.7015 1.33337 12.3333V1.66667C1.33337 1.29848 1.63185 1 2.00004 1H14ZM13.3334 2.33333H2.6667V11.6667H5.919L8 13.5395L10.0807 11.6667H13.3334V2.33333ZM11.3334 6.66667C11.3334 6.48257 11.1841 6.33333 11 6.33333H5.00003C4.81594 6.33333 4.6667 6.48257 4.6667 6.66667V7.33333C4.6667 7.51743 4.81594 7.66667 5.00003 7.66667H11C11.1841 7.66667 11.3334 7.51743 11.3334 7.33333V6.66667Z"
                                                    ></path>
                                                </svg>
                                                <span>回复</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- 二级评论区 -->
                                    <div class="subcomment-wrapper">
                                        <div class="sub-comment-list">
                                            <div>
                                                <!-- v-for下面这个 -->
                                                <div
                                                    class="subcomment"
                                                    v-for="subComment in item.reply_infos"
                                                    :key="subComment.reply_id"
                                                >
                                                    <div class="popover-box">
                                                        <a class="user-link"
                                                            ><img
                                                                :src="
                                                                    subComment
                                                                        .user_info
                                                                        .avatar_large
                                                                "
                                                                onerror = "this.src = 'https://p6-passport.byteacctimg.com/img/mosaic-legacy/3795/3033762272~300x300.image'"
                                                                alt=""
                                                                class="
                                                                    lazy
                                                                    avatar
                                                                "
                                                        /></a>
                                                    </div>
                                                    <div class="content-box">
                                                        <div
                                                            class="
                                                                content-wrapper
                                                            "
                                                        >
                                                            <div
                                                                class="user-box"
                                                            >
                                                                <div
                                                                    class="
                                                                        popover-box
                                                                        user-popover
                                                                    "
                                                                >
                                                                    <a
                                                                        class="
                                                                            username
                                                                        "
                                                                    >
                                                                        <span
                                                                            class="
                                                                                name
                                                                            "
                                                                            >cheers</span
                                                                        >
                                                                    </a>
                                                                </div>
                                                                <span
                                                                    class="
                                                                        divide
                                                                    "
                                                                ></span>
                                                                <time
                                                                    class="time"
                                                                    >{{
                                                                        subComment
                                                                            .reply_info
                                                                            .ctime
                                                                            | Timer
                                                                    }}</time
                                                                >
                                                            </div>
                                                            <div
                                                                class="content"
                                                            >
                                                                {{
                                                                    subComment
                                                                        .reply_info
                                                                        .reply_content
                                                                }}
                                                            </div>
                                                            <div
                                                                class="
                                                                    action-box
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        item
                                                                        dig-item
                                                                    "
                                                                >
                                                                    <svg
                                                                        width="16"
                                                                        height="16"
                                                                        viewBox="0 0 16 16"
                                                                        fill="#86909c"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        class=""
                                                                    >
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            clip-rule="evenodd"
                                                                            d="M8.89171 0.830428L9.01333 0.887423C9.82397 1.27824 11.0012 2.06718 11.0012 3.33376C11.0012 3.83594 10.7783 4.50196 10.3324 5.33182H12.8585C14.8478 5.33182 15.3046 7.08773 14.8478 8.40345L12.8585 13.6402C12.6904 14.2493 12.1306 14.6718 11.4918 14.6718H3.32843V5.33182H4.69308L7.65979 1.1115C7.84711 0.813472 8.35277 0.584994 8.89171 0.830428ZM2.33333 5.33268V14.666H1V5.33268H2.33333ZM8.55916 2.15072L5.3856 6.66528H4.66176V13.3386H11.4918C11.5331 13.3386 11.5653 13.3143 11.5732 13.2856L11.5899 13.2253L13.5938 7.94998C13.8572 7.17389 13.5945 6.66528 12.8585 6.66528H8.10231L9.15785 4.70085C9.50885 4.0476 9.66789 3.57253 9.66789 3.33389C9.66789 2.94703 9.2534 2.50946 8.55916 2.15072Z"
                                                                        ></path>
                                                                    </svg>
                                                                    <span
                                                                        :style="{
                                                                            display:
                                                                                subComment
                                                                                    .reply_info
                                                                                    .digg_count ==
                                                                                0
                                                                                    ? ''
                                                                                    : 'none',
                                                                        }"
                                                                        >点赞</span
                                                                    >
                                                                    <span
                                                                        :style="{
                                                                            display:
                                                                                subComment
                                                                                    .reply_info
                                                                                    .digg_count !=
                                                                                0
                                                                                    ? ''
                                                                                    : 'none',
                                                                        }"
                                                                        >{{
                                                                            item
                                                                                .comment_info
                                                                                .digg_count
                                                                        }}</span
                                                                    >
                                                                </div>
                                                                <div
                                                                    class="item"
                                                                >
                                                                    <svg
                                                                        width="16"
                                                                        height="16"
                                                                        viewBox="0 0 16 16"
                                                                        fill="#86909c"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        class=""
                                                                    >
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            clip-rule="evenodd"
                                                                            d="M14 1C14.3682 1 14.6667 1.29848 14.6667 1.66667V12.3333C14.6667 12.7015 14.3682 13 14 13H10.5924L8.44602 14.932C8.19248 15.1601 7.8076 15.1601 7.55406 14.932L5.40737 13H2.00004C1.63185 13 1.33337 12.7015 1.33337 12.3333V1.66667C1.33337 1.29848 1.63185 1 2.00004 1H14ZM13.3334 2.33333H2.6667V11.6667H5.919L8 13.5395L10.0807 11.6667H13.3334V2.33333ZM11.3334 6.66667C11.3334 6.48257 11.1841 6.33333 11 6.33333H5.00003C4.81594 6.33333 4.6667 6.48257 4.6667 6.66667V7.33333C4.6667 7.51743 4.81594 7.66667 5.00003 7.66667H11C11.1841 7.66667 11.3334 7.51743 11.3334 7.33333V6.66667Z"
                                                                        ></path>
                                                                    </svg>
                                                                    回复
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- 查看更多回复 -->
                                            <div
                                                class="fetch-more"
                                                style="display: none"
                                            >
                                                <span class="fetch-more-comment"
                                                    >查看更多回复
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class=""
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            clip-rule="evenodd"
                                                            d="M8 10.5759L13.4212 5.15476C13.5513 5.02459 13.7624 5.02459 13.8926 5.15476L14.364 5.62616C14.4941 5.75634 14.4941 5.96739 14.364 6.09757L8.4714 11.9901C8.21106 12.2505 7.78894 12.2505 7.5286 11.9901L1.63604 6.09757C1.50586 5.96739 1.50586 5.75634 1.63604 5.62616L2.10744 5.15476C2.23762 5.02459 2.44867 5.02459 2.57885 5.15476L8 10.5759Z"
                                                            fill="#4E5969"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="more"
                                v-if="showMoreCommentButton"
                                @click="getMoreComment()"
                            >
                                查看全部 {{ commentsTotal }} 条回复<svg
                                    data-v-0f4877d6=""
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    class=""
                                >
                                    <path
                                        data-v-0f4877d6=""
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M8 10.5759L13.4212 5.15476C13.5513 5.02459 13.7624 5.02459 13.8926 5.15476L14.364 5.62616C14.4941 5.75634 14.4941 5.96739 14.364 6.09757L8.4714 11.9901C8.21106 12.2505 7.78894 12.2505 7.5286 11.9901L1.63604 6.09757C1.50586 5.96739 1.50586 5.75634 1.63604 5.62616L2.10744 5.15476C2.23762 5.02459 2.44867 5.02459 2.57885 5.15476L8 10.5759Z"
                                        fill="#4E5969"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getArticleById, getCommentsByArticleId } from "../fake-api/index.js";
import { formatDate } from "../utils/timeFormat.js";
import { timeago } from "../utils/timeHandler.js";

export default {
    name: "Detail",
    data() {
        return {
            articleId: "",
            article: {},
            commentList: [],
            commentsTotal: 0,
            showMoreCommentButton: true,
        };
    },
    methods: {},
    created() {
        //接收List路由传来的article_id
        this.articleId = this.$route.query.article_id;
        //调用方法获取文章内容
        this.getArticleById(this.articleId);
        //调用方法获取文章评论
        this.getComments(this.articleId);
    },
    methods: {
        //获取文章内容
        async getArticleById(articleId) {
            const data = await getArticleById(articleId);
            this.article = data.data.article;
            // console.log(this.article);
        },
        //获取文章评论
        async getComments(articleId) {
            const data = await getCommentsByArticleId(articleId, 0, 10);
            this.commentList = data.data.comments;
            this.commentsTotal = data.total;
            console.log(this.commentList);
        },
        //获取更多评论
        async getMoreComment() {
            const data = await getCommentsByArticleId(
                this.articleId,
                10,
                this.commentsTotal - 10
            );

            this.commentList = [...this.commentList, ...data.data.comments];

            this.showMoreCommentButton = false;
        },
    },
    //过滤器
    filters: {
        //对时间进行处理
        timeFormat: function (value) {
            let times = Number(value) * 1000;
            let date = new Date(times);
            return formatDate(date);
        },

        Timer: function (value) {
            let times = Number(value) * 1000;
            return timeago(times);
        },
    },
};
</script>

<style lang="less" scoped>
.container {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 660px;
}
.view {
    margin-top: 6.6rem;
}
.column-view {
    padding: 0 0 8rem;
}
.main-area {
    position: relative;
    width: 700px;
    // 这里的宽度决定
    max-width: 100%;
    background-color: #fff;
    border-radius: 2px;
    box-sizing: border-box;
}
.article-area {
    margin-bottom: 1.5rem;
    padding: 0 2rem;
}
.shadow {
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
}

.article {
    position: relative;
    margin-bottom: 3rem;
    padding: 2rem 0 0;
    z-index: 1;

    .article-hero {
        margin-bottom: 2rem;
        width: 100%;
    }

    .article-title {
        margin: 0.67em 0;
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 1.5;
    }
}

.author-info-block {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    .avatar-link {
        font-size: 0;
        text-decoration: none;
        cursor: pointer;
        color: #909090;

        .avatar {
            flex: 0 0 auto;
            margin-right: 1rem;
            width: 3.333rem;
            height: 3.333rem;
            border-radius: 50%;
            background-position: 50%;
            background-repeat: no-repeat;
        }
    }

    .author-info-box {
        min-width: 0;
        flex-grow: 1;
        flex: 1;
        height: 43px;

        .author-name {
            height: 22px;
            .username {
                display: inline-block;
                width: 100%;
                font-size: 1.3rem;
                font-weight: 700;
                color: #333;
                .name {
                    display: inline-block;
                    vertical-align: top;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }

    .meta-box {
        font-size: 1.1rem;
        color: #909090;
        margin-top: 0.5rem;
        .time {
            letter-spacing: 1px;
        }
        .views-count {
            margin-left: 0.5em;
        }
    }

    .follow-button {
        margin: 0 0 0 auto;
        padding: 0;
        width: 55px;
        height: 26px;
        font-size: 13px;
        border: 1px solid #6cbd45;
        color: #6cbd45;
        background-color: #fff;
        cursor: pointer;
    }

    .profile-box {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        align-items: baseline;
        font-size: 1.1rem;
        color: #909090;
    }

    .username {
        display: inline-block;
        max-width: 100%;
        font-size: 1.3rem;
        margin-right: 0.5rem;
        font-weight: 700;
        color: #333;
    }

    .position {
        max-width: 400px;
    }
}
.lazy {
    position: relative;
    -o-object-fit: cover;
    object-fit: cover;
}
.ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.rank {
    margin-left: 0.33rem;
    vertical-align: middle;
}
// img {
//     width: auto;
//     height: auto;
// }

.tag-list-box {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-bottom: 2rem;
    padding-top: 2rem;
    border-top: 1px solid #e5e6eb;

    .tag-list {
        display: flex;
        font-size: 1.167rem;
        line-height: 2.286;

        .tag-list-title {
            flex-shrink: 0;
            margin-right: 1rem;
            font-weight: 500;
        }
        .item {
            display: flex;
            align-items: center;
            margin: 0 0.667rem 1rem 0;
            padding: 0 0.667rem;
            border-radius: 2px;
            background-color: #fafafa;
            color: #4e5969;

            .tag-title {
                white-space: nowrap;
                line-height: 2.667rem;
            }
        }

        .tag-list-container {
            display: flex;
            flex-wrap: wrap;
        }
    }
    .tag-list:first-child:not(:last-child) {
        margin-right: 1.42rem;
        flex-shrink: 0;
    }
}

.footer-author-block {
    padding: 15px 17px;
    border-radius: 2px;
    background-color: #f4f5f5;
    margin-bottom: 2.67rem;

    .author-info-block {
        display: flex;
        align-items: center;
        margin-bottom: 0px;
    }
}

//评论区
.hasborder {
    position: relative;
}
.comment-form {
    display: flex;
    position: relative;
    padding-top: 32px;
    padding-bottom: 28px;
    border-radius: 2px;
}
.avatar-box {
    flex: 0 0 auto;
    .avatar {
        margin-right: 16px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }
}

.avatar {
    display: inline-block;
    position: relative;
    background-size: cover;
    background-color: #eee;
    background-position: 50%;
    background-repeat: no-repeat;
}

.form-box {
    flex: 1 1 auto;
    position: relative;

    .input-box {
        font-size: 0;
        transition: all 0.3s;
        background-color: #f4f5f5;
        border: 1px solid #f4f5f5;
        background: #f4f5f5;
        border-radius: 2px;
    }

    .rich-input {
        position: relative;
        padding: 8px 12px;
        color: #1d2129;
        outline: none;
        min-height: 72px;
        box-sizing: border-box;
        line-height: 20px;
        font-size: 14px;
        resize: both;
        // width: 602px;
    }
    .rich-input:before {
        content: attr(placeholder);
        position: absolute;
        pointer-events: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        color: #86909c;
    }

    .action-box {
        display: flex;
        align-items: center;
        margin-top: 12px;

        .submit {
            flex: 0 0 auto;
            // margin-left: auto;
            margin-left: 512px;

            .submit-btn {
                // background: #c9cdd4;
                // background: #1e80ff;
                background: #abcdff;
                flex: 0 0 auto;
                width: 92px;
                text-align: center;
                font-size: 14px;
                line-height: 36px;
                border-radius: 2px;
                border: 1px #abcdff solid;
                color: #fff;
                padding: 0;
                cursor: pointer;
            }
        }
    }
}
.auth-card {
    position: relative;
}

.hasborder:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -24px;
    right: -24px;
    display: block;
    height: 1px;
    background: #e5e6eb;
}

//展示评论区
.comment-list-wrapper {
    display: block;
    padding-top: 28px;
    padding-bottom: 8px;
}
.title {
    position: relative;
    line-height: 24px;
    font-weight: 500;
    font-size: 18px;
    color: #1d2129;
    width: 100%;
    padding-bottom: 15px;
}
.sort {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 14px;
    color: #4e5969;
    font-weight: 400;
    cursor: pointer;

    .active {
        color: #1e80ff;
    }

    .divide {
        width: 1px;
        height: 14px;
        background: #e5e6eb;
        margin: 0 16px;
    }
}
.sort,
.title {
    display: flex;
    align-items: center;
}

.comment-list {
    .comment {
        display: flex;
        padding: 12px 0;
        border-bottom: 1px solid #e5e6eb;
        //评论-左侧（头像部分）
        .popover {
            height: 33px;
        }
        .popover-box {
            display: inline;
        }
        .user-link {
            flex: 0 0 auto;
            .avatar {
                width: 32px;
                height: 32px;
                border-radius: 50%;
            }
        }
        //评论-右侧（一级内容部分）
        .content-box {
            flex: 1 1 auto;
            margin-left: 16px;

            .comment-main {
                position: relative;
            }

            .content {
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                font-size: 14px;
                line-height: 22px;
                color: #4e5969;
                margin-top: 8px;
                -webkit-line-clamp: 6;
            }

            .action-box {
                margin-top: 8px;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;

                .item {
                    margin-right: 16px;
                    line-height: 20px;
                    font-size: 12px;
                    cursor: pointer;
                    color: #86909c;

                    svg {
                        fill: #86909c;
                        margin-right: 4px;
                    }
                }
            }

            .action-box,
            .action-box .item {
                display: flex;
                align-items: center;
            }

            .user-box {
                display: flex;
                align-items: center;
                position: relative;

                .username {
                    display: flex;
                    align-content: center;
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #2e3135;
                    .name {
                        font-weight: 500;
                        font-size: 14px;
                        color: #1d2129;
                        // max-width: 90px;
                        display: inline-block;
                        vertical-align: top;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }

            .position {
                max-width: 160px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: break-all;
                font-size: 14px;
                color: #86909c;
            }

            .divide {
                display: block;
                width: 1px;
                height: 14px;
                background: #e5e6eb;
                margin: 0 12px;
            }

            .time {
                font-size: 14px;
                color: #86909c;
            }
        }
        //评论-右侧（二级内容部分）
        .subcomment-wrapper {
            margin-top: 12px;
        }
        .sub-comment-list {
            padding: 0 12px;
            background: #f7f8fa;
            border-radius: 2px;

            .subcomment {
                display: flex;
                padding: 12px 0;
                border-bottom: 1px solid #e5e6eb;

                .popover-box {
                    display: inline;
                }

                .content-box {
                    flex: 1 1 auto;
                    margin-left: 16px;

                    .content-wrapper {
                        position: relative;
                    }
                }
            }
        }
    }

    .more {
        text-align: center;
        color: #4e5969;
        font-size: 14px;
        height: 22px;
        padding-top: 20px;
        padding-bottom: 10px;
        cursor: pointer;

        margin: 0;
        vertical-align: middle;

        svg {
            display: inline-block;
            width: 17px;
            height: 17px;
            line-height: 25px;
            background-size: cover;
            vertical-align: top;
            margin-left: 16px;
        }
    }
}
</style>