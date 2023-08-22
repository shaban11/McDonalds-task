

const getData = function() {



    fetch("task.xml").then(response => {
        return response.text()
    }).then(xmlString => {
        const xmlDocument = new DOMParser().parseFromString(xmlString, 'text/xml');

        const accessControl = xmlDocument.querySelectorAll('accessControl')
        const badges = xmlDocument.querySelectorAll('badge');
        const failedAccess = xmlDocument.querySelectorAll('failedaccesses');

        let childElements = accessControl[0].children;
   
        // console.log(accessControl)
        let refinedData = [...childElements];

        console.log(refinedData)

        const allBadges = refinedData[0];
        const allBadgesNow = allBadges.querySelectorAll('badge');
        const badgesArr = [...allBadgesNow]

        const allFailedAccess = refinedData[1];
        const allFailedAccessNow = allFailedAccess.querySelectorAll('accessattempt');
        const failedAccessArr = [...allFailedAccessNow];

        console.log(failedAccessArr)
        console.log(badgesArr)

        failedAccessArr.forEach(items => {
            // console.log(items)
            const itemNumber 
        })

        // Loop for badges 

        // badgesArr.forEach(item => {
 

        //     const id = item.getAttribute('number');
     

        //     let isPrime = true;
    
        //     if(id <= 1) {
        //         console.log("1 is neither prime nor composite number")
        //     } else if(id > 1) {
        //         for(let i = 2; i < id; i++) {
        //             if(id % i == 0) {
        //                 isPrime = false;
        //                 break;
        //             }
        //         }
        //     }

    
        //     if(isPrime) {
        //         console.log(`${id} is a prime number`);
    
        //     } 
        // })
   
    

    });


}

const btn = document.getElementById('action');
btn.addEventListener('click', getData);