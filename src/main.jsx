import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { BasketProvider } from "./store/BasketProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BasketProvider>
    <App />
  </BasketProvider>
);
