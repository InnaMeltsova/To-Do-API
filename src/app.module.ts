import { Module } from '@nestjs/common';
import { ListsModule } from './lists/lists.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ListsModule,
    MongooseModule.forRoot('mongodb://mongodb')
  ]
})
export class AppModule {}
