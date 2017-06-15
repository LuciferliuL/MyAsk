/**
 * Created by lucif on 2017/6/9.
 */

/**
 * 检测内部文本
 * @param obj
 * @returns {string}
 */
function gettextInner(obj) {
    if (typeof obj.innerText === 'string') {
        return obj.innerText;
    } else {
        obj.textContent;
    }
}

/**
 *  设置内部文本的兼容
 *  obj设置的对象  content添加的内容
 * @param obj
 * @param content
 */
function settextInner(obj, content) {
    if (typeof  obj.innerText === 'string') {
        return obj.innerText = content;
    } else {
        return obj.textContent = content;
    }
}

/**
 * 寻找下一个兄弟节点
 * @param element
 * @returns {*}
 */
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var next = element.nextSibling;//下一个兄弟节点 如果找不到要一直寻找
        while (next && next.nodeType !== 1) {//1.有节点 2.不是要的 使用nodeType来判断
            next = element.nextSibling;
        }
        return next;
    }
}

/**
 * 寻找上一个兄弟节点
 * @param element
 * @returns {*}
 */
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var previous = element.previousSibling;
        while (previous && previous.nodeType !== 1) {
            previous = element.previousSibling;
        }
        return previous;
    }
}

/**
 * 滚出屏幕的页面大小
 * @returns {{top: (Number|number), left: (Number|number)}}
 */
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    }
}

/**
 * 获取计算后样式属性 也就是当前的属性 attr是需要查看的属性
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}

/**
 * 网页可视区的宽和高
 * @returns {{width: (Number|number), height: (Number|number)}}
 */
function getClient() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    }
}

/**
 * 事件对象的兼容方法
 * @param event
 */
function getEvent(event) {
    return event || window.event;
}

/**
 * 获取鼠标在页面中的位置坐标
 * @returns {{pageX: (Number|number), pageY: (Number|number)}}
 */
function getPage(event) {
    var event = event || window.event;
    return {
        pageX: event.pageX || event.clientX + document.documentElement.scrollLeft,
        pageY: event.pageY || event.clientY + document.documentElement.scrollTop
    }
}

/**
 * 阻止冒泡  谁被阻止谁调用
 * @param event
 */
function stopPro(event) {
    var event = event || window.event;
    if (event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
}

/**
 * 添加事件的函数
 element要绑定的元素对象  name字符串不加on listener时间处理函数
 例如 addEvent(btn,"click",function(){alert("1")})
 * @param element
 * @param name
 * @param listener
 */
function addEvent(element, name, listener) {
    if (element.addEventListener) {
        element.addEventListener(name, listener, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + name, listener);
    } else {
        element["on" + name] = listener;
    }
}

/**
 * 获取事件目标的兼容方式
 * @param event
 */
function getTarget(event) {
    event.target || event.srcElement;
}


/**
 * 有关事件对象的封装集合  使用时候就按需取出来给参
 * @type {{getEvent: eventUtils.getEvent, getTarget: eventUtils.getTarget, stopPro: eventUtils.stopPro, getPageX: eventUtils.getPageX, getPageY: eventUtils.getPageY}}
 */
var eventUtils = {
    getEvent: function (event) {
        return event || window.event
    },
    getTarget: function (event) {
        event.target || event.srcElement;
    },
    stopPro: function (event) {
        var event = event || window.event;
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    getPageX: function (event) {
        return event.pageX || event.clientX + document.documentElement.scrollLeft;
    },
    getPageY: function (event) {
        return event.pageY || event.clientY + document.documentElement.scrollTop
    }
}

/**
 * 移除事件的兼容函数  方法同添加
 * @param ele
 * @param name
 * @param listener
 */
function removeEvent(ele, name, listener) {
    if (ele.removeEventListener) {
        ele.removeEventListener(name, listener);
    } else if (ele.detachEvent) {
        ele.detachEvent("on" + name, listener);
    } else {
        ele["on" + name] = null;
    }
}


