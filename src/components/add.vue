<script type="javascript">
export default {
    data : function(){
      return {
        tradeTypeText : "請選擇",
      } ;
    },
    mounted : function(){

    },
    methods : {
        clickTradeType : function(type){
            window.console.log(type);
            if(type=="buy"){
              this.tradeTypeText = "買進";
            }else{
              this.tradeTypeText = "賣出";
            }
        }
    }
}
</script>

<template>

<div>
<h5>嗨,這是新增頁</h5>
價格:
交易別:
<div class="dropdown">
    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">{{tradeTypeText}}
    <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li><a href="#" @click="clickTradeType('buy')" >買進</a></li>
      <li><a href="#" @click="clickTradeType('sell')">賣出</a></li>
    </ul>
 </div>

</div>


</template>