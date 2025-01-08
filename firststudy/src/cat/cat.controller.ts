import { Controller, Get, Req, Post, Param, Body } from '@nestjs/common';
import { CreateCatDto } from './crate-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    return `This action adds a new cat : ${createCatDto.name}`;
  }

  @Get()
  findAll(): string {
    return 'this action returns all cats';
  }

  /*   findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  } */

  @Get('breed') // 확장 경로: /cats/breed
  getBreeds(): string {
    return 'This action returns all cat breeds';
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
