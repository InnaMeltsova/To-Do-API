import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { v4 as uuidv4 } from 'uuid';
import { List } from './interfaces/list.interface';
import { CreateListDto, UpdateListDto } from './dto/lists.dto';

@Injectable()
export class ListsService {
    constructor(@InjectModel('List') private listModel: Model<List>) { }

    async getLists(): Promise<List[]> {
        const list = await this.listModel.find();
        if (!list || list.length == 0) {
            throw new NotFoundException('Lists data not found!');
        }
        return list;
    }

    async createList(listData: CreateListDto): Promise<List> {
        const newList = await new this.listModel(listData);
        return newList.save();
    }

    async updateList(id: string, updateListDto: UpdateListDto): Promise<List> {
        const existingList = await this.listModel.findByIdAndUpdate(id, updateListDto, { new: true });
        if (!existingList) {
            throw new NotFoundException(`List #${id} not found`);
          } 
        return existingList;
    }

    async deleteList(id: string): Promise<List> {
        const deletedList = await this.listModel.findByIdAndDelete(id);
        if (!deletedList) {
            throw new NotFoundException(`Student #${id} not found`);
          }
          return deletedList;
    }
}
