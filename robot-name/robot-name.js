// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot { 
    constructor(){
        this.name = this.getName()
    }

    static names=[]

    getName = () => {
        const arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
      
        let fname='';
        let lname='';
        let name;
      
          for(let i = 0; i < 2; i++){
            fname += arr[Math.floor(Math.random() * arr.length)]
          }
      
          for(let i = 0; i < 3; i++){
            lname += Math.floor(Math.random()*10 )
          }
      
        name = fname + lname;
        names.push(name)
      }
    }


Robot.releaseNames = () => { 
    return names
};
