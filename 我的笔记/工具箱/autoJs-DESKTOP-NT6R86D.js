// 在 find() 调用后 没有结果也会有返回值内容是 以 getClass 开头的数组
// 正常有结果的情况 后面也会跟着这个
/*
[ getClass: [Function],
  select: [Function],
  focus: [Function],
  empty: [Function],
  scrollBackward: [Function],
  iterator: [Function],
  find: [Function],
  toArray: [Function],
  scrollLeft: [Function],
  text: undefined,
  indexOf: [Function],
  contextClick: [Function],
  clearAccessibilityFocus: [Function],
  accessibilityFocus: [Function],
  dismiss: [Function],
  click: [Function],
  each: [Function],
  scrollTo: [Function],
  scrollRight: [Function],
  expand: [Function],
  contains: [Function],
  setSelection: [Function],
  size: [Function],
  selection: undefined,
  scrollForward: [Function],
  wait: [Function],
  cut: [Function],
  notifyAll: [Function],
  show: [Function],
  findOne: [Function],
  setProgress: [Function],
  nonEmpty: [Function],
  paste: [Function],
  notify: [Function],
  scrollUp: [Function],
  hashCode: [Function],
  get: [Function],
  copy: [Function],
  class: class com.stardust.automator.UiObjectCollection,
  scrollDown: [Function],
  clearFocus: [Function],
  performAction: [Function],
  isEmpty: [Function],
  lastIndexOf: [Function],
  equals: [Function],
  longClick: [Function],
  progress: undefined,
  toString: [Function],
  collapse: [Function],
  setText: [Function] ]
  */

// autoJS 的 正则 不支持 正向预查 (?=xx)


// 控件的 desc() text() 为空也可以获取的 不会报错 只要不对 null 进行操作就不会报错 所以要做好判断 再操作

// 有时候 会出现 触摸一下有两个 点 点击操作不能响应了 就
//这时 息屏 再 打开 或者 重开 无障碍 能好