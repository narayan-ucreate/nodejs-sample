exports.apiResponse = function (res, statusCode, message, results, errors) {
    var data = { message: message, errors: errors }
    if (results) {
        data = { message: message, results: results, errors: errors };
    }
    res.status(statusCode);
    return data;

};
exports.preparedValidationMessage = function (validations) {
    var finalResults = [];
    for (var i in validations) {
        finalResults.push({
            key: validations[i].path,
            message: validations[i].message
        })
    }

    return finalResults;
};
