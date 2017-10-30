import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PhotosReducer from './reducer_photos';
import ProfileReducer from './reducer_profile';
import TeamIndexTitleReducer from './reducer_team_index_title';

const rootReducer = combineReducers({
	photos: PhotosReducer,
	profileimages: ProfileReducer,
	TeamIndexTitleReducer: TeamIndexTitleReducer,
	form: formReducer
});

export default rootReducer;