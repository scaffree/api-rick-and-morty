import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Characters } from './character.entity';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-coment.dto';

@Injectable()
export class CharactersService {

    constructor(@InjectRepository(Characters) private charactersRepo: Repository<Characters>) { }

    createComment(data: CreateCommentDto) {
        const newComment = this.charactersRepo.create(data)
        return this.charactersRepo.save(newComment)
    }

}
