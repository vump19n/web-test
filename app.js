var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다'
    }
})
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [{
            text: 'JavaScript 배우기'
        }, {
            text: 'Vue 배우기'
        }, {
            text: '무언가 멋진 것을 만들기'
        }]
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})