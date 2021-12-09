<template>
    <div class="list-warp">
        <div
            class="article-item-container"
            v-for="(item, i) in articlesList"
            :key="i"
            @click="routerLinkToDetail(item.article_id)"
        >
            <div class="item-header">
                <div class="user">{{ item.author_user_info.user_name }}</div>
                <div class="dividing"></div>
                <div class="date">
                    {{ item.article_info.ctime | Timer }}
                </div>
                <div class="dividing"></div>
                <div class="tag-list">
                    <a href="" target="_blank" class="tag">{{
                        item.category_info.first_category_name
                    }}</a>
                    <a href="" target="_blank" class="tag">{{
                        item.category_info.second_category_name
                    }}</a>
                </div>
            </div>
            <div class="item-main">
                <div
                    class="item-text"
                    :style="{
                        width:
                            item.article_info.cover_image == ''
                                ? '660px'
                                : '510px',
                    }"
                >
                    <div class="title">{{ item.article_info.title }}</div>
                    <div class="abstract">
                        {{ item.article_info.brief_content }}
                    </div>
                    <ul class="action-list">
                        <li class="action-item">
                            <i
                                style="
                                    background-image: url(https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/view.1eda8fa.png);
                                "
                            ></i>
                            <span>{{ item.article_info.view_count }}</span>
                        </li>
                        <li class="action-item">
                            <i
                                style="
                                    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ9SURBVHgB7VZNbtNQEP7GP7AkN8DcoJyA5gRNTwCR2kqsUm9YEKEaoZRl0hUSBLWcAHOCpjdIT1AfIewgTjzM+AccxwHXLRYS/STnvbyxZ743b34e8L+DcEMMhu+fERk7DLTAuAwRjjz3eVD1+xsROD75eARmr7AczDlsVyVhoCbeDt85mXHmqLtkbst0Ko9jk31aVU9tAgvYW7FxYNJ3D85eufuTOZtKYiZu3X4z/LBdRU9tAia4E0+YL7I1z+3OmPEpkWOrip7aBED0RAcb7K8KeBb/alD+LQIa+TI48kxfuAfTVSlVMlybgAafpN1RYgujopwIOzpGEhuogGuloTc8bd2j5TmS8/VfHu7t5uUaeCaRygORPaqi00JFJAVn2UuNa667xXfEeJZ+rePR+Kool7gIQg67+RpBJTvo5QMoZHPXxFLW8Tld2lhoUqMOfg/JlKjdT2Pnpwf0bDlx3worG1EnPlENF0m5OayO5+7NyjRLHXgMfCsNQhumrBviRfRAhnqyu0KAYXmpcX/BfKKekL+dvBIheOUddkuNK7QO6A43ycXDvolYr5OtGTnlD3VU41rVZLdfccvIipMYDdYINAHZZJyicgR+4wQ0hbVH6Px7RBeNE9BM0lGbVxorTRNImhcxf8mvNxcDafOywBM0TUCqqEa/I09QbF6NECDQdjKuN6hGCJSlX2MENqXfGgFKS6hlmA9wi7hvLJ/qWEy/DL96AfMlEXWkU/mD0XiCkjud7kRk56iOltwRYz3ShM7KXlhpx4PheBR3qxzS6zbSi0YtyOZe9919D38ioNC2vIDl6NyQC2bWtzWVomvf93gWwg7KXH+HfwY/AGsn+Lf3Dim6AAAAAElFTkSuQmCC);
                                "
                            ></i>
                            <span>{{ item.article_info.digg_count }}</span>
                        </li>
                        <li class="action-item">
                            <i
                                style="
                                    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKRSURBVHgB7VZNbtpQEJ55BlR15RvUOUHTG5ATJD1BQ9NU6gq8JKiKoyrJ0u2qUmkFOUGaE5TegJwg7gnqLRh7MvMwwiDbYHCUDZ9kHph5M9+bN38AO+zwzEAoiEv3xz4v/KAFiK/0S6J/qPCBoui+Y38cFlC3HgHH7Zk1FTXZUIt/mivEPVY6GFFw4difPNiWwNW3X+dLhj1iA3JqProXq7EQ8TVoz4A1147OWfPkAjYhcO1+twirt7FSEexPiG4+26cDyMEXt1s3AI7Z+LsZ4TEFB1newBzjf2B6Gi8kaqwyvEpHFgmVtjmxcTgm401R44I2G0M2KjpEV5W9KbG0koC+8znrt47d8GFDCAk+gJCQwNyvwqS1LLNwBbHbHuQ7G99bJ4rXgY4LRPGqz4T2koda8EAERl2zIrory7hArlBnDmdSDSbHyf8WrwDVNHKV0YOyQdGNXhAPMwlgnHKjaHQPJUNBOEjamL9fhI7SMt0/Q3uu08wjoJGWLk+FZQKefLyEwIKSETcxwTCbANFfWQLAIygZCFifrjkEQq73WgixCaUziHWi+p1JIC65Hj/mpdt1oCQkq2u7+f4uk4BAGo8minguFQy2hFRXvlonqTuXgK5aRLqHc/m8vXK7LdgCE6hYskolTGtqqWnYsU+dmITJrnCvv/7sOXKSDVCBiScrJgeVBHInIokDuYqEsB5KQqgMl7uk1A4DwrpCkFLLExL0x1HAWfXCr2H4X2TOWh+wEAGB7pBQcRITzgwymvmxEilcVtp+cX1cfs20Drv2VKyDSVUPI4Ij3lRPEfFJclzXEvIQlXhioZ4QYaNjn/Q3IrAMiQmDA0wB+QGEflr/ENK6xXOXFS8QRQdFx/YdnhyP1D0hcwr1KvEAAAAASUVORK5CYII=);
                                "
                            ></i>
                            <span>{{ item.article_info.comment_count }}</span>
                        </li>
                    </ul>
                </div>
                <div v-if="item.article_info.cover_image != ''">
                    <img
                        :src="item.article_info.cover_image"
                        class="item-image"
                        onerror="this.src = 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fcaa3249ec434bd096a353763a17efb8~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?'"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getArticles, getArticleById } from "../fake-api/index.js";
