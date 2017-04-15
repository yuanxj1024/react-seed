import UserModel from './user.js';

const bindModels = (dva) => {
  dva.model(UserModel);
};

export default bindModels;
