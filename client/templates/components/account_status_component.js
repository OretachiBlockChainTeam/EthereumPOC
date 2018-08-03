import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

//テンプレート「accountStatusComponent」のヘルパー
Template.accountManagementComponent.helpers({
  //アカウント情報の取得
  accounts: function(){
    return EthAccounts.find({});
  }
});

//Metamask利用したadminアカウント
Template.adminAccount.helpers({
  //アカウントの名前の取得
  name: function(){
    return "Admin Account (Metamask)";
  },
  //アカウントのアドレスの取得
  address: function(){
    return "0x65f75f39efa72d0bf423ff0241c22d02d058b9d3";
  },
  //アカウントが持つEtherの残高を取得（単位はEtherで、小数点３ケタまで取得）
  balance: function(){
    var template = Template.instance();
    web3.eth.getBalance("0x65f75f39efa72d0bf423ff0241c22d02d058b9d3", function(error, result){
      var balanceEth = web3.fromWei(result.toNumber(),'ether');
      TemplateVar.set(template, 'balanceEth', balanceEth);
    });
    return parseFloat(TemplateVar.get(template, 'balanceEth')).toFixed(3) + " ETH";
  }
});

//テンプレート「accountBalanceItem」のヘルパー
Template.accountBalanceItem.helpers({
  //アカウントの名前の取得
  name: function(){
    return this.name;
  },
  //アカウントのアドレスの取得
  address: function(){
    return this.address;
  },
  //アカウントが持つEtherの残高を取得（単位はEtherで、小数点３ケタまで取得）
  balance: function(){
    var balanceEth = web3.fromWei(this.balance, "ether");
    return parseFloat(balanceEth).toFixed(3);
  }
});
