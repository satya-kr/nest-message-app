import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

@Injectable()
export class MessagesService {

    // // Bad Aproche
    // messagesRepo: MessagesRepository; 
    // constructor(messagesRepo: MessagesRepository) {
    //     this.messagesRepo = messagesRepo;
    // }

    // Good Aproche
    // also we can do it like this
    constructor(
        private messagesRepo: MessagesRepository
    ) {}



    findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    create(content: string) {
        return this.messagesRepo.create(content);
    }
}