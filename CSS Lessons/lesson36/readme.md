### CSS FLEXBOX PROPERTIES
**references**

> [flex layout](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
> [flex examples](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
> [mdn flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
> [w3c flexbox](https://www.w3.org/TR/css-flexbox/#flex-basis-property)

**container**
* display
* flex-direction
* flex-wrap
* flex-flow
* justify-content
* align-items
* align-content

___

**items** 
* order
* flex-grow
* flex-shrink
* flex-basis
* flex
* align-self

___

### flex container properties

#### main axis and cross axis 
main axis: 
is the aixs running in the direction the flex items are laid out in.
main start and main end

cross axis:
is the axis running perpendicular to the direction the flex items are laid out in
cross start and cross end

flex container: 
The parent element that has display: flex set on it

flex items:
The items laid out as flexible boxes inside the flex container 

___
#### flex-direction property
usage: 
specify the direction of the main axis(left to right or top to bottom)

value: 
row(default)、column、row-reverse、column-reverse

___

#### flex-wrap property
usage:
The flex-wrap CSS property sets whether flex items 
are forced onto one line or can wrap onto multiple lines. 
If wrapping is allowed, it sets the direction that lines are stacked.

value:
nowrap(default flex container可能溢出)、wrap、wrap-reverse

___
#### flex-flow 
flex-direction shorthand:
flex-direction、flex-wrap

eg:
```css
flex-direction: row;
flex-wrap: wrap;
```

```css
flex-flow: row wrap;
```

___
#### justify-content & align-items
link: [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
justify-content:
usage: 
controls where the flex items sit on the main axis.
values:
start、end、flex-start(default value)、flex-end、center、left、right、
normal、space-between、space-around、space-evenly、
stretch、safe、unsafe.

space-between: 沿着main axis分布，items 
之间空间相同，开始和结束项没有空间.

space-around: 开始和结束项空间是items之间空间的一半.

space-evenly: items之间、开始和结束项空间相同.


align-items:
usage:
controls where the flex items sit on the cross axis.
You can override the align-items behavior for individual 
flex items by applying the align-self property to them.
values:
normal、flex-start、flex-end、center、start、end、self-start、
self-end、baseline, first baseline, last baseline、stretch(default value)、
safe、unsafe.

stretch: 会将cross-axis轴上的flex items拉伸至
弹性父级盒子的高度或宽度

___
#### align-content
usage: 
sets the distribution of space between and around content 
items along a flexbox's cross-axis or a grid's block axis.
This property has no effect on single line flex containers
(i.e. ones with flex-wrap: nowrap).

values:
normal、flex-start、flex-end、center、start、end、baseline, 
first baseline, last baseline、space-between、space-around、
space-evenly、stretch(default value)、
safe、unsafe.

___
#### align-items和align-content区别
* align-items属性是针对单独的每一个flex子项起作用，它的基本单位是每一个子项，
在所有情况下都有效果（当然要看具体的属性值）

* align-content属性是将flex子项作为一个整体起作用，它的基本单位是子项构成的行，
只在两种情况下有效果：①子项多行且flex容器高度固定 ②子项单行，flex容器高度固定且
设置了flex-wrap:wrap;

___
### flex items properties
flex: [flex-grow] [flex-shrink] [flex-basis];
default value: flex: 0 1 auto;

flex: auto;表示flex: 1 1 auto;

#### flex
The flex CSS shorthand property sets how a flex item will 
grow or shrink to fit the space available in its flex container.

This property is a shorthand for the following CSS properties:

* flex-grow(子元素弹性扩展比例/number，默认为0，负值无效)
sets the flex grow factor, which specifies how much of the 
flex container's remaining space should be assigned to the flex item's main size.

When the flex-container's main size is larger than the combined
main size's of the flex items, the extra space is distributed 
among the flex items, with each item growth being their growth 
factor value as a proportion of the sum total of all the 
container's items' flex grow factors.

0表示不扩展.
* flex-shrink(控制子元素如何收缩/number，默认是1，负值无效)
sets the flex shrink factor of a flex item. If the size of 
all flex items is larger than the flex container, items 
shrink to fit according to flex-shrink.

In use, flex-shrink is used alongside the other flex 
properties flex-grow and flex-basis, and normally defined using the flex shorthand.

0表示不收缩.

* flex-basis(表示在不伸缩的情况下子容器的原始尺寸/宽高百分数, 默认值为auto)
sets the initial main size of a flex item. 
It sets the size of the content box unless otherwise set with box-sizing.

auto表示项目原本的大小(容器内项目的宽度是根据内容自适应的.)
当flex-basis为百分比时，表示相对于其父弹性盒容器主轴尺寸的百分数.

flex-basis is limited by min-width and max-width.(min-width > 
flex-basis或max-width < flex-basis时,以min-width或max-width为准)

syntax: 
```css
/* 指定<'width'> */
flex-basis: 10em;
flex-basis: 3px;
flex-basis: auto;

/* 固有的尺寸关键词 */
flex-basis: fill;
flex-basis: max-content;
flex-basis: min-content;
flex-basis: fit-content;

/* 在 flex item 内容上的自动尺寸 */
flex-basis: content;

/* 全局数值 */
flex-basis: inherit;
flex-basis: initial;
flex-basis: unset;
```

The flex property may be specified using one, two, or three values.
```
One-value syntax: the value must be one of:
a valid value for <flex-grow>: then the shorthand expands to flex: <flex-grow> 1 0.
a valid value for <flex-basis>: then the shorthand expands to flex: 1 1 <flex-basis>.
the keyword none or one of the global keywords.
Two-value syntax:
The first value must be a valid value for flex-grow.
The second value must be one of:
a valid value for flex-shrink: then the shorthand expands to flex: <flex-grow> <flex-shrink> 0.
a valid value for flex-basis: then the shorthand expands to flex: <flex-grow> 1 <flex-basis>.
Three-value syntax: the values must be in the following order:
a valid value for flex-grow.
a valid value for flex-shrink.
a valid value for flex-basis.
```

___
#### order
usage: 
sets the order to lay out an item in a flex or grid 
container. Items in a container are sorted by 
ascending order value and then by their source code order.

定义flex items的排列顺序，数值越小，排列越靠前，默认为0.

values: an integer
default value: 0

**how it works?**
* by default, all flex items have an order value  of 0
* Flex items with higher specified order values will 
appear later in the display order than items with lower order values.
* Flex items with the same order value will appear in their source order. 
* You can set negative order values to make items appear earlier 
than items whose value is 0. 

___
#### align-self
usage: 
align-self CSS property overrides a grid or flex item's align-items value. 
In Grid, it aligns the item inside the grid area. 
In Flexbox, it aligns the item on the cross axis.

If a flexbox item's cross-axis margin is auto, then align-self is ignored.

values: 
auto(initial value): computes to the parent's align-items value.
normal、self-start、self-end、flex-start、flex-end、center、
baseline, first baseline, last baseline、stretch、safe、unsafe.

