<script>
export default {
}
</script>

<template>
<div>    


<!-- 标准的按钮 -->
<button type="button" class="btn btn-default">默认按钮</button>
<!-- 提供额外的视觉效果，标识一组按钮中的原始动作 -->
<button type="button" class="btn btn-primary">原始按钮</button>
<!-- 表示一个成功的或积极的动作 -->
<button type="button" class="btn btn-success">成功按钮</button>
<!-- 信息警告消息的上下文按钮 -->
<button type="button" class="btn btn-info">信息按钮</button>
<!-- 表示应谨慎采取的动作 -->
<button type="button" class="btn btn-warning">警告按钮</button>
<!-- 表示一个危险的或潜在的负面动作 -->
<button type="button" class="btn btn-danger">危险按钮</button>
<!-- 并不强调是一个按钮，看起来像一个链接，但同时保持按钮的行为 -->
<button type="button" class="btn btn-link">链接按钮</button>

<div id="nav">
  <router-link to="/">首頁</router-link> |
  <router-link to="/add">新增交易資料</router-link> |
  <router-link to="/bootstrap">Bootstrap</router-link> |
  <router-link to="/user">User</router-link> |
  <router-link to="/login">Login</router-link> |
  <router-link to="/protected">Protected</router-link>
</div>

</div>
</template>