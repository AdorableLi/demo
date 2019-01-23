function Createobj(name,age,sex){
    //let obj = {};
    this.name = name;
    this.age = age;
    this.sex = sex;
    // this.coninfo = coninfotest;
    //return obj;
}
//	此方法会污染公共命名区域，因此采用prototype（即原型对象）
// function coninfotest(){
// 	console.log(this.name,this.age,this.sex);
// }
//	prototype是构造函数的原型对象，为公共区域，可供其所属构造函数的所有实例调用
Createobj.prototype.coninfo = function(){
    console.log(this.name,this.age,this.sex);
    this.info = "测试info";//原型中添加属性，实例可以调用，但是不拥有
}
    let addinfo1 = new Createobj("lishuyu","23","nan");
    let addinfo2 = new Createobj("ahsunas","32","nan");
    addinfo1.ownname = "gutangjie";
    addinfo1.coninfo();
    addinfo2.coninfo();
    // console.log(addinfo1.coninfo() == addinfo2.coninfo());
    console.log("info" in addinfo1);//此方法不能检查其自身是否含有此属性
    //使用hasOwnProperty检查实例自身是否含有某个属性
    console.log(addinfo1.info,Createobj.prototype.info);
    delete Createobj.prototype.info;
    console.log(addinfo1.hasOwnProperty("info"),addinfo1.info,Createobj.prototype.info);
    console.log(addinfo1.hasOwnProperty("ownname"));
    console.log(addinfo1.__proto__.__proto__.hasOwnProperty("hasOwnProperty"));
    console.log(addinfo1);

    //  此时保存在原obj堆内存中的内容不再被引用，浏览器将自动清楚垃圾
    // obj = null;


    