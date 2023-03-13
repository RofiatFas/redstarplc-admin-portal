import './App.css';
import {  BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";
import DestinationHubSortingCele from './components/DestinationHubSortingCele';
import DestinationHubSortingAdeolaOdeku from './components/DestinationHubSortingAdeolaOdeku';
import DestinationHubSortingAwolowo from './components/DestinationHubSortingAwolowo';
import OperationDeliveryStationArrival from './components/OperationDeliveryStationArrival';
import OperationDeliveryStationArrival2 from './components/OperationDeliveryStationArrival2';
import OperationDeliveryArrivalVerify from './components/OperationDeliveryArrivalVerify';
import DeliveryStationDelivery from './components/DeliveryStationDelivery';
import DeliveryStationDeliverPickup from './components/DeliveryStationDeliverPickup';
import NewShipment from './components/NewShipment';
import NewShipmentAddNewUser from './components/NewShipmentAddNewUser';
import NewShipmentSearch from './components/NewShipmentSearch';
// import DestinationHubSorting from './components/DestinationHubSorting';
// import DestinationHubSortingApapa from './components/DestinationHubSortingApapa';
// import OriginHubWeighingListVerification from './components/OriginHubWeighingListVerification';
// import OriginHubDebagging from './components/OriginHubDebagging';
// import OriginHubDebaggingDestination from './components/OriginHubDebaggingDestination';
// import OriginHubArrivalBag from './components/OriginHubArrivalBag';
// import OriginHubArrivalBagView from './components/OriginHubArrivalBagView';
// import OriginHubWeighingList from './components/OriginHubWeighingList';
// import OriginHub from './components/OriginHub';
// import TransactionReport from './components/TransactionReport';
// import CorporateCustomer from './components/CorporateCustomer';
// import CorporateCustomerDetails from './CustomerSubPages/CorporateCustomerDetails';
// import CorporateCustormerDetailsPrice from './CustomerSubPages/CorporateCustormerDetailsPrice';
// import ManageCustomers from './components/ManageCustomers';
// import Login from './components/Login';
// import Home from './components/Home';
// import ManageFrontline from './components/ManageFrontline';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <ManageFrontline /> */}
      {/* <ManageCustomers /> */}
      {/* <CorporateCustomer /> */}
      {/* <CorporateCustomerDetails/> */}
      {/* <CorporateCustormerDetailsPrice /> */}
      {/* <TransactionReport/> */}
      {/* <OriginHub/> */}
      {/* <OriginHubArrivalBag/> */}
      {/* <OriginHubArrivalBagView/> */}
      {/* <OriginHubWeighingList/> */}
      {/* <OriginHubWeighingListVerification/> */}
      {/* <OriginHubDebagging/> */}
      {/* <OriginHubDebaggingDestination/> */}
      {/* <DestinationHubSorting/> */}
      {/* <DestinationHubSortingApapa/> */}
      {/* <DestinationHubSortingCele/> */}
      {/* <DestinationHubSortingAdeolaOdeku/> */}
      {/* <DestinationHubSortingAwolowo/> */}
      {/* <OperationDeliveryStationArrival/> */}
      {/* <OperationDeliveryStationArrival2/> */}
      {/* <OperationDeliveryArrivalVerify/> */}
      {/* <DeliveryStationDelivery/> */}
      {/* <DeliveryStationDeliverPickup/> */}
      {/* <NewShipment/> */}
      {/* <NewShipmentAddNewUser/> */}
      <NewShipmentSearch/>
      {/* <Router>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route  path='/home' element={<Home />} /> */}
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        {/* </Route>
      </Routes>
    </Router> */}
    </div>
  );
}

export default App;
