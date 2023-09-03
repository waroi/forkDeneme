document.getElementById("btn").addEventListener("click", function () {
  // XmlHttpRequest
  const xhr = new XMLHttpRequest();
  // console.log(xhr);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };
  xhr.onload = function () {
    document.getElementById("veri").innerHTML = xhr.responseText;
  };

  xhr.open("GET", "ornek.txt", true);
  xhr.send();
});
