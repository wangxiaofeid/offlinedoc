(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{263:function(t,s,n){"use strict";n.r(s);var a=n(0),c=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("Action 类似于 mutation，不同在于：")]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("让我们来注册一个简单的 action：")]),t._v(" "),t._m(2),n("p",[t._v("Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 "),n("code",[t._v("context.commit")]),t._v(" 提交一个 mutation，或者通过 "),n("code",[t._v("context.state")]),t._v(" 和 "),n("code",[t._v("context.getters")]),t._v(" 来获取 state 和 getters。当我们在之后介绍到 "),n("router-link",{attrs:{to:"./modules.html"}},[t._v("Modules")]),t._v(" 时，你就知道 context 对象为什么不是 store 实例本身了。")],1),t._v(" "),n("p",[t._v("实践中，我们会经常用到 ES2015 的 "),n("a",{attrs:{href:"https://github.com/lukehoban/es6features#destructuring",target:"_blank",rel:"noopener noreferrer"}},[t._v("参数解构"),n("OutboundLink")],1),t._v(" 来简化代码（特别是我们需要调用 "),n("code",[t._v("commit")]),t._v(" 很多次的时候）：")]),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),n("p",[t._v("Actions 支持同样的载荷方式和对象方式进行分发：")]),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),n("p",[t._v("注意我们正在进行一系列的异步操作，并且通过提交 mutation 来记录 action 产生的副作用（即状态变更）。")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),n("p",[t._v("Action 通常是异步的，那么如何知道 action 什么时候结束呢？更重要的是，我们如何才能组合多个 action，以处理更加复杂的异步流程？")]),t._v(" "),t._m(16),t._v(" "),t._m(17),n("p",[t._v("现在你可以：")]),t._v(" "),t._m(18),n("p",[t._v("在另外一个 action 中也可以：")]),t._v(" "),t._m(19),n("p",[t._v("最后，如果我们利用 "),n("a",{attrs:{href:"https://tc39.github.io/ecmascript-asyncawait/",target:"_blank",rel:"noopener noreferrer"}},[t._v("async / await"),n("OutboundLink")],1),t._v("，我们可以如下组合 action：")]),t._v(" "),t._m(20),t._m(21)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#action","aria-hidden":"true"}},[this._v("#")]),this._v(" Action")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Action 提交的是 mutation，而不是直接变更状态。")]),this._v(" "),s("li",[this._v("Action 可以包含任意异步操作。")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Vuex"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    count"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mutations"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("increment")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      state"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),n("span",{attrs:{class:"token operator"}},[t._v("++")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  actions"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("increment")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      context"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("commit")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'increment'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("actions"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("increment")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" commit "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("commit")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'increment'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"分发-action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分发-action","aria-hidden":"true"}},[this._v("#")]),this._v(" 分发 Action")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Action 通过 "),s("code",[this._v("store.dispatch")]),this._v(" 方法触发：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("store"),s("span",{attrs:{class:"token punctuation"}},[this._v(".")]),s("span",{attrs:{class:"token function"}},[this._v("dispatch")]),s("span",{attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{attrs:{class:"token string"}},[this._v("'increment'")]),s("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("乍一眼看上去感觉多此一举，我们直接分发 mutation 岂不更方便？实际上并非如此，还记得 "),s("strong",[this._v("mutation 必须同步执行")]),this._v("这个限制么？Action 就不受约束！我们可以在 action 内部执行"),s("strong",[this._v("异步")]),this._v("操作：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("actions"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("incrementAsync")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" commit "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token function"}},[t._v("commit")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'increment'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1000")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 以载荷形式分发")]),t._v("\nstore"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("dispatch")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'incrementAsync'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  amount"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 以对象形式分发")]),t._v("\nstore"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("dispatch")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'incrementAsync'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  amount"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("来看一个更加实际的购物车示例，涉及到"),s("strong",[this._v("调用异步 API")]),this._v(" 和"),s("strong",[this._v("分发多重 mutation")]),this._v("：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("actions"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("checkout")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" commit"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" products"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 把当前购物车的物品备份起来")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" savedCartItems "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("state"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cart"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("added"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 发出结账请求，然后乐观地清空购物车")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("commit")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("types"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("CHECKOUT_REQUEST")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 购物 API 接受一个成功回调和一个失败回调")]),t._v("\n    shop"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("buyProducts")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      products"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// 成功操作")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("commit")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("types"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("CHECKOUT_SUCCESS")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// 失败操作")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("commit")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("types"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("CHECKOUT_FAILURE")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" savedCartItems"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"在组件中分发-action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在组件中分发-action","aria-hidden":"true"}},[this._v("#")]),this._v(" 在组件中分发 Action")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("你在组件中使用 "),n("code",[t._v("this.$store.dispatch('xxx')")]),t._v(" 分发 action，或者使用 "),n("code",[t._v("mapActions")]),t._v(" 辅助函数将组件的 methods 映射为 "),n("code",[t._v("store.dispatch")]),t._v(" 调用（需要先在根节点注入 "),n("code",[t._v("store")]),t._v("）：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mapActions "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'vuex'")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  methods"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token operator"}},[t._v("...")]),n("span",{attrs:{class:"token function"}},[t._v("mapActions")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{attrs:{class:"token string"}},[t._v("'increment'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`")]),t._v("\n\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// `mapActions` 也支持载荷：")]),t._v("\n      "),n("span",{attrs:{class:"token string"}},[t._v("'incrementBy'")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token operator"}},[t._v("...")]),n("span",{attrs:{class:"token function"}},[t._v("mapActions")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      add"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'increment'")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 将 `this.add()` 映射为 `this.$store.dispatch('increment')`")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"组合-action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组合-action","aria-hidden":"true"}},[this._v("#")]),this._v(" 组合 Action")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("首先，你需要明白 "),s("code",[this._v("store.dispatch")]),this._v(" 可以处理被触发的 action 的处理函数返回的 Promise，并且 "),s("code",[this._v("store.dispatch")]),this._v(" 仍旧返回 Promise：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("actions"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("actionA")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" commit "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Promise")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("commit")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'someMutation'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1000")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("store"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("dispatch")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'actionA'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("then")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("actions"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("actionB")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" dispatch"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" commit "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("dispatch")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'actionA'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("then")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token function"}},[t._v("commit")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'someOtherMutation'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 假设 getData() 和 getOtherData() 返回的是 Promise")]),t._v("\n\nactions"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("actionA")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" commit "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("commit")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'gotData'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("getData")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("actionB")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" dispatch"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" commit "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("dispatch")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'actionA'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 等待 actionA 完成")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("commit")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'gotOtherData'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("getOtherData")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("一个 "),s("code",[this._v("store.dispatch")]),this._v(" 在不同模块中可以触发多个 action 函数。在这种情况下，只有当所有触发函数完成后，返回的 Promise 才会执行。")])])}],!1,null,null,null);c.options.__file="actions.md";s.default=c.exports}}]);