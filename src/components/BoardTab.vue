<template>
    <div class="boardTab">
        <div class="headerContent">
            <div class="boardBefore">盘前</div>
            <div class="boardCenter active">盘中</div>
            <div class="boardAfter">盘后</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'BoardTab',
//   props: {
//     msg: String
//   }
}
</script>

<style scoped>
    .boardTab {
        width: 100%;
        display: flex;
        display: -webkit-flex;
        justify-content: center;
        -webkit-justify-content: center;
        align-items: center;
        -webkit-align-items: center;
        padding: 0.4rem 0;
    }
    .headerContent {
        display: flex;
        display: -webkit-flex;
        justify-content: center;
        -webkit-justify-content: center;
        align-items: center;
        -webkit-align-items: center;
        font-size: 1.2rem;
        line-height: 1;
        border-radius: 3px;
        border: 1px solid #4A4F5A;
    }
    .boardBefore, .boardCenter, .boardAfter {
        padding: 0.6rem 5.1rem;
        font-size: 1.2rem;
        line-height: 1;
        color: #A1B0BF;
        cursor: pointer;
    }
    .headerContent .active {
        background: #626773;
        color: #D8DFEB;
    }
</style>
