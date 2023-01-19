export interface User {
    id: string;
    firstname: string;
    surname: string;
    age: number;
}

export abstract class  UsersList <T extends User> {
  protected userList: T[] = [];

    public add(item:T):void {
        this.userList.push(item)
    }

    public remove(id:string): boolean{
     
        for (let i=0; i < this.userList.length; i+=1){
            if(this.userList[i].id === id){
                
                this.userList = [...this.userList.slice(0, i), ...this.userList.slice(i+1)]
                console.log(this.userList)
                return true
            }
            
        }
        return false
    }

    public get(id:string):T|null{
        return this.userList.find(it => it.id === id) ?? null
    }

    public sorted(val?: 'asc' | 'desc'): T[]{
        if(val === 'asc' || !val){
            const res = this.userList.sort((a, b) => a.age - b.age)
            return res
        }
        const res = this.userList.sort((a, b) => b.age - a.age)
            return res
    }
}