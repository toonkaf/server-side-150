const express = require('express');
const app = express();
const PORT = 3000;


app.get('/' , (req, res) => {
    res.send(`
        <h1 style="color: #333;">สวัสดีครับ จากภายใน Docker Container</h1>
        <p><b>ชื่อ-นามสกุล:</b> นายรัชชานนท์ แย้มบู่ </p>
        <p><b>รหัสนักศึกษา:</b> 67070150 </p>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

});
