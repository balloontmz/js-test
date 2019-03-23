# js test

## notes

应该始终采用`===`运算符进行比较运算，`==`会将比较的量转换为对应类型，有时会得到非常诡异的结果

`NaN`(无法计算的结果数)不会等于任何值，包括其自身，只能通过`isNaN`函数进行判断。
`Infinity`表示无限大，超过了 javascript 所能表示的最大值。

浮点数的相等比较不能采用`===`，只能判断两数之差的**绝对值**是否小于某个阀值。

`null`表示`空`,它和`0` `''` 不同。

`undefined`和`null`类似，大多数情况下都应该用`null`

数组是一组按顺序排列的集合。

对象是键值对组成的无序集合--键是字符串，值可以是任意类型

变量名是`大小写英文、数字、$、_` 的组合，且不能以数字开头

变量赋值 let 常量赋值 const ，变量只能初始化一次，可以进行任意类型的赋值

### 字符串

转义字符 `\`

`\x`  ascii 字符

`\u`  unicode 字符

多行字符采用反引号

多个字符串采用 `+` 号连接

模板字符串 `${}` 内放入要加入的变量

某个位置的字符串、类似 数组的下标才足以

字符串不可变，对字符串索引赋值，不会有任何效果

`toUpperCase` 把一个字符串全部大写

`toLowerCase` 把一个字符串全部小写

`indexOf`  返回字符串出现的位置

`substring` 返回指定索引区间的子字符串

### 数组

数组可以包含任意数据类型，并通过索引访问每个元素

要获取数组的长度，直接访问 `length` 属性

直接给 `length` 属性赋值会使数组长度发生变化--变长补为 `undefined`,变短截断

数组可以通过索引把对应的元素改为新的值

如果索引超过范围，同样会改变数组的大小

`indexOf` 查找某个元素的位置

`slice` 对应 字符串`substring` 函数  切片

`push pop` 末位删除和添加元素

`unshift shift` 首位添加和删除元素

`sort` 按照默认的规则进行排序

`reverse` 把数组的元素反转

`splice` 制定位置删除或者添加，多个参数  位置、删除数、添加的参数`...`

`concat` 将数组连接起来返回一个新的数组

`join` 将当前数组的元素用指定符号连接起来，如果元素不是字符串，转换为字符串

### 对象

对象的最后一个键值队不需要加逗号，如果加了，可能会在某些写浏览器或者软件上报错

访问属性通过`.`运算符完成，如果变量名含有特殊字符，则需要通过`object['var']`(也可以访问正常变量)进行访问，同时，赋值的时候也要用单引号扩起来

如果属性不存在，不报错，返回`udefined`

删除属性用`delete`

用`in`可以判断一个对象是否拥有某属性，属性可能来自继承。比如`toString`方法

如果要判断一个方法是不是对象自身的，可以用`hasOwnProperty`方法

### 条件判断

`else` 后面如果只有一句，可以省略 `{}`，所以 有了 `else if` 因为 `else` 后面只有一句 `if` ，所以省略 `{}`

javascript 将 `null undefined  0 NaN  ''` 视为 `false` ，其他一律视为 `true`

### 循环

`for`

`for in`可以把一个对象的所有属性一次循环出来，如果要过滤掉继承的属性，用`hasOwnProperty`加一个条件判断

数组也是对象，也能用 `for in`遍历

`while` 循环

`do while` 循环

### map 和 set

map 是键值对集合

set 是无重复元素集合  数字 和 数字的字符串是不同元素

### iterable  可迭代对象

`for of` -- ES6 语法

`for of` 和 `for in` 类似，但是由于历史遗留原因， 数组也是对象，如果对数组进行对象的赋值，会导致 `for in` 循环出来的元素出现意想不到的效果，`for of`只会显示数组的元素，而不会显示添加的对象属性

`forEach` 方法  --暂时体验不佳

## 函数

函数是一种最基本的代码抽象方式

### 函数定义和调用

函数内部的语句在执行时，一旦执行到 return 语句，函数执行完毕，将结果返回

如果函数执行完还没有返回，则返回 undefined

javascript 允许传入任意多个参数而不影响调用

`arguments` 指向当前函数的调用者传入的所有参数，最常用于判断传入的参数个数，以及将某个参数置为可选参数

`...rest` 传入的额外参数赋值给`rest`

javascript 会在行末自动加分号，注意避免被坑

### 变量作用域与解构赋值

var 声明的变量是有作用域的，嵌套函数的变量由内而外查找

变量提升：变量在函数体内的声明会在执行前声明，但是赋值是在执行时赋值

```javasript
function foo(){
    var x = 'hello,' + y;
    console.log(x);         // 不会报错， y 为 undefined
    var y = 'bob';
}

