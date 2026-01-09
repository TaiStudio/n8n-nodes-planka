"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericFunctions = exports.plankaApiRequestAllItems = exports.plankaApiRequest = exports.getPlankaToken = void 0;
const n8n_workflow_1 = require("n8n-workflow");
async function getPlankaToken(credentials) {
    const options = {
        method: 'POST',
        uri: `${credentials.apiUrl}/access-tokens`,
        body: {
            emailOrUsername: credentials.email,
            password: credentials.password,
        },
        json: true,
    };
    try {
        const response = await this.helpers.request.call(this, options);
        if (response.item) {
            return response.item;
        }
        throw new n8n_workflow_1.NodeApiError(this.getNode(), response, {
            message: 'Unable to obtain access token',
            description: 'The API response does not contain the expected token',
        });
    }
    catch (error) {
        throw new n8n_workflow_1.NodeApiError(this.getNode(), error, {
            message: 'Authentication error',
            description: 'We were unable to authenticate with the provided credentials.',
        });
    }
}
exports.getPlankaToken = getPlankaToken;
async function plankaApiRequest(method, endpoint, body = {}, query = {}) {
    const credentials = await this.getCredentials('plankaApi');
    const token = await getPlankaToken.call(this, credentials);
    const options = {
        method,
        uri: `${credentials.apiUrl}${endpoint}`,
        body,
        qs: query,
        headers: {
            Authorization: `Bearer ${token}`,
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