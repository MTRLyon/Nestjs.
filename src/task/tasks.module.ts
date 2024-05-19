import { Module } from "@nestjs/common";
import {Taskcontroller} from './task.controller';
import { Taskservice } from "./tasks.service";

@Module({
    controllers:[Taskcontroller],
    providers: [Taskservice]
})
export class Tasksmodule { }