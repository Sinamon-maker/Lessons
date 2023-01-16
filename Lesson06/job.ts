export enum role {
    caterpillar='caterpillar',
    plammer='plammer',
    builder='builder',
    postman='postman',
    firemen='firemen'
}

export default class Job {
private _role: role;
private _salary: number;

constructor(_role: role, _salary: number){
    this._role = _role;
    this._salary = _salary;
}

  get salary() {
    return this._salary
  }

  work(personName:string):void{
    console.log(`${personName} works as a ${this._role}`)
  }

}

const job1: Job = new Job(role.plammer, 70_000)

console.log(job1.salary)
job1.work('Petr')