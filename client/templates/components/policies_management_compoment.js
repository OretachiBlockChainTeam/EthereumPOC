import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.policiesManagementComponent.helpers({
  //契約情報の取得
  policies: function(){
    return [
      {
        "name": "Policy 1",
        "policy_holder": "AAA 様",
        "hospital": "AAA 病院",
        "insurer": "AAA 生命保険会社",
        "address": "0xead54481adb159d8c4f579611121369a18361ed6",
        "abi": [ //application binary interface
        	{
        		"constant": false,
        		"inputs": [
        			{
        				"name": "hellowAddress",
        				"type": "address"
        			}
        		],
        		"name": "registerBonjour",
        		"outputs": [],
        		"payable": true,
        		"stateMutability": "payable",
        		"type": "function"
        	},
        	{
        		"constant": false,
        		"inputs": [],
        		"name": "notifyCall",
        		"outputs": [],
        		"payable": true,
        		"stateMutability": "payable",
        		"type": "function"
        	},
        	{
        		"constant": true,
        		"inputs": [],
        		"name": "s",
        		"outputs": [
        			{
        				"name": "",
        				"type": "string"
        			}
        		],
        		"payable": false,
        		"stateMutability": "view",
        		"type": "function"
        	},
        	{
        		"constant": false,
        		"inputs": [],
        		"name": "clearString",
        		"outputs": [],
        		"payable": true,
        		"stateMutability": "payable",
        		"type": "function"
        	}
        ]
      },
      {
        "name": "Policy 2",
        "policy_holder": "BBB 様",
        "hospital": "AAA 病院",
        "insurer": "AAA 生命保険会社",
        "address": "0x9bce977aee5142ec3f492d3f12b805ef1a387dc4",
        "abi": [
          {
            "constant": false,
            "inputs": [
              {
                "name": "hellowAddress",
                "type": "address"
              }
            ],
            "name": "registerBonjour",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "notifyCall",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "s",
            "outputs": [
              {
                "name": "",
                "type": "string"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "clearString",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
          }
        ]
      },
      {
        "name": "Policy 3",
        "policy_holder": "BBB 様",
        "hospital": "AAA 病院",
        "insurer": "AAA 生命保険会社",
        "address": "0x0098e880b699cdc2ef9ff1158f4826a71d2a2778",
        "abi": [
        	{
        		"constant": false,
        		"inputs": [
        			{
        				"name": "hellowAddress",
        				"type": "address"
        			}
        		],
        		"name": "registerBonjour",
        		"outputs": [],
        		"payable": true,
        		"stateMutability": "payable",
        		"type": "function"
        	},
        	{
        		"constant": false,
        		"inputs": [],
        		"name": "notifyCall",
        		"outputs": [],
        		"payable": true,
        		"stateMutability": "payable",
        		"type": "function"
        	},
        	{
        		"constant": true,
        		"inputs": [],
        		"name": "s",
        		"outputs": [
        			{
        				"name": "",
        				"type": "string"
        			}
        		],
        		"payable": false,
        		"stateMutability": "view",
        		"type": "function"
        	},
        	{
        		"constant": false,
        		"inputs": [],
        		"name": "clearString",
        		"outputs": [],
        		"payable": true,
        		"stateMutability": "payable",
        		"type": "function"
        	}
        ]
      }
    ]
  }
});

Template.policiesItem.helpers({
  name: function(){
    return this.name;
  },
  policy_holder: function(){
    return this.policy_holder;
  },
  hospital: function(){
    return this.hospital;
  },
  insurer: function(){
    return this.insurer;
  },
  address: function(){
    return this.address;
  },
});

Template.policiesItem.events({
  //証券のステータスの確認
  'click': function(){
    console.log("Policy ID:" + this.address);

    var contractAddress = this.address;
    var abi = this.abi;
    console.log(contractAddress);
    console.log(abi);
    myContract = web3.eth.contract(abi).at(contractAddress);
    myContract.s(function(error, result){
      console.log(result);
      alert(result);
      if(result == "patient was dead"){
        document.getElementById(contractAddress).setAttribute("class", "btn btn-danger");
      } else {
        document.getElementById(contractAddress).setAttribute("class", "btn btn-success");
      }
    })
  }
});
