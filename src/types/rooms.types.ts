import { Shutters } from './shutters.types';

export type Room = {
  name: string;
  val: string;
  shutters?: Shutters;
};

export type Rooms = Room[];
