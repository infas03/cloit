import PrelineScript from "@/components/PrelineScript";
import configureStoreAndPersist from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = configureStoreAndPersist();


export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
        <PrelineScript />
      </PersistGate>
    </Provider>
  );
}