foo();
```

由于变量提升的特性，变量的声明应该在函数开始时声明

最常用的做法是用 var 全部声明

不再任何函数内定义的变量具有全局作用域

javascript 只有一个全局作用域 --`window`

全局变量会绑定到 window，不同 js 文件如果使用了相同的全局变量，则会造成命名冲突，减少冲突的方法是将一个文件的所有变量和函数全部绑定到一个全局变量

#### 局部作用域

let 可声明一个块及作用域的变量  例如 for 循环体

const 定义常量，具有块级作用域

解构赋值--通过一个结构接受指定结构的结果：`var [x, y, z] = ['a', 'b', 'c']`--数组、对象

解构赋值还可以忽略某些元素
[教程网址](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014344993159773a464f34e1724700a6d5dd9e235ceb7c000)

```javascript
var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school',
    address: {
        city: 'Beijing',
        street: 'No.1 Road',
        zipcode: '100001'
    }
};
var {name, address: {city, zip}} = person;
name; // '小明'
city; // 'Beijing'
zip; // undefined, 因为属性名是zipcode而不是zip
// 注意: address不是变量，而是为了让city和zip获得嵌套的address对象的属性:
address; // Uncaught ReferenceError: address is not defined
```

```javascript
var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678'
};

// 如果person对象没有single属性，默认赋值为true:
var {name, single=true} = person;
name; // '小明'
single; // true
```

```javascript
// 有些时候，如果变量已经被声明了，再次赋值的时候，正确的写法也会报语法错误：

// 声明变量:
var x, y;
// 解构赋值:
{x, y} = { name: '小明', x: 100, y: 200};
// 语法错误: Uncaught SyntaxError: Unexpected token =

//这是因为JavaScript引擎把{开头的语句当作了块处理，于是=不再合法。解决方法是用小括号括起来：

({x, y} = { name: '小明', x: 100, y: 200});
```

### 方法

在一个方法内部， this 始终指向当前对象--如果以对象的方法形式调用，this 指向该对象，如果单独调用函数，this指向全局对象，也就是windows

如果要保证 this 的指向正确，必须以 obj.xxx()的方式调用 而不能用别名 

方法内定义的函数的 this 并不指向该对象--此时我们可以先定义一个变量 that 捕获 当前对象this

#### 控制 this 的指向

：**函数自带 apply 方法，它接收两个参数--第一个就是要绑定的 this 变量，第二个就是参数数组**

另一个与 apply 类似的方法是 call，区别是 apply将参数打包传入，call将参数顺序传入

对于普通的函数调用，我们通常将 this 绑定为i null

#### 装饰器

将原函数赋值为新变量，然后为原函数赋值一个新的功能函数，该函数包含新变量的原函数

```javascript
var count = 0;
var oldParseInt = parseInt; // 保存原函数

window.parseInt = function (){
    count += 1;
    return oldParseInt.apply(null, argunments);  // 调用原函数，对象的方法也可如此
}

// 测试
parseInt('10');
parseInt('10');
parseInt('10');
console.log('count =' + count); // 3
```

### 高阶函数

javascript 的函数其实都指向某个变量 。既然变量可以指向函数，函数的参数能接收变量，那么一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。

```javascript
// map
function pow(){
    return x * x;
}

var arr = [1, 2, 3];
var results = arr.map(pow); //[1, 4, 9]
console.log(results);
```

采用循环也能实现该映射功能，但是`map` 把运算规则抽象为函数，这样，我们就能实现复杂的功能函数

```javascript
// reduce
// reduce 把一个函数作用于一个 array 上， 这个函数接收两个参数，reduce 把结果继续和序列的下一个元素做累积运算
var arr = [1, 3, 5, 7, 9];
arr.reduce(function(x, y){
    return x + y;
}); // 25
```

```javascript
// 把 [1, 3, 5, 7, 9] 变成数字 134579
var arr = [1, 3, 5, 7, 9];
arr.reduce(function(x, y){
    return x * 10 + y;
}); // 25
```

```javascript
// 实现类似 parseInt 的功能
function string2int(s) {
 var obj = {
        "0":0,
        "1":1,
        "2":2,
        "3":3,
        "4":4,
        "5":5,
    };

    if (s == "0"){
        return 0;
    }
    var arr = [];
    for(i=0;i<s.length;i++){
        arr.push(s[i]);
    }
    console.log(arr);
    let a = arr.reduce(function(x, y){

        return x * 10 + obj[y];
    });

    return a;
}

