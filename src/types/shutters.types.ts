import { Command } from './commands.types';

type ShutterCommands = {
  up: Command;
  down: Command;
  stop?: Command;
}

export type Shutter = {
  id: number;
  name: string;
  cmd: ShutterCommands;
};

export type Shutters = Shutter[];
