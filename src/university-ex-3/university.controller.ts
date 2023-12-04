import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UniversityService } from './university.service';

@Controller('university')
export class UniversityController {
  constructor(private readonly universityService: UniversityService) {}

  @Get()
  getStudents() {
    return this.universityService.findAll();
  }

  @Post()
  createStudent(@Body() university) {
    return this.universityService.createOne(university);
  }

  @Put(':id')
  updateStudent(@Param('id') id, @Body() university) {
    return this.universityService.updateOne(id, university);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id) {
    return this.universityService.deleteOne(id);
  }
}
