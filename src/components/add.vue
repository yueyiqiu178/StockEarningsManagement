<script type="javascript">
import Datepicker from 'vuejs-datepicker'
export default {
    components : {Datepicker},
    data : function(){
      return {
        tradeTypeVariant : "primary",
        tradeType : "",
        tradeTypeText : "請選擇",
        tradePrice : 0,
        tradeDate : "",
        stockId : "",
        tradeQty : 0,

      } ;
    },
    mounted : function(){

    },
    methods : {
        clickTradeType : function(type){
            window.console.log(type);
            if(type=="buy"){
              this.tradeTypeText = "買進";
              this.tradeTypeVariant = "danger";
            }else{
              this.tradeTypeText = "賣出";
              this.tradeTypeVariant = "success";
            }
            this.tradeType = type;
        },
        submitTrade : function(){

        },
        abc(){
          window.console.log("abc");
        }
    }
}
</script>

<template>

<div>

<br/>
<br/>
<div>
  <h2>新增交易資料<b-badge variant="success">New</b-badge></h2>
</div>
<div>
  <b-card bg-variant="light">
    <b-form-group
      label-cols-lg="2"
      label="請輸入交易資料"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
      <b-form-group
        label-cols-sm="3"
        label="交易別:"
        label-align-sm="right"
        label-for="nested-street"
      >
      <b-dropdown :text="tradeTypeText" :variant="tradeTypeVariant" class="m-0" >
          <b-dropdown-item @click="clickTradeType('buy')">買進</b-dropdown-item>
          <b-dropdown-item @click="clickTradeType('sell')">賣出</b-dropdown-item>
      </b-dropdown>        
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="股票代號:"
        label-align-sm="right"
        label-for="nested-city"
      >
        <b-form-input id="nested-city"></b-form-input>
      </b-form-group>      

      <b-form-group
        label-cols-sm="3"
        label="價格:"
        label-align-sm="right"
        label-for="nested-city"
      >
        <b-form-input id="nested-city"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="數量:"
        label-align-sm="right"
        label-for="nested-city"
      >
        <b-form-input id="nested-city"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="交易日期:"
        label-align-sm="right"
        label-for="nested-state"
      >
        <datepicker format="yyyy/MM/dd" :value="tradeDate"></datepicker>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Country:"
        label-align-sm="right"
        label-for="nested-country"
      >
        <b-form-input id="nested-country"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label=""
        label-align-sm="right" class="mb-0"
      >
        <b-button variant="info" @click="submitTrade()">送出</b-button>
      </b-form-group>
    </b-form-group>
  </b-card>
</div>



</div>


</template>