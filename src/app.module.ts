import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [CoursesModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
