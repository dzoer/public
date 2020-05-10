        	function loading(){
    		load.载入='载入中';
			document.getElementById('load').style.display = "block";
    	}
    	function loaded(){
    		setTimeout(function(){
            			load.载入 = '载入成功'
	            	},10);
	            	setTimeout(function(){
	            		document.getElementById('load').style.display = "none";
	            	},600);
    	}
    	var type = 'tx';
        var load = new Vue({
        	el: "#load",
        	data: {
        		载入:''
        	}
        });
    	function updatePic(){
    		axios.get('./getUrl.php',{
    			params:{
    				type:type
    			}
    		})
            .then(function(result) {
                console.log('链接获取成功');
                console.log(result.data);
                vm.picUrl = result.data;
            })
            .catch(function(error) {
                alert('Get请求失败');
            });
    	}
        var vm = new Vue({
            el: '.app',
            data: {
                title: "随机动漫图",
                picUrl: '',
                footer: 'Copyright © 2020 神奇のDzoer',
            },
            methods:{
            	updatePic:function(){
            		updatePic();
            	},
            	loaded:function(){
            		loaded();
            	},
            	typeTx:function(){
            		loading();
            		type = 'tx';
            		updatePic();
            	},
            	typeR18:function(){
            		loading();
            		type = 'r18';
            		updatePic();
            	},
            	typeRailgun:function(){
            		loading();
            		type = 'railgun';
            		updatePic();
            	},
            },
            beforeCreate(){
            	loading();
            },
			updated(){
				loading();
			}
        });
        updatePic();