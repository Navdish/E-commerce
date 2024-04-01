const express = require('express');
const cors = require('cors');
require("dotenv").config();
const app = express();
const roledb = require('./Roledb');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(cors());
app.use('/uploads', express.static('uploads'))

// app.use('/', require('./routes'))
app.post('/acl', (req, res) => {
    const { role, service, access } = req.body;
    // Check if the role exists in the roledb
    if (roledb.hasOwnProperty(role)) {
        const roleData = roledb[role];
        // Check if the service exists for the given role
        if (roleData.hasOwnProperty(service) && Array.isArray(roleData[service])) {
            const ans = roleData[service].includes(access);
            console.log(role, service, access,ans, "kkkkkkkkkkkk")

            res.json(ans); // Send the result
        } else {
            console.log(role, service, access, "dddddddddddd")
            res.json(false); // Service not found or not an array
        }
    } else {
        console.log(role, service, access, "ssssssss")
        res.json(false); // Role not found
    }
})
app.listen(8080, () => {
    console.log(`App is running on port 8080`);
});