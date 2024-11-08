
const sBox = [
  0x63, 0x7C, 0x77, 0x7B, 0xF2, 0x6B, 0x6F, 0xC5, 0x30, 0x01, 0x67, 0x2B, 0xFE, 0xD7, 0xAB, 0x76,
  0xCA, 0x82, 0xC9, 0x7D, 0xFA, 0x59, 0x47, 0xF0, 0xAD, 0xD4, 0xA2, 0xAF, 0x9C, 0xA4, 0x72, 0xC0,
  0xB7, 0xFD, 0x93, 0x26, 0x36, 0x3F, 0xF7, 0xCC, 0x34, 0xA5, 0xE5, 0xF1, 0x71, 0xD8, 0x31, 0x15,
  0x04, 0xC7, 0x23, 0xC3, 0x18, 0x96, 0x05, 0x9A, 0x07, 0x12, 0x80, 0xE2, 0xEB, 0x27, 0xB2, 0x75,
  0x09, 0x83, 0x2C, 0x1A, 0x1B, 0x6E, 0x5A, 0xA0, 0x52, 0x3B, 0xD6, 0xB3, 0x29, 0xE3, 0x2F, 0x84,
  0x53, 0xD1, 0x00, 0xED, 0x20, 0xFC, 0xB1, 0x5B, 0x6A, 0xCB, 0xBE, 0x39, 0x4A, 0x4C, 0x58, 0xCF,
  0xD0, 0xEF, 0xAA, 0xFB, 0x43, 0x4D, 0x33, 0x85, 0x45, 0xF9, 0x02, 0x7F, 0x50, 0x3C, 0x9F, 0xA8,
  0x51, 0xA3, 0x40, 0x8F, 0x92, 0x9D, 0x38, 0xF5, 0xBC, 0xB6, 0xDA, 0x21, 0x10, 0xFF, 0xF3, 0xD2,
  0xCD, 0x0C, 0x13, 0xEC, 0x5F, 0x97, 0x44, 0x17, 0xC4, 0xA7, 0x7E, 0x3D, 0x64, 0x5D, 0x19, 0x73,
  0x60, 0x81, 0x4F, 0xDC, 0x22, 0x2A, 0x90, 0x88, 0x46, 0xEE, 0xB8, 0x14, 0xDE, 0x5E, 0x0B, 0xDB,
  0xE0, 0x32, 0x3A, 0x0A, 0x49, 0x06, 0x24, 0x5C, 0xC2, 0xD3, 0xAC, 0x62, 0x91, 0x95, 0xE4, 0x79,
  0xE7, 0xC8, 0x37, 0x6D, 0x8D, 0xD5, 0x4E, 0xA9, 0x6C, 0x56, 0xF4, 0xEA, 0x65, 0x7A, 0xAE, 0x08,
  0xBA, 0x78, 0x25, 0x2E, 0x1C, 0xA6, 0xB4, 0xC6, 0xE8, 0xDD, 0x74, 0x1F, 0x4B, 0xBD, 0x8B, 0x8A,
  0x70, 0x3E, 0xB5, 0x66, 0x48, 0x03, 0xF6, 0x0E, 0x61, 0x35, 0x57, 0xB9, 0x86, 0xC1, 0x1D, 0x9E,
  0xE1, 0xF8, 0x98, 0x11, 0x69, 0xD9, 0x8E, 0x94, 0x9B, 0x1E, 0x87, 0xE9, 0xCE, 0x55, 0x28, 0xDF,
  0x8C, 0xA1, 0x89, 0x0D, 0xBF, 0xE6, 0x42, 0x68, 0x41, 0x99, 0x2D, 0x0F, 0xB0, 0x54, 0xBB, 0x16
];
const inverseSBox = [
  0x52, 0x09, 0x6A, 0xD5, 0x30, 0x36, 0xA5, 0x38, 0xBF, 0x40, 0xA3, 0x9E, 0x81, 0xF3, 0xD7, 0xFB,
  0x7C, 0xE3, 0x39, 0x82, 0x9B, 0x2F, 0xFF, 0x87, 0x34, 0x8E, 0x43, 0x44, 0xC4, 0xDE, 0xE9, 0xCB,
  0x54, 0x7B, 0x94, 0x32, 0xA6, 0xC2, 0x23, 0x3D, 0xEE, 0x4C, 0x95, 0x0B, 0x42, 0xFA, 0xC3, 0x4E,
  0x08, 0x2E, 0xA1, 0x66, 0x28, 0xD9, 0x24, 0xB2, 0x76, 0x5B, 0xA2, 0x49, 0x6D, 0x8B, 0xD1, 0x25,
  0x72, 0xF8, 0xF6, 0x64, 0x86, 0x68, 0x98, 0x16, 0xD4, 0xA4, 0x5C, 0xCC, 0x5D, 0x65, 0xB6, 0x92,
  0x6C, 0x70, 0x48, 0x50, 0xFD, 0xED, 0xB9, 0xDA, 0x5E, 0x15, 0x46, 0x57, 0xA7, 0x8D, 0x9D, 0x84,
  0x90, 0xD8, 0xAB, 0x00, 0x8C, 0xBC, 0xD3, 0x0A, 0xF7, 0xE4, 0x58, 0x05, 0xB8, 0xB3, 0x45, 0x06,
  0xD0, 0x2C, 0x1E, 0x8F, 0xCA, 0x3F, 0x0F, 0x02, 0xC1, 0xAF, 0xBD, 0x03, 0x01, 0x13, 0x8A, 0x6B,
  0x3A, 0x91, 0x11, 0x41, 0x4F, 0x67, 0xDC, 0xEA, 0x97, 0xF2, 0xCF, 0xCE, 0xF0, 0xB4, 0xE6, 0x73,
  0x96, 0xAC, 0x74, 0x22, 0xE7, 0xAD, 0x35, 0x85, 0xE2, 0xF9, 0x37, 0xE8, 0x1C, 0x75, 0xDF, 0x6E,
  0x47, 0xF1, 0x1A, 0x71, 0x1D, 0x29, 0xC5, 0x89, 0x6F, 0xB7, 0x62, 0x0E, 0xAA, 0x18, 0xBE, 0x1B,
  0xFC, 0x56, 0x3E, 0x4B, 0xC6, 0xD2, 0x79, 0x20, 0x9A, 0xDB, 0xC0, 0xFE, 0x78, 0xCD, 0x5A, 0xF4,
  0x1F, 0xDD, 0xA8, 0x33, 0x88, 0x07, 0xC7, 0x31, 0xB1, 0x12, 0x10, 0x59, 0x27, 0x80, 0xEC, 0x5F,
  0x60, 0x51, 0x7F, 0xA9, 0x19, 0xB5, 0x4A, 0x0D, 0x2D, 0xE5, 0x7A, 0x9F, 0x93, 0xC9, 0x9C, 0xEF,
  0xA0, 0xE0, 0x3B, 0x4D, 0xAE, 0x2A, 0xF5, 0xB0, 0xC8, 0xEB, 0xBB, 0x3C, 0x83, 0x53, 0x99, 0x61,
  0x17, 0x2B, 0x04, 0x7E, 0xBA, 0x77, 0xD6, 0x26, 0xE1, 0x69, 0x14, 0x63, 0x55, 0x21, 0x0C, 0x7D
];
const rcon = [
  0x01, 0x00, 0x00, 0x00,
  0x02, 0x00, 0x00, 0x00,
  0x04, 0x00, 0x00, 0x00,
  0x08, 0x00, 0x00, 0x00,
  0x10, 0x00, 0x00, 0x00,
  0x20, 0x00, 0x00, 0x00,
  0x40, 0x00, 0x00, 0x00,
  0x80, 0x00, 0x00, 0x00,
  0x1b, 0x00, 0x00, 0x00,
  0x36, 0x00, 0x00, 0x00
];
// Key Expansion
function keyExpansion(key) {
  var keyWords = new Array(44);

  for (var i = 0; i < 4; i++) {
    keyWords[i] = [key[i * 4], key[i * 4 + 1], key[i * 4 + 2], key[i * 4 + 3]];
  }

  for (var i = 4; i < 44; i++) {
    var temp = keyWords[i - 1];
    if (i % 4 === 0) {
      temp = subWord(rotateWord(temp));
      temp[0] ^= rcon[i / 4];
    }
    keyWords[i] = xorWords(keyWords[i - 4], temp);
  }

  return keyWords;
}

