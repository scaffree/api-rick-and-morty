import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Characters } from '../characters/character.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([Characters])
  ],
  providers: [CharactersService],
  controllers: [CharactersController]
})
export class CharactersModule { }
