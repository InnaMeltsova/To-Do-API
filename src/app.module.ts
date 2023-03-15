import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListsModule } from './lists/lists.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ListsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/mongodb')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
