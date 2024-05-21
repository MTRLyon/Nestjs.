import { Controller, Delete, Patch, Get, Post, Put, Body, Query, Param} from "@nestjs/common"; 
import { Taskservice } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task-dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller ('/tasks')
@ApiTags('tasks')
export class Taskcontroller {
    constructor(private tasksService:Taskservice) {}

    @Get()
    @ApiOperation({ summary: 'Get all tasks'})
    @ApiResponse({ status: 200, description: 'Return all tasks.' })
    @ApiResponse({ status: 403, description: 'Forbidden'})
    getAllTasks(@Query() query: any) {
        console.log(query)
       return this. tasksService.getTasks();
    }

    @Get('/:id')
    getTasks(@Param('id') id: string) {
        console.log(id)
      return this. tasksService.getTask(parseInt(id));
    }

    @Post()  
    @ApiOperation({ summary: 'Create a task' })   
    CreateTask(@Body() task: CreateTaskDto) {
       return this.tasksService.createTask(task);
    }

    @Put()
    updateTask(@Body() task: UpdateTaskDto) {
       return this.tasksService.updateTask(task);
    }

    @Delete()
    delteTask() {
       return this.tasksService.deleteTask();
    }

    @Patch()
    updateTaskStatus(){
        return this.tasksService.updateTaskStatus();
    }
}
