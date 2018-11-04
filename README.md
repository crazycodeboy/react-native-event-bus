# react-native-event-bus

[ ![release](https://img.shields.io/github/release/crazycodeboy/react-native-event-bus.svg?maxAge=2592000?style=flat-square)](https://github.com/crazycodeboy/react-native-event-bus/releases)
[ ![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/crazycodeboy/react-native-event-bus/pulls)
[ ![NPM version](http://img.shields.io/npm/v/react-native-event-bus.svg?style=flat)](https://www.npmjs.com/package/react-native-event-bus)
[![License MIT](http://img.shields.io/badge/license-MIT-orange.svg?style=flat)](https://raw.githubusercontent.com/crazycodeboy/react-native-event-bus/master/LICENSE)

Event bus for react native, cross-interface communication solution, it works on iOS and Android.

## Content

- [Installation](#installation)
- [Getting started](#getting-started)
- [API](#api)
- [Contribution](#contribution)


## Installation

* 1.Run `npm i react-native-event-bus --save`
* 2.`import EventBus from 'react-native-event-bus'`

## Getting started  

Add `react-native-event-bus` to your js file.   

`import EventBus from 'react-native-event-bus'`

Inside your component's render method, use CheckBox:   

### fireEvent

```javascript
EventBus.getInstance().fireEvent("your event name", {
    ...params
})

//
```

### addListener

```
componentDidMount() {
    EventBus.getInstance().addListener("your event name", this.listener = data => {
        // handle the event
    })
}

componentWillUnmount() {
    EventBus.getInstance().removeListener(this.listener);
}
```

## Contribution

Issues are welcome. Please add a screenshot of bug and code snippet. Quickest way to solve issue is to reproduce it on one of the examples.

Pull requests are welcome. If you want to change API or making something big better to create issue and discuss it first.

---

**MIT Licensed**
