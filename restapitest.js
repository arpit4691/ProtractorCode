const apiResource = require("protractor-api-resource").ProtractorApiResource



describe("Test response for all REST API methods", function() {

    var apiClient, serviceEnpoints = {
        getRequest: {
            path: "/:id:",
        },
        createReq: {
            path: "/",
            method: "POST"
        },
        updateReq: {
            path: "/:Id:",
            method: "PUT"
        },
        patchReq: {
            path: "/:Id:",
            method: "PATCH"
        },
    };

    beforeAll(function() {
        apiClient = new apiResource("http://localhost:8080/api/users");
        apiClient.registerService(serviceEnpoints);
    });

    it("Test GET method", function(done) {

        apiClient.getRequest({ id: 1 }).toJSON().then(function(actualResponse) {
            console.log(actualResponse);
            done();
        });
    });
});