// Substitution Bytes
function subBytes(state) {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      state[i][j] = sBox[state[i][j]];
    }
  }
}
// Utility Functions
function subWord(word) {
  var result = new Array(4);
  for (var i = 0; i < 4; i++) {
    result[i] = sBox[word[i]];
  }
  return result;
}

function rotateWord(word) {
  var temp = word[0];
  for (var i = 0; i < 3; i++) {
    word[i] = word[i + 1];
  }
  word[3] = temp;
  return word;
}

function xorWords(word1, word2) {
  var result = new Array(4);
  for (var i = 0; i < 4; i++) {
    result[i] = word1[i] ^ word2[i];
  }
  return result;
}

// Shift Rows
function shiftRows(state) {
  for (var i = 1; i < 4; i++) {
    var temp = state[i].slice(0, i);
    state[i] = state[i].slice(i).concat(temp);
  }
}

// Mix Columns
function mixColumns(state) {
  for (var i = 0; i < 4; i++) {
    var s0 = state[0][i];
    var s1 = state[1][i];
    var s2 = state[2][i];
    var s3 = state[3][i];

    state[0][i] = Mul2[s0] ^ Mul3[s1] ^ s2 ^ s3;
    state[1][i] = s0 ^ Mul2[s1] ^ Mul3[s2] ^ s3;
    state[2][i] = s0 ^ s1 ^ Mul2[s2] ^ Mul3[s3];
    state[3][i] = Mul3[s0] ^ s1 ^ s2 ^ Mul2[s3];
  }
}

