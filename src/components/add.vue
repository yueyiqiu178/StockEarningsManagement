<script type="javascript">
import Datepicker from 'vuejs-datepicker'
import axios from 'axios'
export default {
    components : {Datepicker},
    data : function(){
      return {
        tradeTypeVariant : "primary",
        tradeType : "",
        tradeTypeText : "請選擇",
        tradePrice : "",
        tradeDate : "",
        stockId : "",
        tradeQty : "",
        errorText : "",
        isErrorShow : false,
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

          //var isPassed = true;


          axios.post('api/hellopost', {
                    name: "this.name",
                    description: "this.description"
                })
                .then(function (response) {
                    window.console.log(response.data);
                })
                .catch(function (error) {
                    window.console.log(error);
                    //currentObj.output = error;
                });          

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
        label-for="stockId"
      >
        <b-form-input id="stockId" :value="stockId" ></b-form-input>
      </b-form-group>      

      <b-form-group
        label-cols-sm="3"
        label="價格:"
        label-align-sm="right"
        label-for="tradePrice"
      >
        <b-form-input id="tradePrice" :value="tradePrice" ></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="數量:"
        label-align-sm="right"
        label-for="tradeQty"
      >
        <b-form-input id="tradeQty" :value="tradeQty"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="交易日期:"
        label-align-sm="right"
        label-for="nested-state"
      >
        <datepicker format="yyyy/MM/dd" input-class="form-control" :value="tradeDate"></datepicker>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label=""
        label-align-sm="right"
        label-for="nested-country"
      >
        <b-alert :show="isErrorShow"  variant="danger">{{errorText}}</b-alert>
        
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