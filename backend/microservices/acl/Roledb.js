const roledb = {
    "User": {
        "product": [2],
        "orders": [1, 2, 3, 4],
        "cart": [1, 2, 3, 4],
        "delivery": [],
    },
    "Admin": {
        "product": [1, 2, 3, 4],
        "orders": [3],
        "cart": [],
        "delivery": [1, 2, 3, 4], 
    },
    "Vendor": {
        "product": [1, 2, 3, 4],
        "orders": [],
        "cart": [],
        "delivery": [],
    }
}
module.exports = roledb;
// 1-post 2-get 3-delete 4-put