// Add Round Key
function addRoundKey(state, keyWords, round) {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      state[i][j] ^= keyWords[i][round*4+j];
    }
  }
}


function Mul2(value) {
  if (value < 0x80) {
    return value << 1;
  } else {
    return (value << 1) ^ 0x1B;
  }
}

function Mul3(value) {
  return Mul2(value) ^ value;
}


// Inverse Substitution Bytes
function invSubBytes(state) {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      state[i][j] = inverseSBox[state[i][j]];
    }
  }
}

// Inverse Shift Rows
function invShiftRows(state) {
  for (var i = 1; i < 4; i++) {
    var temp = state[i].slice(-i);
    state[i] = temp.concat(state[i].slice(0, 4 - i));
  }
}
/* Nhân ma trận trạng thái đầu vào với ma trận quy chuẩn dành cho giải mã:
            // Galois Field (for InvMixColumns)
            { 0x0E, 0x0B, 0x0D, 0x09 },
            { 0x09, 0x0E, 0x0B, 0x0D },
            { 0x0D, 0x09, 0x0E, 0x0B },
            { 0x0B, 0x0D, 0x09, 0x0E }
        */
function invMixColumns(state) {
  for (var i = 0; i < 4; i++) {
    var s0 = state[0][i];
    var s1 = state[1][i];
    var s2 = state[2][i];
    var s3 = state[3][i];

    state[0][i] = multiply14[s0] ^ multiply11[s1] ^ multiply13[s2] ^ multiply9[s3];
    state[1][i] = multiply9[s0] ^ multiply14[s1] ^ multiply11[s2] ^ multiply13[s3];
    state[2][i] = multiply13[s0] ^ multiply9[s1] ^ multiply14[s2] ^ multiply11[s3];
    state[3][i] = multiply11[s0] ^ multiply13[s1] ^ multiply9[s2] ^ multiply14[s3];
  }
}


// Inverse Multiplication Lookup Tables

function multiply9(value) {
  return Mul2(Mul2(Mul2(value))) ^ value;
}

function multiply11(value) {
  return Mul2(Mul2(Mul2(value))) ^ Mul2(value) ^ value;
}

function multiply13(value) {
  return Mul2(Mul2(Mul2(value))) ^ Mul2(Mul2(value)) ^ value;
}

function multiply14(value) {
  return Mul2(Mul2(Mul2(value))) ^ Mul2(Mul2(value)) ^ Mul2(value);
}


//Mã hóa từng khối
function encryptAESBlock(key, input) {
  // Convert key and message to byte arrays
  var keyWords = keyExpansion(key);
  var state = new Array(4);

  // Copy input to state array
  for (var i = 0; i < 4; i++) {
    state[i] = new Array(4);
    for (var j = 0; j < 4; j++) {
      state[i][j] = input[i * 4 + j];
    }
  }

  addRoundKey(state, keyWords, 0);

  for (var round = 1; round < 10; round++) {
    subBytes(state);
    shiftRows(state);
    mixColumns(state);
    addRoundKey(state, keyWords, round);
  }
  //last round
  subBytes(state);
  shiftRows(state);
  addRoundKey(state, keyWords, 10);
  // Convert state array to 1D array
  var output = new Array(16);
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      output[i * 4 + j] = state[i][j];
    }
  }

  return output;
}

