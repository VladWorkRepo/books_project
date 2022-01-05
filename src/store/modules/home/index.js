import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      books: [
        {
            title: "Practical MongoDB",
            subtitle: "Architecting, Developing, and Administering MongoDB",
            isbn13: "9781484206485",
            price: "$32.04",
            image: "https://itbook.store/img/books/9781484206485.png",
            url: "https://itbook.store/books/9781484206485",
            author: 'Joe Joe'
        },
        {
            title: "The Definitive Guide to MongoDB, 3rd Edition",
            subtitle: "A complete guide to dealing with Big Data using MongoDB",
            isbn13: "9781484211830",
            price: "$47.11",
            image: "https://itbook.store/img/books/9781484211830.png",
            url: "https://itbook.store/books/9781484211830",
            author: 'Peter Parker'
        },
        {
            title: "MongoDB in Action, 2nd Edition",
            subtitle: "Covers MongoDB version 3.0",
            isbn13: "9781617291609",
            price: "$32.10",
            image: "https://itbook.store/img/books/9781617291609.png",
            url: "https://itbook.store/books/9781617291609",
            author: 'Susan Bow'
        }
    ]
    };
  },
  mutations,
  actions,
  getters
};