import { Controller, Get, Post, Delete, Put, Body, Param, Res, HttpStatus } from '@nestjs/common';
import { ListsService } from './lists.service';
import { List } from './interfaces/list.interface';
import { CreateListDto, UpdateListDto } from './dto/lists.dto';

@Controller('lists')
export class ListsController {
    constructor(private readonly listsService: ListsService) { }

    @Get()
    async getLists(@Res() response): Promise<List[]> {
        try {
            const lists = await this.listsService.getLists();
            return response.status(HttpStatus.OK).json({lists});
           } catch (err) {
            return response.status(err.status).json(err.response);
           }
    }

    @Post('new')
    async createList(@Res() response, @Body() createListDTO: CreateListDto ): Promise<List> {
        try {
            const list = await this.listsService.createList(createListDTO);
            return response.status(HttpStatus.CREATED).json({list});
         } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
            statusCode: 400,
            message: 'Error: List not created!',
            error: 'Bad Request'
         });
         }
    }

    @Put(':id')
    async updateList(@Res() response, @Param('id') id: string, @Body() updateListDto: UpdateListDto): Promise<List> {
        try {
            const list = await this.listsService.updateList(id, updateListDto);
            return response.status(HttpStatus.OK).json({list});
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Delete(':id')
    async deleteList(@Param('id') id: string): Promise<void> {
        await this.listsService.deleteList(id);
    }
}
