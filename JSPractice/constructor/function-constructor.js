/**
 * 实现类似如下效果:
 * const el= new GetElement("div")
 * el.class("row") // 增加 class
 * el.content("<a>link</a>").style("color: red") // 增加内容并给内容增加颜色（当然还可以 .data() 增加 data-* 之类
 */

function GetElement(tagName) {
    this.el = document.createElement(tagName);

    this.class = function(className) {
        this.el.classList.add(className);
        return this;
    };

    this.content = function(content) {
        this.el.innerHTML = content;
        return this;
    };

    this.style = function(styleString) {
        this.el.style.cssText = styleString;
        return this;
    };

    /**
     * 增加data-*属性
     * data-实际上就是data-前缀加上自定义属性名；但是在获取或者添加自定义属性的时候要去掉前缀data-
     * 
     * @param {property name} key 
     * @param {property value} value 
     * @returns getElement obj
     */
    this.data = function(key, value) {
        this.el.dataset[key] = value;
        return this;
    };

    this.appendTo = function(parent) {
        parent.appendChild(this.el);
        return this;
    };
}

// 使用
const el = new GetElement("div");
el.class("row")
.content("<a>this is a tag</a>")
.style("color: red")
// 添加data-slice属性
.data("slice", 10)
.appendTo(document.body);