function decryptAESBlock(key, input) {
  var keyWords = keyExpansion(key);
  var state = new Array(4);

  // Copy input to state array
  for (var i = 0; i < 4; i++) {
    state[i] = new Array(4);
    for (var j = 0; j < 4; j++) {
      state[i][j] = input[i * 4 + j];
    }
  }

  addRoundKey(state, keyWords, 10);

  for (var round = 9; round > 0; round--) {
    invShiftRows(state);
    invSubBytes(state);
    addRoundKey(state, keyWords, round);
    invMixColumns(state);
  }
  invShiftRows(state);
  invSubBytes(state);
  addRoundKey(state, keyWords, 0);
  // Convert state array to 1D array
  var output = new Array(16);
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      output[i * 4 + j] = state[i][j];
    }
  }

  return output;
}

function encrypt() {
  var keyInput = document.getElementById('khoa-aes');
  var messageInput = document.getElementById('input-data');
  var encryptedMessageOutput = document.getElementById('ketqua-textarea');

  var key = keyInput.value;
  var message = messageInput.value;
  // Convert key and message to byte arrays
  var keyBytes = [];
  var messageBytes = [];
  for (var i = 0; i < 32; i += 2) {
    keyBytes.push(parseInt(key.substr(i, 2), 16));
  }
  for (var j = 0; j < message.length; j++) {
    messageBytes.push(message.charCodeAt(j));
  }
  var blockSize = 16; // Kích thước của mỗi khối

  var encryptedBytes = []; // Mảng để lưu trữ các khối đã mã hóa

  for (var i = 0; i < messageBytes.length; i += blockSize) {
    // Tạo một mảng mới để lưu trữ mỗi khối
    var block = messageBytes.slice(i, i + blockSize);

    // Kiểm tra nếu độ dài của khối không đạt đủ kích thước thì thêm padding
    if (block.length < blockSize) {
      var paddingLength = blockSize - block.length;
      for (var j = 0; j < paddingLength; j++) {
        block.push(paddingLength);
      }
    }

    // Mã hóa khối
    var encryptedBlock = encryptAESBlock(keyBytes, block);

    // Thêm khối đã mã hóa vào mảng encryptedBytes
    encryptedBytes.push.apply(encryptedBytes, encryptedBlock);
  }
  var encryptedBase64 = btoa(String.fromCharCode.apply(null, encryptedBytes));
  encryptedMessageOutput.textContent = encryptedBase64;
}

function decrypt() {
  var keyInput = document.getElementById('ban-ma-aes');
  var ciphertext = document.getElementById('ban-ma');
  var key = keyInput.value;
  var keyBytes = [];

  for (var i = 0; i < 32; i += 2) {
    keyBytes.push(parseInt(key.substr(i, 2), 16));
  }

  // Chuyển ciphertext từ chuỗi Base64 thành mảng byte
  var ciphertextBytes = [];
  var ciphertextBase64 = ciphertext.value;
  var ciphertextString = atob(ciphertextBase64);

  for (var j = 0; j < ciphertextString.length; j++) {
    ciphertextBytes.push(ciphertextString.charCodeAt(j));
  }

  var blockSize = 16; // Kích thước của mỗi khối

  var plaintextBytes = []; // Mảng để lưu trữ các khối đã giải mã

  for (var i = 0; i < ciphertextBytes.length; i += blockSize) {
    // Tạo một mảng mới để lưu trữ mỗi khối
    var block = ciphertextBytes.slice(i, i + blockSize);

    // Giải mã khối
    var decryptedBlock = decryptAESBlock(keyBytes, block);

    // Thêm khối đã giải mã vào mảng plaintextBytes
    plaintextBytes.push.apply(plaintextBytes, decryptedBlock);
  }
  // Chuyển mảng byte thành chuỗi ký tự ban đầu
  var plainTextString = byteArrayToString(plaintextBytes);

  // Hiển thị kết quả giải mã
  var plainTexts = document.getElementById("ketqua");
  plainTexts.textContent = plainTextString;
}
// Function to convert a byte array to a string
function byteArrayToString(byteArray) {
  var decoder = new TextDecoder('utf-8');
  var decodedString = decoder.decode(new Uint8Array(byteArray));
  return decodedString;
}