// 测试:
if (string2int('0') === 0 && string2int('12345') === 12345 && string2int('12300') === 12300) {
    if (string2int.toString().indexOf('parseInt') !== -1) {
        console.log('请勿使用parseInt()!');
    } else if (string2int.toString().indexOf('Number') !== -1) {
        console.log('请勿使用Number()!');
    } else {
        console.log('测试通过!');
    }
}
else {
    console.log('测试失败!');
}
```

#### filter

filter 用于把 array 的某些元素过滤掉，返回剩下的元素

filter 接收的是回调函数，格式为：`function (element, index, self) {}` 返回值为 布尔值

```javascript
// 去除数组中的重复元素
var
    r,
    arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
    r = arr.filter(function (element, index, self) {
    return self.indexOf(element) === index;
});
console.log(r.toString());

```

```javascript
// 获取素数、采用平方根遍历数，能指数级降低计算量
function get_primes(arr) {

    return arr.slice(1).filter(function(x)
        {
            var i;
            for(i=2;i<=Math.sqrt(x);i++)
            {
                if(x%i==0)
                    return 0;
            }
            return 1;
        }
    );
}

// 测试:
var
    x,
    r,
    arr = [];
for (x = 1; x < 100; x++) {
    arr.push(x);
}
r = get_primes(arr);
if (r.toString() === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
    console.log('测试通过!');
} else {
    console.log('测试失败: ' + r.toString());
}
```

#### sort 函数

##### 坑

js 的 sort 函数进行排序时，默认将元素转换为字符串进行排序，所以有时数字大的在前面，小的却在后面。

sort 能接收一个函数，我们能自定义该函数来进行排序。

##### sort 会直接对当前数组进行修改，同时返回当前数组

### 闭包

[闭包--用函数使计算机实现计算](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/00143449934543461c9d5dfeeb848f5b72bd012e1113d15000)

```javascript

// 脑洞大开
// 很久很久以前，有个叫阿隆佐·邱奇的帅哥，发现只需要用函数，就可以用计算机实现运算，而不需要0、1、2、3这些数字和+、-、*、/这些符号。

// JavaScript支持函数，所以可以用JavaScript用函数来写这些计算。来试试：

// 定义数字0:
var zero = function (f) {
    return function (x) {
        return x;
    }
};

// 定义数字1:
var one = function (f) {
    return function (x) {
        return f(x);
    }
};

// 定义加法:
function add(n, m) {
    return function (f) {
        return function (x) {
            return m(f)(n(f)(x));
        }
    }
}

// 计算数字2 = 1 + 1:
var two = add(one, one);

// 计算数字3 = 1 + 2:
var three = add(one, two);

// 计算数字5 = 2 + 3:
var five = add(two, three);

// 你说它是3就是3，你说它是5就是5，你怎么证明？

// 呵呵，看这里:

// 给3传一个函数,会打印3次:
(three(function () {
    console.log('print 3 times');
}))();

// 给5传一个函数,会打印5次:
(five(function () {
    console.log('print 5 times');
}))();

// 继续接着玩一会...

```

## 基本对象

```javascript
来自评论区的笔记

1.JavaScript一切皆对象，对象分类型，typeof 返回的是字符串  数组用Array.isArray()  null 用=== undefind检测变量是否定义
2.Array有slice,splice,concat,join,indexof  map,reduce,filter sort(直接根据比较结果排序，把所有元素转化为字符串，字符串根据ASCII码排)
3.闭包是携带状态的函数，返回的函数没有立即调用，所以不能使用可能改变的变量，返回的函数记录了外部函数的参数和局部变量。
4.function* 生成器函数返回生成器对象，然后通过多次调用yield返回值，也是记录状态的函数。
5.除了null,undefind外都有toString方法
6.避免语法冲突，例如匿名函数调用时要加（）,(123).toString
7.Arrow function 是匿名函数 两种形式 this已经定带词法作用域（自动绑定）。
8.函数定义有两种形式  函数单独调用this指向undefined或者window（非strict）,函数对象调用apply和call方法绑带this（手动绑定）
9，const let 定义块级作用域 var 声明的变量在函数内部就是函数作用域，全局变量都绑定在window上。
10.解构赋值多个变量数组需要用[],一般对象用{}括好，可以缺省，可以有默认值，可以当参数接收对象类对象，Array对象
11.for in 遍历对象属性 for of，forEach遍历集合对象，map对应的是entry
12,对象类对象键值默认只能是字符串，新类型Map的键值可以是其他类型
13,iterable类型的forEach，Array的filer的回调函数有三个参数，元素，索引，self
14.函数可以接受任意个变量，可以不定义参数，通过agruements（不是数组，类似）获取变量值。...rest可变参数（以数组的形式接收）
15.包装对象类型是object

```