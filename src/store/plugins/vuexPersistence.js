import VuexPersist from 'vuex-persist';

export const vuexLocalStorage = new VuexPersist({
    key: 'vuex',
    storage: window.localStorage,
})