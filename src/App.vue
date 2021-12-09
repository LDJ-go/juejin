<template>
    <div id="app">
        <header class="main-header sticky">
            <div class="container">
                <a href="/" class="logo"
                    ><img
                        src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/7abc2b532f725d394feaf0141547ade7.svg"
                        alt="稀土掘金"
                        class="logo-img"
                    />
                </a>
                <nav class="main-nav">
                    <ul>
                        <a href="/"><li class="nav-item active">首页</li></a>
                    </ul>
                </nav>
            </div>
        </header>
        <div class="routerView">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {};
    },
    mounted() {},
};
</script>

<style lang="less" scoped>
.main-header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 250;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
    color: #909090;
    height: 5rem;

    .container {
        max-width: 1200px;
        margin: auto;
    }
}

.container {
    display: flex;
    align-items: center;
    height: 100%;
}

.logo {
    margin-right: 1.3rem;
}

.logo-img {
    display: block;
    width: 116.82px;
    height: 24px;
}

.main-nav {
    margin-left: 2rem;
    font-size: 16px;

    .nav-item {
        color: #86909c;
        cursor: pointer;
    }

    .nav-item:hover {
        color: #1e80ff;
    }

    .active {
        color: #1e80ff;
    }
}

</style>
