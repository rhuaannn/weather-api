import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "styled-components";
import  GlobalStyles  from "./styles/global";
import theme from "./styles/theme";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <QueryClientProvider client={queryClient}>
        <App />
        </QueryClientProvider>
    </ThemeProvider>

    
  </React.StrictMode>
);
