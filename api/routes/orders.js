const express = require("express");
const router = express.Router();
const checkAuth=require("../middleware/check-auth");
const Orderscontorller=require('../controllers/orders');
// Handle incoming GET requests to /orders
router.get("/",checkAuth,Orderscontorller.orders_get_all );

router.post("/",checkAuth, Orderscontorller.orders_create_order);

router.get("/:orderId",checkAuth,Orderscontorller.orders_get_order);

router.delete("/:orderId",checkAuth, Orderscontorller.orders_delete_order);

module.exports = router;