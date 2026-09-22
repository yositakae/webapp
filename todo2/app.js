const express = require('express');
const path = require('path');

const app = express();
const publicDir = path.join(__dirname, 'public');

app.use(express.static(publicDir));
app.use('/public', express.static(publicDir));

const sendIndex = (req, res) => res.sendFile(path.join(__dirname, 'index.html'));
const sendMenu = (req, res) => res.sendFile(path.join(__dirname, 'info', 'menu.html'));
const sendOrder = (req, res) => res.sendFile(path.join(__dirname, 'info', 'order.html'));

app.get('/', sendIndex);
app.get('/index.html', sendIndex);
app.get(['/menu', '/info/menu.html'], sendMenu);
app.get(['/order', '/info/order.html'], sendOrder);

app.get('/item/:name/price/:price', (req, res) => {
  const { name, price } = req.params;
  res.send(`<!doctype html>
<html lang="th"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${name} | Little Bean Coffee</title>
<link rel="stylesheet" href="/public/css/site.css"></head>
<body>
<header class="site-header"><div class="container nav">
  <a class="brand" href="/index.html"><span class="brand-mark">☕</span> Little Bean</a>
  <nav class="nav-links"><a href="/index.html">หน้าแรก</a><a class="active" href="/info/menu.html">เมนู</a><a href="/info/order.html">สั่งซื้อ</a></nav>
  <a class="nav-cta" href="/info/order.html">สั่งเครื่องดื่ม</a>
</div></header>
<main class="section"><div class="container" style="max-width:760px">
  <p class="eyebrow">Little Bean menu</p><h1 style="font-size:clamp(2.5rem,6vw,4.5rem)">${name}</h1>
  <div class="menu-card" style="margin-top:28px;padding:30px"><p style="color:#76665d;font-size:1.1rem">เมนูคัดพิเศษจากร้าน Little Bean Coffee</p><p class="price" style="font-size:1.5rem">฿${price}</p><a class="button" href="/info/menu.html">กลับไปที่เมนู</a></div>
</div></main>
<footer class="footer"><div class="container footer-inner"><span>© 2025 Little Bean Coffee</span><span>เปิดทุกวัน 08:00 – 18:00</span></div></footer>
</body></html>`);
});

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
