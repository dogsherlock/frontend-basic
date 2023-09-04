### float property 

#### 简介
The float CSS property places an element on the left or 
right side of its container, allowing text and inline 
elements to wrap around it. The element is removed from 
the normal flow of the page, though still remaining a part of the flow 

即float属性将元素放在器容器的左侧或者右侧，允许文本和内联元素环绕.
此元素会脱离文档流，但仍保持部分流动性.

#### syntax 
初始值为none，非继承属性, 可以应用在所有元素(display: none;除外)
```css
/* Keyword values */

/* float left or right在容器盒子向左或向右移动，
直到容器边缘或者碰到其它的浮动元素为止 */
float: left;
float: right;
float: none;
/* 书写顺序lrt左侧，rtl右侧 */
float: inline-start;
/* 与inline-start相反 */
float: inline-end;

/* Global values */
float: inherit;
float: initial;
float: revert;
float: unset;
```

#### float改变display的计算属性
[link](https://developer.mozilla.org/en-US/docs/Web/CSS/float)

#### 清除浮动(clear property)
clear: sets whether an element must be moved below (cleared) 
floating elements that precede it. The clear property applies 
to floating and non-floating elements.

初始值为none、非继承属性、可以在浮动和非浮动的block-level元素上使用.

**语法**
```css
/* Keyword values */
clear: none;
clear: left;
clear: right;
clear: both;
clear: inline-start;
clear: inline-end;

/* Global values */
clear: inherit;
clear: initial;
clear: revert;
clear: revert-layer;
clear: unset;
```