const express = require('express');
const app = express();
const port = 3000;

// Array kutipan absurd
const kutipan = [
  "Kalau ayam bisa bangun jam 5 pagi tanpa alarm, kamu juga bisa... asal jadi ayam.",
"Jangan takut gagal, karena kegagalan adalah cara semesta bilang: 'coba lagi, tapi jangan bodoh.'",
"Hidup itu seperti es krim yang jatuh ke pasir. Kacau, tapi masih bisa dipelajari.",
"Kalau orang lain bisa, kamu juga bisa… asal kamu orang lain.",
"Jangan menyerah! Bahkan Wi-Fi lemot pun kadang masih nyambung.",
"Terkadang, kamu harus tersesat dulu… supaya bisa upload story 'lagi healing'.",
"Bersyukurlah. Setidaknya kamu bukan printer yang suka error tiap hari.",
"Mimpi itu gratis, tapi kalau mau sukses... ya tetap bayar cicilan.",
"Jangan tunggu motivasi, karena bahkan tukang parkir pun nunggu kamu duluan.",
"Kalau hidup terasa berat, mungkin kamu lagi bawa beban orang lain juga. Coba balikin.",
"Tetap semangat, karena nasi goreng pun butuh api buat jadi enak.",
"Jangan jadi biasa-biasa aja. Lihat kucing—dia tidur 16 jam sehari tapi tetap viral.",
"Kamu bukan gagal, kamu cuma belum cocok sama realita.",
"Kadang hidup itu kayak sinyal hape: penuh harapan, tapi nggak ada koneksi.",
"Hidup adalah ujian, tapi sayangnya nggak ada jawaban di belakang buku.",
"Kalau hidupmu pahit, mungkin semesta lupa ngasih gula. Tapi kamu bisa beli sendiri.",
"Teruslah berjalan, walau arahmu nggak jelas—setidaknya kalori terbakar.",
"Berpikirlah positif! Kalau semua gagal… ya, minimal kamu dapet cerita lucu.",
"Jangan terlalu keras pada diri sendiri. Toh kamu bukan wajan.",
"Kadang kamu merasa jadi beban… tapi tenang, beban juga dibutuhkan di gym."
];

// Array emoji acak
const emojis = [
  "🤦‍♂️", "🐒", "🌮", "🤯", "🥳", "🦄", "🦥", "🍕", "🛌", 
  "🚀", "🦖", "⏰", "🧠", "🌈", "🤡", "🧟‍♂️", "🧙‍♂️", "🦸‍♀️"
];

// Siapkan templat HTML
const createMemePage = (quote, emoji) => `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meme Motivasi Absurd</title>
  <style>
    body { 
      background-color: #ff9966; 
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      flex-direction: column;
    }
    .meme-container {
      background: linear-gradient(45deg, #ff6b6b, #5f27cd);
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.3);
      text-align: center;
      max-width: 500px;
    }
    .quote { 
      font-size: 24px; 
      color: white;
      margin-bottom: 20px;
      font-weight: bold;
    }
    .emoji { font-size: 70px; }
    button {
      margin-top: 40px;
      padding: 12px 24px;
      background-color: #6c5ce7;
      color: white;
      border: none;
      border-radius: 50px;
      font-size: 16px;
      cursor: pointer;
      transition: transform 0.2s;
    }
    button:hover { transform: scale(1.05); }
  </style>
</head>
<body>
  <div class="meme-container">
    <div class="quote">"${quote}"</div>
    <div class="emoji">${emoji}</div>
  </div>
  <button onclick="window.location.reload()">Meme Baru!</button>
</body>
</html>
`;

// Route untuk halaman utama
app.get('/', (req, res) => {
  const randomQuote = kutipan[Math.floor(Math.random() * kutipan.length)];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  res.send(createMemePage(randomQuote, randomEmoji));
});

// Mulai server
app.listen(port, () => {
  console.log(`Aplikasi meme absurd berjalan di http://localhost:${port}`);
});