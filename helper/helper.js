exports.apiResponse = function (response, statusCode, message, results, errors) {
    var data = { message: message, errors: errors }
    if (results) {
        data = { message: message, results: results, errors: errors };
    }
    response.status(statusCode).json(data);
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
