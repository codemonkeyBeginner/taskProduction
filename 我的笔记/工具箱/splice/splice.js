var myFish = ["angel", "clown", "mandarin", "sturgeon"];
// 在 数组 下标 2 的位置 添加 "drum"
var removed = myFish.splice(2, 0, "drum");
log('removed', removed)
log('reserve', myFish)