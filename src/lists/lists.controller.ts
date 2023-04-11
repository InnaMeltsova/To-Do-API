import { Controller, Get, Post, Delete, Put, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { ListsService } from './lists.service';
import { CreateListDto, UpdateListDto } from './dto/lists.dto';

@Controller('lists')
export class ListsController {
    constructor(private readonly listsService: ListsService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    async getLists() {
        return await this.listsService.getLists();
    }

    @Post('new')
    @HttpCode(HttpStatus.CREATED)
    async createList(@Body() createListDTO: CreateListDto ) {
        return await this.listsService.createList(createListDTO);
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    async updateList(@Param('id') id: string, @Body() updateListDto: UpdateListDto) {
        return await this.listsService.updateList(id, updateListDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async deleteList(@Param('id') id: string) {
        return await this.listsService.deleteList(id);
    }
}
