import { Document } from 'mongoose';
import { Task } from './task.interface';

export interface List extends Document {
    readonly id: string;
    readonly name: string;
    readonly listTasks: Task[];
}