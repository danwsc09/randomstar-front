declare module '*.png';
declare module '*.jpg';
declare module '*.svg';

/* AbilityInput component */
interface Ability {
  name: string;
  explanation: string;
}

/* NewGameForm Component */
interface PlayerInfo {
  name: string;
  ability?: string;
  race: string;
  location: string;
}
