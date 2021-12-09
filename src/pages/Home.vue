<template>
    <div class="home-container">
        <div class="view">
            <nav class="home-nav">
                <div class="nav-list">
                    <router-link to="" class="nav-item router" v-for="(item,i) in cateList" :key="item.category_id" 
                    @click.native="firstTabActive(i)" :class="firstTabActiveIndex == item.category_id ? 'active' : ''">
                        {{item.category_name}}
                    </router-link>
                </div>
            </nav>
            <div>
                <!-- 二级tab栏 + home的主体 -->
                <nav class="tag-container">
                    <!-- 二级tab栏 -->
                    <ul class="tag-list">
                        <li class="tag-item tag" v-for="(item,i) in secondCateList" :key="item.category_id"
                            @click="secondTabActive(i)" :class="secondTabActiveIndex == i ? 'active' : ''"
                        >{{item.category_name}}</li>
                    </ul>
                </nav>
                <main class="home-main">
                    <div class="main-left">
                        <div class="main-left-nav">
                            <ul>
                                <li class="main-nav-item" @click="handleSortBy('hot')">
                                    <router-link to="/" :class="thirdTabActive == 'hot' ? 'active' : ''">
                                        热门
                                    </router-link>
                                </li>
                                <li class="main-nav-item" @click="handleSortBy('new')">
                                    <router-link to="/" :class="thirdTabActive == 'new' ? 'active' : ''">
                                        最新
                                    </router-link>
                                </li>
                                <li class="main-nav-item" @click="handleSortBy('history')" >
                                    <router-link to="/" :class="thirdTabActive == 'history' ? 'active' : ''">
                                        历史
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                        <router-view></router-view>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
import { getCategories } from "../fake-api/index.js";
export default {
    name: "Home",
    data() {
        return {
            firstTabActiveIndex : 0,
            secondTabActiveIndex : 0,
            thirdTabActive : 'hot',
            cateList: [],
            secondCateList : []
        };
    },
    async created() {
        const data = await getCategories();
        this.cateList = data.data.categories;
        // console.log(this.cateList);
    },
    methods: {
        firstTabActive(index){
            this.firstTabActiveIndex = index //将当前一级Tab的下标赋值
            this.secondTabActiveIndex = 0 //将二级tab的下标重新置为0

            if(this.cateList[index].children){ //判断有无二级分类，有则进行赋值，无则将置空
                this.secondCateList = this.cateList[index].children;
            }
            else{
                this.secondCateList = []
            }

            //触发全局事件总线身上的自定义事件，向list传递数据
            this.$bus.$emit('handleCategoryId',index)
        },
        secondTabActive(index){
            this.secondTabActiveIndex = index
            // console.log(index);
        },
        handleSortBy(sortBy){
            //用于设置active
            this.thirdTabActive = sortBy;
            //触发全局事件总线身上的自定义事件，向list传递数据
            this.$bus.$emit('handleSortBy',sortBy)
        },
    },
};
</script>

<style lang="less" scoped>
// .container {
//     display: flex;
//     align-items: center;
//     height: 100%;
// }
.home-container {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 960px;
    display: block;

    .view {
        margin-top: 9.6rem;

        .home-nav {
            left: 0;
            background-color: #fff;
            position: fixed;
            top: 5rem;
            width: 100%;
            height: 3.833rem;
            z-index: 100;
            box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
            transition: all 0.2s;
            transform: translateZ(0);

            .nav-list {
                max-width: 960px;
                height: 100%;
                margin: auto;
                display: flex;
                align-items: center;
                line-height: 1;
                position: relative;

                .nav-item {
                    height: 100%;
                    align-items: center;
                    display: flex;
                    flex-shrink: 0;
                    font-size: 1.16rem;
                    padding: 0 1rem;
                    position: relative;
                    cursor: pointer;
                }

                .nav-item:first-child {
                    padding: 0 1rem 0 0;
                }
            }
        }

        .tag-list {
            display: flex;
            flex-wrap: wrap;
            height: auto;
            position: relative;

            .tag-item {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 2rem;
                background-color: #fff;
                border-radius: 1rem;
                font-size: 1.1rem;
                color: #8a9aa9;
                padding: 0 0.83rem;
                margin-right: 1rem;
                margin-bottom: 1rem;
                position: relative;
                cursor: pointer;
                text-align: center;
            }

            // .tag-item:hover {
            //     color: #007fff;
            // }

            .active {
                background-color: #007fff;
                color: #fff;
                box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%),
                    0 1px 2px 0 rgb(0 0 0 / 5%);
            }
        }

        .home-main {
            margin-top: 0.33rem;
            position: relative;

            .main-left {
                margin-right: 21.667rem;
                border-radius: 2px;
                // width: 700px;
                width: 740px;

                .main-left-nav {
                    background-color: #fff;
                    padding: 1.3rem 1rem;
                    border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);

                    .main-nav-item {
                        padding: 0 1.2rem;
                        font-size: 1.16rem;
                        border-right: 1px solid hsla(0, 0%, 59.2%, 0.2);
                    }

                    li:last-child {
                        border-right: none;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1000px) {
    .home-nav {
        padding-left: 1rem;
    }
    .tag-container{
        padding-left: 1rem;
    }
}
</style>
