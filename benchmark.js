    //JS EXERCISES

    //21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"  


    let x = "John" 
    let y = "Doe"
    let result = x + " " + "<>" + " " + y;
    console.log(result)

    //22) Create an object with properties such name, surname, email

    const myPersonalDetails = {
        name : "Oluwabusola",
        surname : "Jibodu",
        email : "busola.jibodu@gmail.com",
        age : 28,
    }
    console.log(myPersonalDetails)
     
    //23) Delete Email from the previously created object
    delete myPersonalDetails.email
    console.log(myPersonalDetails)

    //24) Create an array with 10 strings in it

    let myColors = ["red", "blue", "yellow", "white", "teal", "purple", "green", "brown", "black", "pink"];
     
    //25) Print in the console every string in the previous array

    console.log(myColors)

    for (let i = 0; i < myColors.length; i++){
        console.log(myColors[i])
    }

    //26) Create an array with 100 random numbers in it
    //let randomNum = Math.random() * 100

    
    const randomArray = []
    for(let i = 0; i<100; i++) {
        randomArray.push(Math.floor(Math.random() * 1000) + 1)
    }
    
    console.log(randomArray)

    //27) Write a function to get the MAX and the MIN from the previously created array

    const maxMin = function() {     
            
    console.log(Math.max(randomArray) )
    console.log(Math.min(randomArray))   
    }
    maxMin()

    //28) Create an array of arrays, in which every array has 10 random numbers
    
    const newRandomArray = []
    for(let i = 0; i<10; i++) {
        newRandomArray.push(Math.floor(Math.random() * 100) + 1)
    }
    
    console.log(newRandomArray)

    /*const arrayOfArrays = []
    for(let i = 0; i<5; i++) {
        arrayOfArrays.push(newRandomArray)

        console.log(arrayOfArrays)*/ 


    //29) Create a function that gets 2 arrays and returns the longest one

    
    //30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
