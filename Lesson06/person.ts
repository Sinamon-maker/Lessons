import Job, {role} from "./job";

class Person {
    private _job?: Job;
    private _name: string;

    constructor(_name:string){
        this._name = _name
    }

    hireJob(val: role, payment: number){
        this._job = new Job(val, payment);
        
    }

    getSalary(){
        if(this._job){
            console.log(this._job.salary)
        }
         
    }

    work(){
        if(this._job){
            this._job.work(this._name)
        }
    }
}

const Ivan: Person = new Person('Ivan')

Ivan.getSalary()

Ivan.hireJob(role.builder, 60_000)
Ivan.work()
Ivan.getSalary()