exports.judgeCode = async (req, res) => {
  const { code, language, testCases } = req.body;

  // Dummy response (later integrate real judge or AI feedback)
  return res.status(200).json({
    verdict: "All test cases passed ✅",
    passedCount: testCases.length,
    totalCount: testCases.length,
    output: "42",
  });
};
