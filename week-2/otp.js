// Simulate OTP sending flow in Node.js:

// Show “OTP Sent Successfully”
console.log("OTP Sent Successfully")

// Start 10-second countdown
let seconds=5
let intervalId=setInterval(()=>{
    seconds--
    console.log(seconds)
    if(seconds==0){
        console.log("resend OTP")
        clearInterval(intervalId)
    }
},1000)

// Allow resend only after countdown ends

// setInterval(()=>{
//     console.log("resend OTP")
//     console.log("OTP Sent Successfully")
// },10000)