//获取九个小正方形
var block = document.getElementById("box").getElementsByTagName("div");
//获取定时器
var time = null;
//获取开始按钮
var start = document.getElementById("start");
//定义一个Start函数，用来表示选取3个不同的矩形赋予不同的颜色
function Start () {
	//清除上次的颜色
	for (var i=0;i<block.length;i++) {
		block[i].style.background = "#ffa600";
	}
	//取3个不同的数
	var arr = new Array(3);
	for(var i=0;i<3;i++){
		//随机颜色
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
	 	//在0~8中取3个不同的数放入数组arr
	 	//每次循环都随机一个0~8之间的整数赋予num
		num = Math.floor(Math.random()*9);
		//当i=0时，取数组arr中arr[0]的值为第一次随机的num值
		if(i==0){
			arr[i] = num;
				block[arr[i]].style.background="rgb("+r+","+g+","+b+")";
		}
		//当i>0时，如果取i=1，判断当第一次循环j=0<i时
		else{
			for(var j=0;j<i;j++){
		//（取i=1）如果arr[0]的值与第二次随机的num相同，则令i--,使得i=0重新开始
				if(arr[j] == num){
					i--;
				}
		//（取i=1）如果arr[0]的值与第二次随机的num值不同，则将第二次随机的num值赋予arr[1]，以此类推
				else{
					arr[i] = num;
					block[arr[i]].style.background="rgb("+r+","+g+","+b+")";
				}
			}
		}
	}
}
function starttime() {
	time=time = setInterval(function(){
	//调用Start函数
		Start();
	},1000);
}
//点击start按钮事件
start.onclick = function() {
	//执行一次函数
	Start();
	//清除定时器
	clearInterval(time);
	//定时器
	starttime();
}
finish.onclick = function(){
	//清除定时器
	clearInterval(time);
	//清除上次的颜色
	for (var i=0;i<block.length;i++) {
		block[i].style.background = "#ffa600";
	}
}

