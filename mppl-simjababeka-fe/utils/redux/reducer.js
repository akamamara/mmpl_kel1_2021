import { combineReducers } from "@reduxjs/toolkit";

import loading from "@/utils/redux/slice/loading";
import alert from "@/utils/redux/slice/alert";
import user from "@/utils/redux/slice/user";

const rootReducer = combineReducers({
	loading,
	alert,
	user,
});

export default rootReducer;
