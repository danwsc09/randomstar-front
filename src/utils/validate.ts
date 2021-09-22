import {
  usernameConstraints,
  nicknameConstraints,
  passwordConstraints,
  emailConstraints,
} from './validationConstants';

export const isValid = (inputName: string, inputValue: string): boolean => {
  let constraints;
  switch (inputName) {
    case 'username':
      constraints = usernameConstraints;
      break;
    case 'nickname':
      constraints = nicknameConstraints;
      break;
    case 'password':
      constraints = passwordConstraints;
      break;
    case 'email':
      constraints = emailConstraints;
      break;
    default:
      throw new Error('unknown user info type');
  }

  const { minLength, maxLength, regex } = constraints;
  // length match
  if (inputValue.length < minLength || inputValue.length > maxLength) {
    return false;
  }

  // regex match
  if (inputValue.match(regex) === null) {
    return false;
  }

  return true;
};
/*
export const validateUser = (username: string): boolean =>
  validate('username', username);

export const validateNickname = (nickname: string): boolean =>
  validate('nickname', nickname);

export const validatePassword = (password: string): boolean =>
  validate('password', password);

export const validateEmail = (email: string): boolean =>
  validate('email', email);
*/
