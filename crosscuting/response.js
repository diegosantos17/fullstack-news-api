const format = function (result, method = "error") {
    let resultFormat = {}
    resultFormat["success"] = true;

    switch (method) {
        case "post":
            resultFormat["data"] = {
                id: result.id
            }
            break;
        case "get":
            resultFormat["data"] = result
            break;
        case "put":
        case "delete":
            // Sem retorno (202 ou 204)
            break;
        default:
            resultFormat["success"] = false;
            resultFormat["errors"] = [];

            if (result.errors) {

                for (const key in result.errors) {
                    let error = {};
                    error["property"] = `${key}`;
                    error["message"] = result.errors[key].message;

                    resultFormat["errors"].push(error);
                }
            } else {
                resultFormat["errors"].push({ "internal": "Ocorreru um erro interno." })
            }

            break;
    }

    return resultFormat;
}

module.exports = {
    format
}