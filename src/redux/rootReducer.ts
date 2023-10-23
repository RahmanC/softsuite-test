import { combineReducers } from "redux";
import { PersistConfig } from "redux-persist/es/types";
import storage from "redux-persist/lib/storage";
import elementReducer from "./slices/elements";
import lookupReducer from "./slices/lookups";
import utilsReducer from "./slices/util";

const rootPersistConfig: PersistConfig<any> = {
  key: "root",
  storage,
  keyPrefix: "softsuite-",
};

const rootReducer = combineReducers({
  elements: elementReducer,
  lookups: lookupReducer,
  utils: utilsReducer,
});

export { rootPersistConfig, rootReducer };
