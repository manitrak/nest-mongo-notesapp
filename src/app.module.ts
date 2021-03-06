import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteSchema } from './note.models';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://manitrak:Sx3qZYxLNiuYKH4Y@cluster0.sqrev.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name:'note',schema:NoteSchema}])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
