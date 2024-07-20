import { Injectable } from '@nestjs/common';
import { CreateBettorDto } from './dto/create-bettor.dto';
import { UpdateBettorDto } from './dto/update-bettor.dto';
import { AcebaseService } from 'src/acebase/acebase.service';

@Injectable()
export class BettorsService {
  constructor(private readonly aceBaseService: AcebaseService) {}
  async create(createBettorDto: CreateBettorDto) {
    const data = {
      address: createBettorDto.address,
      username: '',
      amount: 0,
    };
    return this.aceBaseService.createDataIfNotExists(
      'bettors/' + Math.random().toString(36),
      data,
      () => true,
    );
  }

  async findAll() {
    return await this.aceBaseService.readData('bettors');
  }

  async findOne(id: string) {
    return this.aceBaseService.readData('bettors/' + id);
  }

  async update(id: string, updateBettorDto: UpdateBettorDto) {
    const path = 'bettors/' + id;
    return await this.aceBaseService.updateData(path, updateBettorDto);
  }

  async remove(id: string) {
    return;
  }
}
