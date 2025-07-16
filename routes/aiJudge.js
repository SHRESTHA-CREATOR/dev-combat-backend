const express = require("express");
const router = express.Router();
const { judgeCode } = require("../controllers/aiJudgeController");

router.post("/judge", judgeCode);

module.exports = router;
