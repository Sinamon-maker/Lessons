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

export const jobPlammer: Job = new Job(role.plammer, 70_000)

console.log(jobPlammer.salary)
jobPlammer.work('Petr')

export const JobBuilder: Job = new Job(role.builder, 60_000)
