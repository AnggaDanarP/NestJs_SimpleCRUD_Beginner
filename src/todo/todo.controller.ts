import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  //   Req,
} from '@nestjs/common';
// import { Request } from 'express';
import { TodoInterface, TodoService } from './todo.service';

interface CreateTodoDto {
  name: string;
  complete: boolean;
}

@Controller('cats')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    const todo = await this.todoService.create(createTodoDto);
    if (!todo) {
      return 'error in creating';
    }
    return 'todo created successfully';
  }

  @Get()
  async findAll() {
    const cats: Array<TodoInterface> = await this.todoService.findAll();
    return cats;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    await this.todoService.update(id, body);
    return 'cat update';
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.todoService.delete(id);
    return 'cat deleted';
  }
}
