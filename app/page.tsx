'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MainPage } from "./pages/main";

export default function Home() {
  const queryClient = new QueryClient();



  return (
    <QueryClientProvider client={queryClient}>
       <MainPage/>
    </QueryClientProvider>
  );
}
