import { combineReducers } from "redux";
import { PersistConfig } from "redux-persist/es/types";
import storage from "redux-persist/lib/storage";
import elementReducer from "./slices/elements";

const rootPersistConfig: PersistConfig<any> = {
  key: "root",
  storage,
  keyPrefix: "softsuite-",
};

const rootReducer = combineReducers({
  elements: elementReducer,
});

export { rootPersistConfig, rootReducer };
