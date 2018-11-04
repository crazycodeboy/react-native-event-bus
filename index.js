/**
 * 事件总线，跨界面通信解决方案
 * {eventName1:[listener1,listener2],eventName2:[listener3,listener4]}
 */
export default class EventBus {
    static getInstance() {
        if (typeof EventBus.instance === 'object') {
            return EventBus.instance;
        }
        return new EventBus();
    }

    constructor() {
        if (typeof EventBus.instance === 'object') {
            return EventBus.instance;
        }
        EventBus.instance = this;
        this.eventListeners = {};
    }

    /**
     * 发送事件
     * @param eventName 事件名 string
     * @param data 要发送的数据
     */
    fireEvent(eventName, data) {
        let listeners = this.eventListeners[eventName];
        if (Array.isArray(listeners)) {
            listeners.map(listener => {
                if (typeof listener === 'function') {
                    listener(data);
                }
            })
        }
    }

    /**
     * 注册事件监听器
     * @param eventName 事件名 string
     * @param listener 监听回调 function
     */
    addListener(eventName, listener) {
        let listeners = this.eventListeners[eventName];
        if (Array.isArray(listeners)) {
            listeners.push(listener);
        } else {
            this.eventListeners[eventName] = [listener];
        }
    }

    /**
     * 移除监听器
     * @param listener 监听回调 function
     */
    removeListener(listener) {
        Object.keys(this.eventListeners).map(eventName => {
            let listeners = this.eventListeners[eventName];
            this._remove(listeners, listener);
            if (listeners.length === 0) {
                delete this.eventListeners[eventName];
            }
        })
    }

    /**
     * 将数组中指定元素移除
     * **/
    _remove(array, item) {
        if (!array) return;
        for (let i = 0, l = array.length; i < l; i++) {
            if (item === array[i]) array.splice(i, 1);
        }
    }
}