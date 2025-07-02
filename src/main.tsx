import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import HomePage from "./pages/Home";
import BlogPage from "./pages/Blog";
import BookingPage from "./pages/Booking";
import ContactPage from "./pages/Contact";
import DestinationsPage from "./pages/Destinations";
import ServicesPage from "./pages/Services";
import AboutPage from "./pages/About";
import NotFoundPage from "./pages/NotFound";
import ConsultationPage from "./pages/Consultation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/destinations", element: <DestinationsPage />},
      { path: "/services/", element: <ServicesPage/> }, 
      { path: "/about/", element: <AboutPage /> },
      { path: "/contact/", element: <ContactPage />},
      { path: "/booking/", element: <BookingPage />},
      { path: "/book-consultation/", element: <ConsultationPage />},
      { path: "/blog/", element: <BlogPage />},
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
