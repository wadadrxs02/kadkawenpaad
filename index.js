var form = document.getElementById("sheetdb-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  })
    .then((response) => response.json())
    .then((html) => {
      // you can put any JS code here
      alert("RSVP anda berjaya dihantar. Terima Kasih :) ");
      form.reset();
      $("#ModalRSVP").modal("hide");
    });
});

$("#kedatangan").change(function () {
  if ($(this).val() == "hadir") {
    $("#jumlahkedatanganform").show();
    $("#namaform").show();
    $("#showcalendar").show();
    $("#waktuform").show();
  } else {
    $("#namaform").hide();
    $("#jumlahkedatanganform").hide();
    $("#showcalendar").hide();
    $("#waktuform").hide();
    $("#ModalRSVP").modal("hide");
  }
});
