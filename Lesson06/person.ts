import Job, {jobPlammer, JobBuilder} from "./job";

class Person {
    private _job?: Job;
    private _name: string;

    constructor(_name:string){
        this._name = _name
    }

    set job(val: Job){
        this._job = val;
        
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

Ivan.job = JobBuilder
Ivan.work()
Ivan.getSalary()


const Volodimir: Person = new Person('Volodimir')

Volodimir.job = jobPlammer
Volodimir.work()
Volodimir.getSalary()