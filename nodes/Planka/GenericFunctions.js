"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericFunctions = exports.plankaApiRequestAllItems = exports.plankaApiRequest = void 0;
const n8n_workflow_1 = require("n8n-workflow");
async function plankaApiRequest(method, endpoint, body = {}, query = {}) {
    const credentials = await this.getCredentials('plankaApi');
    const options = {
        method,
        uri: `${credentials.apiUrl}${endpoint}`,
        body,
        qs: query,
        headers: {
            'X-Api-Key': credentials.apiKey,
        },
        json: true,
    };
    if (Object.keys(body).length === 0) {
        delete options.body;
    }
    if (Object.keys(query).length === 0) {
        delete options.qs;
    }
    try {
        return await this.helpers.request.call(this, options);
    }
    catch (error) {
        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
    }
}
exports.plankaApiRequest = plankaApiRequest;
async function plankaApiRequestAllItems(method, endpoint, body = {}, query = {}) {
    const returnData = [];
    const responseData = await plankaApiRequest.call(this, method, endpoint, body, query);
    if (Array.isArray(responseData)) {
        returnData.push(...responseData);
    }
    else {
        returnData.push(responseData);
    }
    return returnData;
}
exports.plankaApiRequestAllItems = plankaApiRequestAllItems;
class GenericFunctions {
    constructor(executeFunctions) {
        this.executeFunctions = executeFunctions;
    }
    async request(options) {
        try {
            if (!this.executeFunctions.helpers) {
                throw new Error('Helpers is not defined');
            }
            const response = await this.executeFunctions.helpers.request.call(this.executeFunctions, options);
            return response;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new n8n_workflow_1.NodeApiError(this.executeFunctions.getNode(), { error: error.message });
            }
            throw error;
        }
    }
    async handleRequest(options) {
        try {
            if (!this.executeFunctions.helpers) {
                throw new Error('Helpers is not defined');
            }
            return await this.executeFunctions.helpers.request.call(this.executeFunctions, options);
        }
        catch (error) {
            if (error instanceof Error) {
                throw new n8n_workflow_1.NodeApiError(this.executeFunctions.getNode(), { error: error.message });
            }
            throw error;
        }
    }
}
exports.GenericFunctions = GenericFunctions;
//# sourceMappingURL=GenericFunctions.js.map