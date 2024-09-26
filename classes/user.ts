export class User {
    private static userList:{id:string,name:string}[]=[];
    constructor() {}

    public static getUserList() {
        return this.userList;
    }

    public static addUser(user:{id:string,name:string}) {
        if(this.userList.find((cur_user)=>cur_user.id==user.id)) return true;
        this.userList.push(user);
    }

    public static removeUser(id:string) {
        this.userList = this.userList.filter((user)=>user.id!=id);
    }
}