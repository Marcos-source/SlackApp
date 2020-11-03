const { Router } = require('express');

// import all routers;
const testeo = require('./testeo');

const router = Router();

// load each router on a route
router.use('/', testeo);

module.exports = router;
