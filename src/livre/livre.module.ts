import { Module } from '@nestjs/common';
import { LivreService } from './livre.service';
import { LivreController } from './livre.controller';

@Module({
  controllers: [LivreController],
  providers: [LivreService],
})
export class LivreModule {}
