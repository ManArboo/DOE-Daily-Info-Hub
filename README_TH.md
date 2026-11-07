# DOE Daily Info Hub — GitHub Pages (พร้อมอัปโหลด)

ระบบในชุดนี้เป็น **เว็บไซต์หน้าแรก/ศูนย์เข้าสู่ระบบ** ที่เชื่อมกับ Google Apps Script เดิมของกลุ่มงานพิจารณาอุทธรณ์การทำงานของคนต่างด้าว ไม่ใช่การย้ายระบบกรอกรายงานมาทำงานบน GitHub โดยตรง

## 1. ไฟล์ในชุดนี้

```text
DOE_Daily_Info_Hub_GitHub_Ready/
├── index.html               ← หน้าเว็บไซต์หลัก (ไฟล์เปิดเว็บ)
├── style.css                ← ความสวยงามและหน้าจอมือถือ
├── config.js                ← ตั้งค่าลิงก์ Apps Script (ตั้งไว้แล้ว)
├── site.js                  ← เชื่อมปุ่มทุกปุ่มกับ config.js
├── assets/
│   └── department-logo.png  ← ตรากรมการจัดหางานจากไฟล์เดิม
├── .nojekyll                ← ให้ GitHub Pages ให้บริการไฟล์โดยตรง
└── README_TH.md             ← คู่มือนี้
```

**ข้อสำคัญ:** ไฟล์ `index.html`, `style.css`, `config.js`, `site.js` และโฟลเดอร์ `assets` ต้องอยู่ใน Repository เดียวกันตามโครงสร้างด้านบน ห้ามอัปโหลด ZIP ทั้งก้อนเป็นไฟล์เดียวโดยไม่แตกไฟล์

## 2. วิธีติดตั้งขึ้น GitHub Pages

1. แตกไฟล์ ZIP ที่ได้รับ (คลิกขวา > Extract All)
2. เข้า https://github.com/new แล้วเข้าสู่ระบบ GitHub
3. ตั้งชื่อ Repository เช่น `DOE-Daily-Info-Hub` และเลือก Public สำหรับการเผยแพร่ด้วย GitHub Free
4. กด Create repository
5. ใน Repository กด **Add file > Upload files** (หรือใช้คำสั่ง Upload files ที่หน้า Repository ว่าง)
6. อัปโหลด **เนื้อหาด้านในโฟลเดอร์** ได้แก่ `index.html`, `style.css`, `config.js`, `site.js`, `.nojekyll`, `README_TH.md` และโฟลเดอร์ `assets`
7. กด Commit changes
8. ไปที่ **Settings > Pages**
9. ในหัวข้อ Build and deployment เลือก **Deploy from a branch**
10. เลือก Branch เป็น `main` และ Folder เป็น `/(root)` จากนั้นกด **Save**
11. เมื่อเผยแพร่สำเร็จ เว็บจะอยู่ที่ `https://<ชื่อบัญชี>.github.io/DOE-Daily-Info-Hub/` หาก Repository ใช้ชื่อนี้
12. ทดสอบปุ่ม **เข้าสู่ระบบ** ควรเปิดลิงก์ Apps Script `/exec` ที่ใช้อยู่ในแท็บใหม่

เอกสาร GitHub: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 3. ลิงก์ Apps Script ที่เตรียมไว้

ลิงก์ถูกตั้งใน `config.js` แล้ว:

```text
https://script.google.com/macros/s/AKfycbw-as-lsBzQbcaCotohvB0Vjh2FqrFdHsIYHrzba1obPncHtUq3CZ_Gjg5pxvyumwoD/exec
```

**ไม่ต้องแก้ลิงก์** หากคุณยังใช้ Deployment เดิมของ Apps Script

หากจำเป็นต้องเปลี่ยน Web App ในอนาคต ให้แก้ `config.js` เพียงไฟล์เดียว โดยแทนค่า `appUrl` แล้ว Commit การเปลี่ยนแปลง

## 4. เวลาอัปเดตระบบ

- **เปลี่ยนรูปแบบหน้า GitHub Pages:** แก้ `index.html` / `style.css` บน GitHub แล้ว Commit ระบบหน้าเว็บไซต์จะอัปเดตอัตโนมัติ
- **แก้แบบฟอร์ม/Infographic/การบันทึก Google Sheets:** แก้ไฟล์ในโครงการ Google Apps Script เดิม แล้ว Save > Deploy > Manage deployments > Edit > New version > Deploy (ลิงก์ `/exec` เดิมคงอยู่)
- **ข้อมูลรายงานใน Google Sheets:** ไม่ถูกเขียนทับจากการอัปเดตหน้าเว็บไซต์ GitHub Pages

## 5. ข้อจำกัดสำคัญ

GitHub Pages ให้บริการหน้าเว็บแบบ static เท่านั้น หน้าเว็บนี้เป็นศูนย์รวมลิงก์และไม่ได้ใช้ `google.script.run` หรืออ่าน Google Sheets เอง โดยระบบกรอกข้อมูลจริงจะเปิดบน Apps Script หลังคลิกปุ่มเข้าสู่ระบบ

หากตั้ง Apps Script ให้ Anyone เปิดใช้งานได้โดยไม่ล็อกอิน ผู้ที่ทราบลิงก์ก็เข้าถึงระบบรายงานได้ โปรดอย่านำข้อมูลบุคคลหรือข้อมูลราชการที่ยังไม่เปิดเผยขึ้นระบบสาธารณะโดยไม่มีการพิจารณาสิทธิ์/มาตรการคุ้มครองข้อมูล

โปรดอย่าอัปโหลดไฟล์ `Code.gs`, สำเนา `Index.html` ของ Apps Script, ข้อมูลจริงจาก Google Sheets, หรือไฟล์สำรองฐานข้อมูลลง Repository สาธารณะโดยไม่ตรวจสอบข้อมูลภายในก่อน
