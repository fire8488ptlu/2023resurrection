const express = require('express');
const app = express();
// PORT can also get from docker if not default is 5001
const port = process.env.PORT || 5001;
const path = require('path');
const fs = require('fs')
require('dotenv').config();
const WebsiteData = require('./Data');
// PUBLIC_URL is get from docker dev is from .env file
const PUBLIC_URL = process.env.PUBLIC_URL || process.env.PUBLIC_URL_DEV

app.use(express.static(path.join(__dirname, './build')));

app.get('/day/:id', function (req, res) {
    //console.log(req.params.id)
    const CardID = req.params.id
    const filePath = path.join(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) return console.log(err);

        // console.log(WebsiteData[CardID - 1]['text'])
        // console.log(`${PUBLIC_URL}/day/day${CardID}.jpg`)
        data = data.replace("/website/main.png", `/day/day${CardID}.jpg`);
        data = data.replace("耶穌在世上的最後七天，稱為受難週（Passion Week）。2023年以馬可福音來默想，與主同行，受難苦路。默想耶穌經歷的苦難、死亡與復活，使信祂的人，再次被安慰與鼓勵，重新得著力量與盼望。", `${WebsiteData[CardID - 1]['text']}`);


        return res.send(data);
    });
});



//更改url 更改路徑 更改內容

app.get('/*', function (req, res) {
    const filePath = path.join(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) return console.log(err);

        return res.send(data);
    });
});



app.listen(port, () => console.log(`Listening on port ${port}`));