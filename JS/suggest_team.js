document.getElementById("teamForm").onsubmit = function () {

  let email = document.getElementById("email").value.trim();
  let teamName = document.getElementById("team_name").value.trim();
  let msg = document.getElementById("msg");

  msg.innerHTML = "";
  msg.classList.remove("error");
  msg.classList.remove("success");

  // ולידציה JS 1: אימייל חייב להכיל @ וגם נקודה אחרי ה-@
  if (email.indexOf("@") === -1 || email.indexOf(".") === -1 || email.indexOf(".") < email.indexOf("@")) {
    msg.innerHTML = "האימייל לא תקין";
    msg.classList.add("error");
    return false; // עוצר שליחה
  }

  // ולידציה JS 2: שם קבוצה חייב להכיל לפחות 3 אותיות (עברית/אנגלית)
  let lettersOnly = teamName.replace(/[^A-Za-z\u0590-\u05FF]/g, "");
  if (lettersOnly.length < 3) {
    msg.innerHTML = "שם קבוצה לא תקין – חייב להכיל לפחות 3 אותיות";
    msg.classList.add("error");
    return false; // עוצר שליחה
  }

  msg.innerHTML = "הטופס תקין – נשלח לשרת...";
  msg.classList.add("success");
};
