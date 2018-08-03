//テンプレート「blockStatusComponent」のヘルパー
Template.blockStatusComponent.helpers({
  //最新のブロック番号の取得
  latestBlockNum: function(){
    //return EthBlocks.latest.number;

    // For Metamask
    var template = Template.instance()
    web3.eth.getBlockNumber(function(e, r) { TemplateVar.set(template, 'blockNumber', r); });
    return TemplateVar.get(template, 'blockNumber');
  },

  //最新ブロックのハッシュ値を取得
  latestBlockHash: function(){
    return EthBlocks.latest.hash;
  },

  //最新ブロックを採掘した採掘者のアドレスを取得
  latestBlockMiner: function(){
    return EthBlocks.latest.miner;
  },

  //最新ブロックの採掘日時を取得
  latestBlockDatetime: function(){
    return unix2datetime(EthBlocks.latest.timestamp);
    // var template = Template.instance()
    // web3.eth.getBlock('latest', function(e, r) { TemplateVar.set(template, 'blockNumber', r.timestamp); });
    // return unix2datetime(TemplateVar.get(template, 'blockNumber'));
  }
});
