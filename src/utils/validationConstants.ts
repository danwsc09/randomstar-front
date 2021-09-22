type constraint = {
  regex: RegExp;
  minLength: number;
  maxLength: number;
};

export const usernameConstraints: constraint = {
  regex: /[a-zA-Z0-9_]{4,16}/,
  minLength: 4,
  maxLength: 16,
};

export const nicknameConstraints: constraint = {
  regex: /.*/,
  minLength: 2,
  maxLength: 10,
};

export const passwordConstraints: constraint = {
  regex: /[a-zA-Z0-9_\-!@#$%^&*()]{4,16}/,
  minLength: 6,
  maxLength: 16,
};

export const emailConstraints: constraint = {
  // regex from: https://regexr.com/3e48o
  regex: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
  minLength: 0,
  maxLength: 50,
};
