import { Command } from './commands.types';

export type Shutter = {
  id: number;
  name: string;
  cmd: Record<string, Command>;
};

export type Shutters = Shutter[];
