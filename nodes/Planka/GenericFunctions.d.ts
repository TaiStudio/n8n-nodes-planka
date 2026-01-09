import { IExecuteFunctions, IHookFunctions, ILoadOptionsFunctions, IDataObject } from 'n8n-workflow';
export declare function getPlankaToken(this: IExecuteFunctions | ILoadOptionsFunctions | IHookFunctions, credentials: IDataObject): Promise<string>;
export declare function plankaApiRequest(this: IExecuteFunctions | ILoadOptionsFunctions | IHookFunctions, method: string, endpoint: string, body?: IDataObject, query?: IDataObject): Promise<any>;
export declare function plankaApiRequestAllItems(this: IExecuteFunctions | ILoadOptionsFunctions, method: string, endpoint: string, body?: IDataObject, query?: IDataObject): Promise<any>;
export declare class GenericFunctions {
    private readonly executeFunctions;
    constructor(executeFunctions: IExecuteFunctions);
    request(options: IDataObject): Promise<IDataObject>;
    handleRequest(options: IDataObject): Promise<IDataObject>;
}
