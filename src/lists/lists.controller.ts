import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { ListsService } from './lists.service';
import { CreateListDto, UpdateListDto } from './dto/lists.dto';

@Controller('lists')
export class ListsController {
    constructor(private readonly listsService: ListsService) { }

    @Get()
    async getLists() {
        await this.listsService.getLists();
    }

    @Post('new')
    async createList(@Body() createListDTO: CreateListDto ) {
        await this.listsService.createList(createListDTO);
    }

    @Put(':id')
    async updateList(@Param('id') id: string, @Body() updateListDto: UpdateListDto) {
        await this.listsService.updateList(id, updateListDto);
    }

    @Delete(':id')
    async deleteList(@Param('id') id: string) {
        await this.listsService.deleteList(id);
    }
}
