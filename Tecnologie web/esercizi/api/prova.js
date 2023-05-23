let promessa = function () {
    return new Promise((resolve, reject) => {
        let x = 5;
        x = x + 3;
        reject(x); 
    })
}


promessa().
    then((data) => console.log("Resolve " + data)).
    catch((data) => console.log("Reject " + data))