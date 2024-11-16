const { writeFile, readFile} = require('fs').promises

const start= async () => {
    try{
        const first = await readFile('./content/first.txt' , 'utf8')
        const second = await readFile ('./content/second.txt' , 'utf8') 
    await writeFile(
            './content/temp.txt',`
            Here is the result : ${first}, ${second}`,
            {flag: 'a'}
        )
    console.log(first, second)
    }catch (error){
    console.log(error)
    }
}

start()


   // const  readWrite = async () => {
    //    try {
     //      await readFile()
     //      await writeFile()
    
     //   }catch(error){
      //      console.log('error has occurred:', error)
    //    }
      
     //    }
    

  //  readWrite();
    


