import axios from 'axios';

//ACTION TYPE CONSTANTS
const GET_ALL_PROJECTS = 'GET_ALL_PROJECTS';

//ACTION CREATORS
export const _getProjects = (projects) => {
  return {
    type: GET_ALL_PROJECTS,
    projects,
  };
};

//THUNKS
export const getProjectsThunk = () => {
  return async (dispatch) => {
    try {
      const { data: projects } = await axios.get(`/api/projects`);
      dispatch(_getProjects(projects));
    } catch (error) {
      console.error(error);
    }
  };
};

//REDUCERS
const initialState = [];

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PROJECTS:
      return action.projects;
    default:
      return state;
  }
}
