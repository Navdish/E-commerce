const roles = {
    "USER": {
        "product": [2],
        "orders": [1, 2, 3, 4],
        "cart": [1, 2, 3, 4],
        "delivery": [],
    },
    "ADMIN": {
        "product": [1, 2, 3, 4],
        "orders": [4],
        "cart": [],
        "delivery": [1, 2, 3, 4], 
    },
    "VENDOR": {
        "product": [1, 2, 3, 4],
        "orders": [],
        "cart": [],
        "delivery": [],
    }
}
module.exports = roles;

// {
//     1: POST,
//     2: GET,
//     3: PUT,
//     4: DELETE
// }