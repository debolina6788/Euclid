import { SET_SELECTED_TAB } from 'Actions';


const initialState = {
	selectedTab: 'aboutPage',
};

export default (state = initialState, action) => {
	switch (action.type) {
	case SET_SELECTED_TAB:
		return {
			...state,
			selectedTab: action.selectedTab,
		};
	default:
		return state;
	}
};
