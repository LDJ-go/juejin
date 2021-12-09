<template>
    <div class="home-container">
        <div class="home-nav container">
            <ul>
                <li>
                    <router-link to="" class="nav-item active router">
                        推荐
                    </router-link>
                </li>
                <li>
                    <router-link to="" class="nav-item router">
                        后端
                    </router-link>
                </li>
                <li>
                    <router-link to="" class="nav-item router">
                        前端
                    </router-link>
                </li>
                <li>
                    <router-link to="" class="nav-item router">
                        Android
                    </router-link>
                </li>
            </ul>
        </div>
        <main class="home-main">
            <div class="main-left">
                <div class="main-left-nav">
                    <ul>
                        <li class="main-nav-item">
                            <router-link to="" class="active router">
                                推荐
                            </router-link>
                        </li>
                        <li class="main-nav-item router">
                            <router-link to="" class="router">
                                最新
                            </router-link>
                        </li>
                        <li class="main-nav-item router">
                            <router-link to="" class="router">
                                历史
                            </router-link>
                        </li>
                    </ul>
                </div>
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>

<script>
</script>

<style lang="less" scoped>
.home-container {
    height: 3.833rem;
    background-color: #ffffff;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
    line-height: 1;
    font-size: 14px;

    .home-nav {
        max-width: 960px;
        margin: auto;

        .nav-item {
            padding: 0 1.5rem 0 0;
        }
    }
}

.home-main {
    max-width: 960px;
    height: auto;
    margin: 0.8rem auto 0 auto;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);

    .main-left {
        margin-right: 21.667rem;
        border-radius: 2px;
        width: 700px;
        height: 100%;
        background-color: #ffffff;

        .main-left-nav {
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
</style>
