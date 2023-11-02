import { createStore } from 'vuex'
import { vuexLocalStorage } from './plugins/vuexPersistence'

export default createStore({
    state: {
        message: 'Hello World',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    plugins: [vuexLocalStorage.plugin]
})