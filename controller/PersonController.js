const personModel = require('../Model/PersonModel');

exports.createNewRecord = (req, res) => {
  let sqsData = req.body;
  // console.log(DiemReqData)
  personModel.callAPI(sqsData).then((result) => {
    res.status(201).json('result');
  });
};
