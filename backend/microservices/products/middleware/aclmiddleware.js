const axios = require('axios')
const aclmiddleware = async (req, res, next) => {
    try {
        const { role, service } = req.body;
        if (!role || !service) {
            res.status(403).json({ error: 'Role and service is required' });
        }
        const typeRequest = req.method.toLowerCase(); // Assuming service corresponds to HTTP methods
        var access;
        if (typeRequest == "get")
            access = 2
        else if (typeRequest == "post")
            access = 1
        else if (typeRequest == "delete")
            access = 3
        else if (typeRequest == "put")
            access = 4
        // Send a request to the /acl route
        const response = await axios.post('http://localhost:8080/acl', { role, service, access });
        // Check the response from the /acl route
        if (response.data === true) {
            // If authorized, proceed to the next middleware or route handler
            next();
        } else {
            // If not authorized, send an error response
            res.status(403).json({ error: 'User is cant have access to do this' });
        }
    } catch (error) {
        // Handle any errors that occur during the request
        console.error('Error checking authorization:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = aclmiddleware;