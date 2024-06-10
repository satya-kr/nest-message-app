import { 
    Body, 
    Controller, 
    Get, 
    Param, 
    Post,
    NotFoundException 
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-mesasge.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {

    // messagesService: MessagesService
    // constructor() {
    //     this.messagesService = new MessagesService();
    // }

     constructor(
        private messagesService: MessagesService
     ) {

     }

    @Get()
    listMessages() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(
        @Body() body: CreateMessageDto
    ) {
        return this.messagesService.create(body.content);
    }

    @Get(':id')
    async getMessage(
        @Param('id') id: any
    ) {
        const message = await this.messagesService.findOne(id);
        if (!message) {
            throw new NotFoundException('message not found');
        }
        return message
    }

}