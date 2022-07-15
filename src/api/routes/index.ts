import payments from "./PaymentsRoute";
import orders from "./OrdersRoute";
import products from "./ProductsRoute";
import customers from "./CustomersRoute";
import productLines from "./ProductLinesRoute";
import employees from "./EmployeesRoute";
import offices from "./OfficesRoute";
import orderDetail from './OrderDetailsRoute'
import { Router } from "express";

const routes = Router();

routes.use('/payments', payments);

routes.use('/orders', orders);

routes.use('/products', products);

routes.use('/customers', customers);

routes.use('/productlines', productLines);

routes.use('/employees', employees);

routes.use('/orderDetails', orderDetail);

routes.use('/offices', offices);
export default routes;