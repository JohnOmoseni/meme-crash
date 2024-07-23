import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BettorsService } from './bettors.service';
import { CreateBettorDto } from './dto/create-bettor.dto';
import { UpdateBettorDto } from './dto/update-bettor.dto';

@Controller('bettors')
export class BettorsController {
  constructor(private readonly bettorsService: BettorsService) {}

  @Post('login')
  create(@Body() createBettorDto: CreateBettorDto) {
    return this.bettorsService.create(createBettorDto);
  }

  @Get()
  findAll() {
    return this.bettorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bettorsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBettorDto: UpdateBettorDto) {
    return; //this.bettorsService.update(id, updateBettorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return; //this.bettorsService.remove(id);
  }
}
