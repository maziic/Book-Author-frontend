import logo from "./logo.svg";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login";
import { Home } from "./component/home";
import { Navigation } from "./component/navigation";
import { Logout } from "./component/logout";
function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// // Create the books

// const booksData = [
//   {
//     title: "Go to Market",
//     author: "maged1", // Replace with the actual Author instance
//   },
//   {
//     title: "Study",
//     author: "maged2",
//   },
//   {
//     title: "Sammy's books",
//     author: "maged3",
//   },
//   {
//     title: "Article",
//     author: "maged4",
//   },
// ];

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       viewCompleted: true,
//       booksData: booksData,
//     };
//   }

//   displayCompleted = (status) => {
//     if (status) {
//       return this.setState({ viewCompleted: true });
//     }

//     return this.setState({ viewCompleted: false });
//   };

//   renderTabList = () => {
//     return (
//       <div className="nav nav-tabs">
//         <span
//           className={this.state.viewCompleted ? "nav-link active" : "nav-link"}
//           onClick={() => this.displayCompleted(true)}
//         >
//           Complete
//         </span>
//         <span
//           className={this.state.viewCompleted ? "nav-link" : "nav-link active"}
//           onClick={() => this.displayCompleted(false)}
//         >
//           Incomplete
//         </span>
//       </div>
//     );
//   };

//   renderItems = () => {
//     const { viewCompleted } = this.state;
//     const newItems = this.state.booksData.filter(
//       (item) => item.completed == viewCompleted
//     );

//     return newItems.map((item) => (
//       <li
//         key={item.author}
//         className="list-group-item d-flex justify-content-between align-items-center"
//       >
//         {/* <span
//           className={`todo-title mr-2 ${this.state.viewCompleted ? "" : ""}`}
//           title={item.title}
//         >
//           {item.title}
//         </span>
//         <span>
//           <button className="btn btn-secondary mr-2">Edit</button>
//           <button className="btn btn-danger">Delete</button>
//         </span> */}
//       </li>
//     ));
//   };

//   render() {
//     return (
//       <main className="container">
//         <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
//         <div className="row">
//           <div className="col-md-6 col-sm-10 mx-auto p-0">
//             <div className="card p-3">
//               <div className="mb-4">
//                 <button className="btn btn-primary">Add task</button>
//               </div>
//               {this.renderTabList()}
//               <ul className="list-group list-group-flush border-top-0">
//                 {this.renderItems()}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </main>
//     );
//   }
// }
