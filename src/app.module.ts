import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LivreModule } from './livre/livre.module';

@Module({
  imports: [UserModule, LivreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
