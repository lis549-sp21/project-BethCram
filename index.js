$('img').css("curser", "pointer");
/* followed tutorial at https://codepen.io/Eric-Wallen/pen/mwydqL for time of day welcome message*/
var today = new Date();
var HourNow = today.getHours();
var greeting;
var icon;

if (HourNow < 12) {
    greeting = "Good morning! Have an awesome adventure";
    icon = "coffee";
}
else if (HourNow < 20) {
    greeting = "Afternoon! Drink water";
    icon = "water";
}
else if (HourNow < 24) {
    greeting = "Evening! Rest well";
    icon = "zzz";
}
else {
    greeting = "Welcome!";
    icon = "favicon"
}
/*
<input type="img" id="click"></input>
<button onclick="one()">1</button>
<button onclick="two()">2</button>
<button onclick="three()">3</button>
<script>

</script> */
