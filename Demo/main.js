var generateKeyButton = document.getElementById('tao-khoa');
generateKeyButton.addEventListener('click', generateKey);
// Tạo khóa random 128bit
function generateKey() {
  var characters = '0123456789ABCDEF';
  var key = '';
  for (var i = 0; i < 32; i++) {
    key += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  // Set the generated key value to the key input field
  var keyInput = document.getElementById('khoa-aes');
  keyInput.value = key;
}

function chuyen() {
    // Lấy nội dung từ ô textarea nguồn
    var sourceTextarea = document.getElementById("ketqua-textarea");
    var sourceText = sourceTextarea.value;
  
    // Gán nội dung vào ô textarea đích
    var destinationTextarea = document.getElementById("ban-ma");
    destinationTextarea.value = sourceText;
    var sourceTextarea = document.getElementById("khoa-aes");
    var sourceText = sourceTextarea.value;
  
    // Gán nội dung vào ô textarea đích
    var destinationTextarea = document.getElementById("ban-ma-aes");
    destinationTextarea.value = sourceText;
  }

  // Sự kiện khi người dùng chọn file
  document.getElementById('input-file').addEventListener('change', function (e) {
    var file = e.target.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
        var contents = e.target.result;
        document.getElementById('input-data').value = contents;
    };

    reader.readAsText(file);
    document.getElementById('selected-file').innerText = 'File đã chọn: ' + file.name;
});
  // Sự kiện khi người dùng chọn file
  document.getElementById('input-file-ma').addEventListener('change', function (e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    document.getElementById("ketqua").value = '';
    reader.onload = function (e) {
        var contents = e.target.result;
        document.getElementById('ban-ma').value = contents;
    };

    reader.readAsText(file);
    document.getElementById('selected-file').innerText = 'File đã chọn: ' + file.name;
    

});
document.getElementById('luu-ban-ma').addEventListener('click', function () {
    var inputText = document.getElementById('ketqua-textarea').value;
    var file = new Blob([inputText],{type:"text"});
    var anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(file);
    anchor.download = "ban_ma.txt";
    anchor.click();
  });

document.getElementById('luu-ban-ro').addEventListener('click', function () {
    var inputText = document.getElementById('ketqua').value;
    var blob = new Blob([inputText], { type: 'text/plain' });

    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'ban_ro.txt';
    a.click();
});

















































































































































































































































































































































































































function encrypt() {
  var key = document.getElementById("khoa-aes").value;
  var message = document.getElementById("input-data").value;

  var encrypted = CryptoJS.AES.encrypt(message, key).toString();
  document.getElementById("ketqua-textarea").value = encrypted;
}

function decrypt() {
  var key = document.getElementById("ban-ma-aes").value;
  var encrypted = document.getElementById("ban-ma").value;
  
  var decrypted = CryptoJS.AES.decrypt(encrypted, key).toString(CryptoJS.enc.Utf8);
  
  if (decrypted === '') {
    alert("Lỗi giải mã!");
    return;
  }
  document.getElementById("ketqua").value = decrypted;
}