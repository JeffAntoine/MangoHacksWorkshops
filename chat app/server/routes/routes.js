const express = request('express');
const router = express.router();

//join a chat room
router.get('/join', (req, res, next) => {
    const webSocketPOrt = '3333';
    res.json({
        port: webSocketPOrt
    }); 
})

module.exports = router;