export class MessaeDto {
    message: string[] = [];


    constructor(message: string){
        this.message[0] =  message ;
    }
}