import { timeago } from "../utils/timeHandler.js";

export default {
    data() {
        return {
            articlesList: [],
            categoryId: 0,
            sortBy: "hot",
            offset: 0,
            limit: 10,
            flag: true, //触底加载开关
        };
    },
    created() {
        //初始化列表（第一次请求）
        this.getArticlesList(
            this.categoryId,
            this.sortBy,
            this.offset,
            this.limit
        );
    },
    mounted() {
        //添加鼠标滚动的监听事件
        window.addEventListener("scroll", this.handleScroll, true);

        // 往全局事件总线身上绑定一个自定义事件，用于切换'热门'和'最新'和'历史'
        this.$bus.$on("handleSortBy", (sortBy) => {
            if (sortBy != "history") {
                this.sortBy = sortBy; //设置文章排序方式
                this.articlesList = []; //将文章数组置空
                this.offset = 0; //清除分页
                this.getArticlesList(
                    this.categoryId,
                    this.sortBy,
                    this.offset,
                    this.limit
                );
            } else {
                this.sortBy = sortBy; //设置文章排序方式
                this.articlesList = []; //将文章数组置空
                this.offset = 0; //清除分页
                this.getHistoryArticles(); //调用方法获取浏览历史文章
            }
        });
        // 往全局事件总线身上绑定一个自定义事件，用于切换一级Tab
        this.$bus.$on("handleCategoryId", (index) => {
            this.categoryId = index;
            this.articlesList = []; //将文章数组置空
            this.offset = 0; //清除分页
            this.getArticlesList(
                this.categoryId,
                this.sortBy,
                this.offset,
                this.limit
            );
        });
    },
    methods: {
        //滚动触底加载新数据
        async handleScroll() {
            if (this.flag == false || this.sortBy == 'history') {
                return false;
            }
            let clientHeight = document.documentElement.clientHeight; //获取html的可视高度
            let scrollTop = document.documentElement.scrollTop; //获取html的滚动高度
            let scrollHeight = document.documentElement.scrollHeight; //获取文档的实际高度

            if (clientHeight + scrollTop >= scrollHeight - 1) {
                this.flag == false;
                this.getArticlesList(
                    this.categoryId,
                    this.sortBy,
                    this.offset,
                    this.limit
                );
                this.flag == true;
            }
        },
        //获取文章数据
        async getArticlesList(categoryId, sortBy, offset, limit) {
            const {
                data: { articles },
            } = await getArticles(categoryId, sortBy, offset, limit); //调用接口

            this.articlesList = [...this.articlesList, ...articles]; //存储数据
            this.offset++; //分页

            // console.log(this.articlesList);
            // console.log(this.articlesList[0].author_user_info.user_name);
            // console.log(this.articlesList[0].article_info.ctime);
            // console.log(this.articlesList[0].category_info.first_category_name);
            // console.log(this.articlesList[0].category_info.second_category_name);
            // console.log(this.articlesList[0].article_info.title);
            // console.log(this.articlesList[0].article_info.brief_content);
            // console.log(this.articlesList[0].article_info.cover_image);
            // console.log(this.articlesList[0].article_info.view_count);
            // console.log(this.articlesList[0].article_info.digg_count);
            // console.log(this.articlesList[0].article_info.comment_count);
        },
        //编程式路由跳转到文章详情页+历史记录功能
        routerLinkToDetail(article_id) {
            //往本地存储记录浏览信息-用于'历史'
            if (!localStorage.getItem("historyIdList")) {
                let historyIdList = [];
                historyIdList.unshift(article_id); //往数组的头部中添加第一个元素
                localStorage.setItem(
                    "historyIdList",
                    JSON.stringify(historyIdList)
                ); // 向缓存中存数组类型数据
            } else {
                let historyIdList = JSON.parse(
                    localStorage.getItem("historyIdList")
                ); //在缓存中取数据
                let index = historyIdList.indexOf(article_id);
                if (index != -1) {
                    //原本就有这条记录
                    //先将当前的这条记录移除
                    historyIdList.splice(index, 1);
                    //往数组的头部中添加一个元素
                    historyIdList.unshift(article_id);
                    // 向缓存中存数组类型数据
                    localStorage.setItem(
                        "historyIdList",
                        JSON.stringify(historyIdList)
                    );
                } else {
                    //新增一条
                    historyIdList.unshift(article_id); //往数组的头部中添加一个元素
                    // 向缓存中存数组类型数据
                    localStorage.setItem(
                        "historyIdList",
                        JSON.stringify(historyIdList)
                    );
                }
            }

            //路由跳转
            this.$router.push({
                name: "detail",
                query: {
                    article_id: article_id,
                },
            });
        },
        /* 获取浏览历史文章 */
        async getHistoryArticles() {
            let historyIdList = JSON.parse(
                localStorage.getItem("historyIdList")
            );
            let articlesList = []; //定义存储变量
            for (let articleId of historyIdList) {
                let data = await getArticleById(articleId);
                articlesList.push(data.data.article);
            }
            this.articlesList = articlesList; //赋值
        },
    },

    filters: {
        //对时间进行处理
        Timer: function (value) {
            let times = Number(value) * 1000;
            return timeago(times);
        },
    },
};
</script>

