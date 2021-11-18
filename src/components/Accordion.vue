<template>
  <div class="container-accordion">
    <button class="accordion">קצת על המערכת</button>
    <div class="panel">
      <p>
        זוהי מערכת לניהול הוצאות והכנסות האישיות שלך,<br>
        המערכת תחשב את כלל ההוצאות האישיות שלך<br>
        ותקזז אותם באופן אוטומטי מול ההכנסות שתגדיר.<br>
        בפועל כל המטרה של המערכת היא שתדע מה אתה עושה עם הכסף שלך בדרך עיצובית שתהיה נוחה לך<br>
        ובכדי שתמיד תוכל להרים את הראש מעל המים
      </p>
    </div>
    <button class="accordion">חיזוי עתידי, מה זה אומר?</button>
    <div class="panel">
      <p>לאחר שתמלא את כלל ההוצאות שלך ואת כל ההכנסות <br>
        המערכת תדע לחשב בצורה אוטומטית איך יראו החודשים הבאים, וכן גם את השנים</p>
    </div>

<!--    <button class="accordion">מחשבונים</button>-->
<!--    <div class="panel">-->
<!--      <p>-->
<!--        במעכרת יהיו מספר מחשבונים שונים.-->
<!--      <ol>-->
<!--        <li>כמה כסף אני צריך לחסוך בכל חודש על מנת להגיע למטרה מסויימת</li>-->
<!--        <li>כמה זמן ייקח לי לי לחסוך למטרה מסויימת</li>-->
<!--        <li>מחשבון כללי כמה ניתן לחסוך בכל חודש</li>-->
<!--      </ol>-->
<!--      </p>-->
<!--    </div>-->

    <button class="accordion">עיצוב אישי</button>
    <div class="panel">
      <p>המערכת תהיה מותאמת לנוחיות שלך בלבד
        <br>
        אתה תחליט איך יהיה לך נוח לנהל את ההוצאות
        <br>
        אתה תבחר כמה טבלאות, קטגוריות רשימות יהיו לך
        <br>
        ככה שכל דבר יהיה לך ברור ונגיש לעין
      </p>
    </div>
    <button class="accordion">דוחות</button>
    <div class="panel">
      <p>כמובן שאת הכל אתה תוכל לייצא לקובץ אקסל או פי.די.אף, וכן גם הוצת דוח לפי הפרמטים שתצטרך</p>
    </div>
  </div>
</template>
<style>
.container-accordion {
  margin-top: 30px;
  text-align: center;
}

/* Style the buttons that are used to open and close the accordion panel */
.accordion {
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  background-color: #aa9875;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 50%;
  text-align: right;
  border: none;
  outline: none;
  transition: 0.4s;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active, .accordion:hover {
  background-color: #dcc9a4;
}

.accordion:after {
  content: '\02795'; /* Unicode character for "plus" sign (+) */
  font-size: 13px;
  color: #777;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "\2796"; /* Unicode character for "minus" sign (-) */
}

li {
  text-align: center;
  list-style: inside;
}

/* Style the accordion panel. Note: hidden by default */
.panel {
  padding: 0 18px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  color: #7a6a49;
  font-family: 'Assistant', sans-serif;
}
</style>

<script>
export default {
  name: "Accordion"
}
</script>

<style scoped>

</style>