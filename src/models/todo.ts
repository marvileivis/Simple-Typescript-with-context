class Todo{
    id:string;
    text:string;
    description:string;
    constructor (todoText:string,tododescription:string){
        this.text=todoText;
        this.id=new Date().toISOString();
        this.description=tododescription;
    }
}
export default Todo;