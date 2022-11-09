import { Controller, Post, Get, Body, ParseIntPipe, Param } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CreateCommentDto } from './dto/create-coment.dto';

@Controller('characters')
export class CharactersController {

    constructor(private charactersService: CharactersService) { }

    @Post()
    createComment(@Body() newComment: CreateCommentDto) {
    return this.charactersService.createComment(newComment)
}

}
