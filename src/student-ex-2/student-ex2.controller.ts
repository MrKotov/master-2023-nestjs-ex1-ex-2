import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentServiceEx2 } from './student-ex2.service';

@Controller('student-ex2')
export class StudentControllerEx2 {
  constructor(private readonly studentService: StudentServiceEx2) {}

  @Get()
  getStudents() {
    return this.studentService.findAll();
  }

  @Post()
  createStudent(@Body() student) {
    return this.studentService.createOne(student);
  }
}
