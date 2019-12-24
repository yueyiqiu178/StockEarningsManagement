<script>
//import Index from './components/index'
import Menu from './components/menu'
import $ from 'jquery'

export default {
   name : "hello",
    components : {Menu},
    mounted() {
    $(function() {

    });
  }
}


</script>


<template>
<div>
<div class="container">
<Menu></Menu>
</div>
<div class="container">
<router-view></router-view>
</div>
<div class="container">
Footer
</div>
</div>
</template>
