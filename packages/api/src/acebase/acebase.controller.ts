import { Controller } from '@nestjs/common';
import { AcebaseService } from './acebase.service';

@Controller('acebase')
export class AcebaseController {
  constructor(private readonly acebaseService: AcebaseService) {}
}
