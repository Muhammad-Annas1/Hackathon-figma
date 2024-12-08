"use client"; // Directive for using client-side rendering

// Importing necessary dependencies and components
import React from "react";
import { Provider } from "react-redux"; // Redux Provider to connect the app with the Redux store
import { makeStore } from "../lib/store"; // Function to create and configure the Redux store
import { PersistGate } from "redux-persist/integration/react"; // PersistGate to handle persisted state
import SpinnerbLoader from "@/components/ui/SpinnerbLoader"; // A custom spinner loader component for loading state

// Props type definition for the Providers component
type Props = {
  children: React.ReactNode; // Accepts React child nodes for rendering nested components
};

// The Providers component wraps the application with Redux and persistence functionality
const Providers = ({ children }: Props) => {
  // Destructuring store and persistor from the makeStore function
  const { store, persistor } = makeStore();

  return (
    // Wrapping the application with the Redux Provider to provide the store
    <Provider store={store}>
      {/* PersistGate delays rendering of children until the persisted state has been retrieved */}
      <PersistGate
        loading={
          <div className="flex items-center justify-center h-96">
            {/* Display a spinner loader while the state is being restored */}
            <SpinnerbLoader className="w-10 border-2 border-gray-300 border-r-gray-600" />
          </div>
        }
        persistor={persistor} // Pass the persistor to manage the persisted state
      >
        {/* Render the children components once the state is ready */}
        {children}
      </PersistGate>
    </Provider>
  );
};

// Exporting the Providers component for use in the application
export default Providers;
