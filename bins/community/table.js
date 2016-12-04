/**
 * Created by Exper1ence on 2016/12/4.
 */
module.exports = {
    subject: {
        user: 1,
        field: 2,
        community: 3,
    },//4bit
    behavior: {
        write: 16,
        answer: 32,
        reply: 48,
        read: 64,
        ask: 80,
        delete: 96,
        response: 112,
        join: 128,
        quit: 144,
        enter: 160,
        leave: 176,
        apply: 192,
    },//6bit
    target: {
        post: 1024,
        question: 2048,
        field: 3072,
        community: 4096,
        area: 5120,
        response: 6144,
        posts: 7168,
    },//6bit
};