<style lang="less" scoped>
.list-warp {
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #f1f1f1;
}

.article-item-container {
    height: auto;
    // width: 660px;
    width: 700px;
    cursor: pointer;
    padding: 12px 20px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.item-header {
    display: flex;
    align-items: center;
}

.user {
    font-size: 13px;
    line-height: 22px;
    color: #4e5969;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
}
.date {
    position: relative;
    // padding: 0 10px;
    line-height: 22px;
    font-size: 13px;
    flex-shrink: 0;
    color: #86909c;
}
.tag-list,
.tag {
    display: flex;
    align-items: center;
}
.tag-list .tag {
    position: relative;
    flex-shrink: 0;
    font-size: 13px;
    line-height: 22px;
    padding: 0 8px;
    color: #86909c;
}
.tag-list .tag:not(:last-child):after {
    position: absolute;
    right: -1px;
    display: block;
    content: " ";
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #4e5969;
}
.tag-list .tag:hover {
    color: #007fff;
}

.item-main {
    display: flex;
    padding-bottom: 12px;
    border-bottom: 1px solid #e5e6eb;
    margin-top: 10px;
    width: 100%;
}

.item-text {
    flex: 1 1 auto;

    .title {
        display: flex;
        margin-bottom: 8px;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #1d2129;
        width: 100%;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }

    .abstract {
        color: #86909c;
        font-size: 13px;
        line-height: 22px;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }

    .action-list {
        display: flex;
        align-items: center;
        margin-top: 10px;

        .action-item {
            display: flex;
            // align-items: center;
            position: relative;
            margin-right: 20px;
            font-size: 13px;
            line-height: 20px;
            color: #4e5969;
            flex-shrink: 0;

            i {
                display: inline-block;
                width: 16px;
                height: 16px;
                background-size: 100%;
            }

            span {
                margin-left: 4px;
            }
        }
    }
}

.item-image {
    flex: 0 0 auto;
    width: 120px;
    height: 80px;
    margin-left: 24px;
    background-color: #fff;
    border-radius: 2px;
    position: relative;
    object-fit: cover;
}

.article-item-container:hover {
    background-color: #f4f5f5;
}

</style>