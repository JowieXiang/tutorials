class Vue {
    constructor(options) {
        this.$data = options.data;
        this.$el = document.querySelector(options.el)
        observe(this.$data)
        proxy(this, options)
        compile(this.$el, this.$data)
    }
}

// Observer
function observe(data) {
    if (Object.prototype.toString.call(data) === '[object Object]') {
        Object.keys(data).forEach(key => {
            defineReactive(data, key, data[key])
            observe(data[key])
        })
    }
}

function defineReactive(obj, key, val) {
    // dep是依赖于此数据的watcher集合
    const dep = new Dep()
    Object.defineProperty(obj, key, {
        get() {
            Dep.target && dep.addSub(Dep.target)
            return val;
        },
        set(newVal) {
            if (newVal === val) return;
            val = newVal;
            observe(newVal)
            dep.notify()
        }
    })
}

// Dep

class Dep {
    constructor() {
        this.subs = new Set();
    }
    addSub(watcher) {
        this.subs.add(watcher)
    }
    removeSub(watcher) {
        this.subs.delete(watcher)
    }
    notify() {
        for (let sub of this.subs) {
            sub.update()
        }
    }
}

Dep.target = null

// Compiler
function compile(el, data) {
    [].slice.call(el.childNodes).forEach(node => {
        // 是否是html节点/元素节点
        if (node.nodeType === 1) {
            compile(node, data)
        }
        // 是否是文字节点
        else if (node.nodeType === 3) {
            compileText(node, data)
        }
    })
}

function compileText(node, data) {
    let exp = textToExp(node.textContent)
    new Watcher(exp, data, newVal => {
        node.textContent = newVal
    })
}

function textToExp(text) {
    let fragments = text.split(/({{.+?}})/g)
    fragments = fragments.map(fragment => {
        if (fragment.match(/{{.+?}}/g)) {
            fragment = '(' + fragment.replace(/^{{|}}$/g, '') + ')'
        } else {
            fragment = '`' + fragment.replace(/`/g, '\\`') + '`'
        }
        return fragment
    });
    return fragments.join('+')
}

class Watcher {
    constructor(exp, data, callback) {
        this.oldVal = null
        this.getter = expToFunc(exp, data)
        this.callback = callback
        this.update()
    }
    get() {
        Dep.target = this
        let value = this.getter()
        Dep.target = null
        return value
    }
    update() {
        let newVal = this.get()
        if (newVal !== this.oldVal) {
            this.oldVal = newVal
            this.callback && this.callback(newVal)
        }
    }
}

function expToFunc(exp, data) {
    return new Function('with(this){return ' + exp + '}').bind(data)
}

function proxy(vueInstance, options) {
    for (let prop in options.data) {
        Object.defineProperty(vueInstance, prop, {
            get() {
                return vueInstance.$data[prop]
            },
            set(newVal) {
                vueInstance.$data[prop] = newVal
            }
        })
    }
}