import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ListsController } from './lists.controller';
import { ListsService } from './lists.service';
import { AuthenticationMiddleware } from 'src/common/authentication.middleware';
import { ListSchema } from './schemas/lists.schema';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: 'List', schema: ListSchema }])
  ],
  controllers: [ListsController],
  providers: [ListsService]
})

export class ListsModule implements NestModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(AuthenticationMiddleware).forRoutes(
      { method: RequestMethod.GET, path: '/lists' },
      { method: RequestMethod.POST, path: '/lists/new' },
      { method: RequestMethod.PUT, path: '/lists/:id' },
      { method: RequestMethod.DELETE, path: '/lists/:id' },
    )
  }
}