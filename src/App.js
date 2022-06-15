import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./App.css";

const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-grey text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              Sidebar
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">Sidebar w-0</div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              Navbar
            </div>
          </div>
          <div>
            <Routes>
              {/* Dashboa */}
              <Route path="/" element={<h1>Home</h1>} />
              <Route path="/ecommerce" element={<h1>ECommerce</h1>} />

              {/* Pages */}
              <Route path="/orders" element={<h1>Orders</h1>} />
              <Route path="/employees" element={<h1>Employees</h1>} />
              <Route path="/customers" element={<h1>Customers</h1>} />

              {/* Apps */}
              <Route path="/kanban" element={<h1>Kanban</h1>} />
              <Route path="/editor" element={<h1>Editor</h1>} />
              <Route path="/calendar" element={<h1>Calendar</h1>} />
              <Route path="/color-picker" element={<h1>Color Picker</h1>} />

              {/* Charts */}
              {/* routes for line, area, bar, pie, financial, color-mapping, pyramid, and stacked */}
              <Route path="/line" element={<h1>Line</h1>} />
              <Route path="/area" element={<h1>Area</h1>} />
              <Route path="/bar" element={<h1>Bar</h1>} />
              <Route path="/pie" element={<h1>Pie</h1>} />
              <Route path="/financial" element={<h1>Financial</h1>} />
              <Route path="/color-mapping" element={<h1>Color Mapping</h1>} />
              <Route path="/pyramid" element={<h1>Pyramid</h1>} />
              <Route path="/stacked" element={<h1>Stacked</h1>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
