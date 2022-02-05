function calculate(){
    let Principal = parseFloat(document.getElementById("Principal").value);
    let Interest = parseFloat(document.getElementById("Interest").value);
    let Years = parseFloat(document.getElementById("Years").value);
let ans= Math.ceil(Principal*Math.pow((1+Interest/100),Years));
document.getElementById("display").innerText=`₹ ${ans}`;
}