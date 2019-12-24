<script>
import $ from 'jquery'
export default {
      data : function(){
      return {
        isHomepageActive : true,
        isAddActive : true,
        
      } ;
      },
      methods : {
        navClick : function(url){
          window.location.href = "/#/" + url;
        }
     }
}

$(function(){});

</script>
<template>
<div>    
<div id="nav">
  <router-link to="/">首頁</router-link> |
  <router-link to="/add">新增交易資料</router-link> |
  <router-link to="/bootstrap">Bootstrap</router-link> |
  <router-link to="/user">User</router-link> |
  <router-link to="/login">Login</router-link> |
  <router-link to="/protected">Protected</router-link>
</div>

<div>
  <b-nav pills>
    <b-nav-item exact exact-active-class="active" to="/">首頁</b-nav-item>
    <b-nav-item exact exact-active-class="active" to="/add" >新增交易資料</b-nav-item>
    <b-nav-item>Another Link</b-nav-item>
    <b-nav-item>Disabled</b-nav-item>
  </b-nav>
</div>

</div>
</template>