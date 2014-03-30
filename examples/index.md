# Demo

---

## Normal usage
<!-- seajs.use(['kstring'], function(KString) {
  $S = KString;

  console.log($S("1em").toInt());
  console.log($S("  this is a example").trimLeft());
  console.log($S("  this is a example   ").trimRight());
  console.log($S(" . 我 this is a example").urlEncode());
  console.log($S("#123").hexToRgb());
  console.log($S("rgb(17,34,51)").rgbToHex());
  console.log($S("rgb(17,34,51)").parseColor());
  var str = $S("<script>var a = 1; alert(a);<\/script> this is a test");
  console.log(str.stripScripts()); // alert(1) then return "this is a test"
  str.stripScripts(function(sc,txt){
    console.log(sc) //return "var a = 1; alert(a)"
    console.log(txt) //return "this is a test"
  });
  console.log($S("%20.%20%E6%88%91%20this%20is%20a%20example").urlDecode());
  console.log($S("<html><body>Go Go").escapeHTML());
  var str = $S("abc");
  console.log(str.pad(7,"*")); //return "****abc"
  console.log(str.pad(7,"*",true)); //return "abc***"
  var myString = $S("{subject} is {property_1} and {property_2}.");
  var myObject = {
    subject: 'Jack Bauer',
    property_1: 'our lord',
    property_2: 'savior'
  };
  console.log(myString.substitute(myObject)); //Jack Bauer is our lord and savior
  var str = $S("&lt;html&gt;&lt;body&gt;Go Go");
  console.log(str.unescapeHTML()); //return "<html><body>Go Go"
}); -->

````javascript
seajs.use(['karray','kstring'], function(KArray, KString) {
  $A = KArray;
  $S = KString;
  var arr = $A(['apple', 'banana', 'lemon']);
  arr.each(function(item, index){
    console.log(index + " = " + item);
  });
  var arr = $A([10,4,25,100])
  var areAllBigEnough = arr.every(function(item, index){
   return item > 20;
  }); //return false
  console.log(areAllBigEnough);
  var arr = $A([10,4,25,100]);
  console.log(arr.filter(function(item, index){
   return item > 20;
  }).toString()); //return [25,100];
  var arr = $A([null, 1, 0, true, false, "foo", undefined, ""]);
  console.log(arr.clean().toString()); //return [1,0,true,false,"foo",""];
  var arr = $A([1, 2, 3]);
  console.log(arr.map(function(item,index){
    return item*2;
  }).toString()); // [2,4,6]
     var arr = $A([10, 25, 31]);
     var isAnyBigEnough = arr.some(function(item,index){
      return item > 30;
     }); // return true
  console.log(isAnyBigEnough);
     var vals  = $A(['Cow', 'Pig', 'Dog', 'Cat']);
     var keys = $A(['Moo', 'Oink', 'Woof', 'Miao']);
     console.log(keys.associate(vals)); //returns {'Cow': 'Moo', 'Pig': 'Oink', 'Dog': 'Woof', 'Cat': 'Miao'}
     var arr = $A(['apple', 'lemon', 'banana']);
     console.log(arr.indexOf("lemon")); //return 1
     console.log(arr.indexOf("lemin", 4)); //return -1
     var arr = $A(['a', 'b', 'c']);
     console.log(arr.contains('a')); //return true
     var arr = $A(['a', 'b', 'c']);
     console.log(arr.extend(['d','c'])); //return ['a', 'b', 'c', 'd', 'c']
     var arr = $A(['a', 'b', 'c']);
     console.log(arr.last()); //return 'c'
     var arr = $A(['a', 'b', 'c']);
     console.log(arr.random()); //return 其中的某一项
     var arr = $A(['a', 'b', 'c']);
     console.log(arr.include('c')); //return ['a', 'b', 'c']
     console.log(arr.include('d')); //return ['a', 'b', 'c', 'd']
     var arr = $A(['a', 'b', 'c']);
     console.log(arr.combine(['d','c'])); //return ['a', 'b', 'c', 'd']
     var arr = $A(['a', 'b', 'c', 'a']);
     console.log(arr.erase('a')); //return ['b', 'c']
     var arr = $A(['a', 'b', 'c', 'a']);
     console.log(arr.empty()); //return []
     var myArray = $A([1,2,3,[4,5, [6,7]], [[[8]]]]);
     var newArray = myArray.flatten(); //newArray is [1,2,3,4,5,6,7,8]
     console.log(newArray);
     console.log($A(['11','22','33']).hexToRgb());
     console.log($A([17,34,51]).rgbToHex()); //returns "#112233"
     console.log($A([17,34,51]).rgbToHex(true)); //returns ['11','22','33']
     console.log($A([17,34,51,0]).rgbToHex()); //returns "transparent"
     console.log($A([1,2,3,4,5,6,7,8,9,10]).inject(0, function(acc, n) {
       return acc + n;
     })); //return 55 	(1 到 10 的总和)
     console.log($A([2,3,4,5]).inject(1, function(acc, n) {
       return acc * n;
     }));  // return 120 (5 的阶乘)
     console.log($A(['hello', 'world', 'this', 'is', 'nice']).inject([],function(array, value, index) {
       if (0 == index % 2)
         array.push(value);
       return array;
     })); //return 	['hello', 'this', 'nice']
     var arr = $A(['a', 'b', 'c']);
     arr.remove('b');
     console.log(arr.valueOf());
});

````
