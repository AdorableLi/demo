for (var i = 0; i < 10; ++i) {
    setTimeout(function () {console.log(i)}, 0);
}

// 第一种ES6写法
 jisuan =()=>{
	alert(2/0);
}

// 第二种写法
// function jisuan (){
// 	alert(2/0);
// }

function qqq(){
	const ddd = 2;
	const fff = document.getElementById("constdiv");
	fff.innerHTML=ddd;

	// const定义的对象不可以改变值，以下写法会报错
	// const fff = document.getElementById("constdiv").innerHTML="222";
	// ddd = fff;
};

let x = 0;
function test(){
	x++;
	if(x>10){
		return
	};
	console.log("递归：" + x);
	test();
}

function byE40() {
    //nish 在这里是有效的
console.log("before"+nish);
  for( var nish = 0; nish < 5; nish++ ) {
        //nish在这里是有效的
    };
    //nish在这里是有效的
console.log("after"+nish);
};


// JSON数组
// {
// 	"employees": [
// 		{
// 			"firstName":"Bill",
// 			"lastName":"Gates"
// 		},
// 		{
// 			"firstName":"George",
// 			"lastName":"Bush"
// 		},
// 		{
// 			"firstName":"Thomas",
// 			"lastName":"Carter"
// 		}
// 	]
// }

// restful风格
url="xxx/xxx?id="+code
url="xxx/xxx/"{code}



 res.data.data.tech.map((value, index) => {
          console.log(value.category)
          let optionname = value.category;
          newvoteoption.push(optionname);
        })
        that.setData({
          voteoption: newvoteoption,
        })
        console.log(that.data.voteoption);
optionname => "科技"
       newvoteoption =>  []

        newvoteoption =>  ["科技"]

        newvoteoption =>  ["科技","科技"]	//数组
        item =》 newvoteoption【0】  =>  "科技"

        newvoteoption => [
        	{
        		name:"科技"
        	}
        ]	//json数组

        newvoteoption => {
        		name:"科技"
        	}	//json
        item =》 newvoteoption【0】  =>  {name:"科技"}
        item.name =》 newvoteoption【0】.name  =>  "科技"