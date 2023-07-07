import React from 'react';
import './App.css';
// import Sidebar from './components/Sidebar/sidebar';
// import MainData from './components/MainBody/mainData';
// import RightSide from './components/RightSide/RightSide';

const App = () => {
  return (

    <div className='App'>
      <div className='AppGlass'>
       {/* <Sidebar/>
       <MainData/>
       <RightSide/> */}
      </div>

    </div>

  );
};

export default App;




// import { Layout } from "antd";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <Layouts />
//       </div>
//     ),
//   },
//   {
//     path: "/layout/link1",
//     element: (
//       <div>
//         <LayoutsOne />
//       </div>
//     ),
//   },
//   {
//     path: "/layout/link2",
//     element: (
//       <div>
//         <LayoutsTwo />
//       </div>
//     ),
//   },
//   {
//     path: "/copywrite",
//     element: (
//       <div>
//         Route One <Layouts />
//       </div>
//     ),
//   },
// ]);

// function App() {
//   return (
//     <div className="App">
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;

// function Layouts() {
//   return (
//     <div className="">
//       <div style={{ width: "100%", backgroundColor: "blue", height: "100px" }}>
//         <HeaderComponent />
//       </div>
//       <div
//         style={{
//           display: "flex",
//           backgroundColor: "DodgerBlue",
//           width: "100%",
//           height: "500px",
//         }}
//       >
//         <div style={{ width: "20%", backgroundColor: "red" }}>
//           <SidebarComponent />
//         </div>
//         <div style={{ width: "80%", backgroundColor: "green" }}>
//           <MainComponent />
//         </div>
//       </div>
//       <div style={{ width: "100%", backgroundColor: "gray", height: "100px" }}>
//         <Footer />
//       </div>
//     </div>
//   );
// }

// function LayoutsOne() {
//   return (
//     <FixedLayout>
//       <div style={{ width: "80%", backgroundColor: "green" }}>
//         This is layout one
//       </div>
//     </FixedLayout>
//   );
// }

// function LayoutsTwo() {
//   return (
//     <FixedLayout>
//       <div style={{ width: "100%", backgroundColor: "green" }}>
//         This is layout two
//       </div>
//     </FixedLayout>
//   );
// }

// function FixedLayout(props) {
//   return (
//     <div className="">
//       <div style={{ width: "100%", backgroundColor: "blue", height: "100px" }}>
//         <HeaderComponent />
//       </div>
//       <div
//         style={{
//           display: "flex",
//           backgroundColor: "DodgerBlue",
//           width: "100%",
//           height: "500px",
//         }}
//       >
//         <div style={{ width: "20%", backgroundColor: "red" }}>
//           <SidebarComponent />
//         </div>
//         <div style={{ width: "80%", backgroundColor: "green" }}>
//           <MainComponent />
//         </div>
//         {props.children}
//       </div>
//       <div style={{ width: "100%", backgroundColor: "gray", height: "100px" }}>
//         <Footer />
//       </div>
//     </div>
//   );
// }

// const HeaderComponent = () => {
//   return <div> This is header </div>;
// };

// const SidebarComponent = () => {
//   return <div> Side bar</div>;
// };

// const MainComponent = () => {
//   return (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           backgroundColor: "DodgerBlue",
//         }}
//       >
//         <div style={{ marginLeft: "30px" }}>
//           <a href={`/layout/link1`}> Link 1 </a>
//         </div>
//         <div style={{ marginLeft: "30px" }}>
//           <a href={`/layout/link2`}>Link 2 </a>
//         </div>
//         <div style={{ marginLeft: "30px" }}> Link 3</div>
//         <div style={{ marginLeft: "30px" }}> Link 4</div>
//       </div>
//       <div>Here is main content</div>
//     </div>
//   );
// };

// const Footer = () => {
//   return <div> Main Content</div>;
// };
