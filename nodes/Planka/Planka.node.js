"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Planka = void 0;
const GenericFunctions_1 = require("./GenericFunctions");
class Planka {
    constructor() {
        this.description = {
            displayName: 'Planka',
            name: 'planka',
            icon: 'file:planka.png',
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Interact with Planka API',
            defaults: {
                name: 'Planka',
            },
            inputs: ['main'],
            outputs: ['main'],
            credentials: [
                {
                    name: 'plankaApi',
                    required: true,
                },
            ],
            properties: [
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: '🏢 PROJECT',
                            value: 'project',
                            description: 'Complete project and administrator management',
                        },
                        {
                            name: '📋 BOARD',
                            value: 'board',
                            description: 'Management of boards, lists, tags, and members',
                        },
                        {
                            name: '📝 CARD',
                            value: 'card',
                            description: 'Management of cards, tasks, comments, and attachments',
                        },
                        {
                            name: '👤 USER',
                            value: 'user',
                            description: 'Complete system user management',
                        },
                    ],
                    default: 'project',
                    description: 'Main resource to use',
                },
                // Operations for each main resource
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    displayOptions: {
                        show: {
                            resource: [
                                'project',
                            ],
                        },
                    },
                    options: [
                        {
                            name: '➕ Create Project',
                            value: 'createProject',
                            description: 'Create a new project in Planka',
                            action: 'Create a project',
                        },
                        {
                            name: '🔍 Get Project',
                            value: 'getProject',
                            description: 'Get details of a specific project by ID',
                            action: 'Get a project by ID',
                        },
                        {
                            name: '📋 Get All Projects',
                            value: 'getAllProjects',
                            description: 'Get a list of all available projects',
                            action: 'Get all projects',
                        },
                        {
                            name: '✏️ Update Project',
                            value: 'updateProject',
                            description: 'Update information for an existing project',
                            action: 'Update a project',
                        },
                        {
                            name: '🗑️ Delete Project',
                            value: 'deleteProject',
                            description: 'Permanently delete a project',
                            action: 'Delete a project',
                        },
                        {
                            name: '🖼️ Update Project Background',
                            value: 'updateProjectBackgroundImage',
                            description: 'Change the background image of a project',
                            action: 'Update project background image',
                        },
                        {
                            name: '👤 Add Manager to Project',
                            value: 'addProjectManager',
                            description: 'Add a user as project administrator',
                            action: 'Add a manager to a project',
                        },
                        {
                            name: '🚫 Remove Manager from Project',
                            value: 'deleteProjectManager',
                            description: 'Remove a project administrator',
                            action: 'Delete a project manager',
                        },
                    ],
                    default: 'getAllProjects',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    displayOptions: {
                        show: {
                            resource: [
                                'board',
                            ],
                        },
                    },
                    options: [
                        {
                            name: '➕ Create Board',
                            value: 'createBoard',
                            description: 'Create a new board in a project',
                            action: 'Create a board',
                        },
                        {
                            name: '🔍 Get Board',
                            value: 'getBoard',
                            description: 'Get details of a specific board',
                            action: 'Get a board by ID',
                        },
                        {
                            name: '✏️ Update Board',
                            value: 'updateBoard',
                            description: 'Modify information on an existing dashboard',
                            action: 'Update a board',
                        },
                        {
                            name: '🗑️ Delete Board',
                            value: 'deleteBoard',
                            description: 'Permanently delete a board',
                            action: 'Delete a board',
                        },
                        {
                            name: '👤 Add Member to Board',
                            value: 'createBoardMembership',
                            description: 'Add a member to a board',
                            action: 'Add a member to a board',
                        },
                        {
                            name: '🔄 Update Board Membership',
                            value: 'updateBoardMembership',
                            description: "Update a member's permissions on the board",
                            action: 'Update a board membership',
                        },
                        {
                            name: '🚫 Remove Member from Board',
                            value: 'deleteBoardMembership',
                            description: 'Remove a board member',
                            action: 'Remove a member from a board',
                        },
                        {
                            name: '📃 Create Board List',
                            value: 'createBoardList',
                            description: 'Create a new list on the board',
                            action: 'Create a board list',
                        },
                        {
                            name: '✏️ Update Board List',
                            value: 'updateBoardList',
                            description: 'Modify an existing list on the board',
                            action: 'Update a board list',
                        },
                        {
                            name: '🗑️ Delete Board List',
                            value: 'deleteBoardList',
                            description: 'Permanently delete a list from the board',
                            action: 'Delete a board list',
                        },
                        {
                            name: '🔀 Sort Board List',
                            value: 'sortBoardList',
                            description: 'Sort cards within a list',
                            action: 'Sort cards in a board list',
                        },
                        {
                            name: '🏷️ Create Board Label',
                            value: 'createBoardLabel',
                            description: 'Create a new label on the board',
                            action: 'Create a board label',
                        },
                        {
                            name: '✏️ Update Board Label',
                            value: 'updateBoardLabel',
                            description: 'Modify an existing label on the board',
                            action: 'Update a board label',
                        },
                        {
                            name: '🗑️ Delete Board Label',
                            value: 'deleteBoardLabel',
                            description: 'Permanently delete a label from the board.',
                            action: 'Delete a board label',
                        },
                    ],
                    default: 'createBoard',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    displayOptions: {
                        show: {
                            resource: [
                                'card',
                            ],
                        },
                    },
                    options: [
                        {
                            name: '➕ Create Card',
                            value: 'createCard',
                            description: 'Create a new card in a list',
                            action: 'Create a card',
                        },
                        {
                            name: '🔍 Get Card',
                            value: 'getCard',
                            description: 'Get details of a specific card',
                            action: 'Get a card by ID',
                        },
                        {
                            name: '✏️ Update Card',
                            value: 'updateCard',
                            description: 'Modify information on an existing card',
                            action: 'Update a card',
                        },
                        {
                            name: '🗑️ Delete Card',
                            value: 'deleteCard',
                            description: 'Permanently delete a card',
                            action: 'Delete a card',
                        },
                        {
                            name: '🏷️ Add Label to Card',
                            value: 'addCardLabel',
                            description: 'Add a label to a card',
                            action: 'Add a label to a card',
                        },
                        {
                            name: '🚫 Remove Label from Card',
                            value: 'removeCardLabel',
                            description: 'Remove a label from a card',
                            action: 'Remove a label from a card',
                        },
                        {
                            name: '👤 Add Member to Card',
                            value: 'addCardMember',
                            description: 'Assign a member to a card',
                            action: 'Add a member to a card',
                        },
                        {
                            name: '🚫 Remove Member from Card',
                            value: 'removeCardMember',
                            description: 'Unassign a member from a card',
                            action: 'Remove a member from a card',
                        },
                        {
                            name: '✅ Create Task in Card',
                            value: 'createCardTask',
                            description: 'Create a new task within a card',
                            action: 'Create a task in a card',
                        },
                        {
                            name: '🔄 Update Task',
                            value: 'updateCardTask',
                            description: 'Modify an existing task',
                            action: 'Update a task',
                        },
                        {
                            name: '🗑️ Delete Task',
                            value: 'deleteCardTask',
                            description: 'Permanently delete a task',
                            action: 'Delete a task',
                        },
                        {
                            name: '📎 Create Attachment in Card',
                            value: 'createCardAttachment',
                            description: 'Attach a file to a card',
                            action: 'Create an attachment in a card',
                        },
                        {
                            name: '✏️ Update Attachment',
                            value: 'updateCardAttachment',
                            description: 'Modify an attachment',
                            action: 'Update an attachment',
                        },
                        {
                            name: '🗑️ Delete Attachment',
                            value: 'deleteCardAttachment',
                            description: 'Permanently delete an attachment',
                            action: 'Delete an attachment',
                        },
                        {
                            name: '📋 Get All Card Actions',
                            value: 'getAllCardActions',
                            description: 'Get all actions performed on a card',
                            action: 'Get all actions of a card',
                        },
                        {
                            name: '💬 Create Comment on Card',
                            value: 'createCardComment',
                            description: 'Añadir un comentario a una tarjeta',
                            action: 'Create a comment on a card',
                        },
                        {
                            name: '✏️ Update Comment',
                            value: 'updateCardComment',
                            description: 'Edit an existing comment',
                            action: 'Update a comment on a card',
                        },
                        {
                            name: '🗑️ Delete Comment',
                            value: 'deleteCardComment',
                            description: 'Permanently delete a comment',
                            action: 'Delete a comment from a card',
                        },
                    ],
                    default: 'createCard',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    displayOptions: {
                        show: {
                            resource: [
                                'user',
                            ],
                        },
                    },
                    options: [
                        {
                            name: '➕ Create User',
                            value: 'createUser',
                            description: 'Create a new user in the system',
                            action: 'Create a user',
                        },
                        {
                            name: '🔍 Get User',
                            value: 'getUser',
                            description: 'Obtain information from a specific user',
                            action: 'Get a user by ID',
                        },
                        {
                            name: '📋 Get All Users',
                            value: 'getAllUsers',
                            description: 'List all registered users',
                            action: 'Get all users',
                        },
                        {
                            name: '✏️ Update User',
                            value: 'updateUser',
                            description: 'Modify data of an existing user',
                            action: 'Update a user',
                        },
                        {
                            name: '🗑️ Delete User',
                            value: 'deleteUser',
                            description: 'Permanently delete a user',
                            action: 'Delete a user',
                        },
                        {
                            name: '📧 Update User Email',
                            value: 'updateUserEmail',
                            description: "Change a user's email address",
                            action: 'Update user email',
                        },
                        {
                            name: '🔑 Update User Password',
                            value: 'updateUserPassword',
                            description: "Change a user's password",
                            action: 'Update user password',
                        },
                        {
                            name: '👤 Update User Username',
                            value: 'updateUserUsername',
                            description: 'Change username',
                            action: 'Update user username',
                        },
                    ],
                    default: 'getAllUsers',
                },
                // Project fields
                {
                    displayName: 'Project ID',
                    name: 'projectId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'project',
                            ],
                            operation: [
                                'getProject',
                                'updateProject',
                                'deleteProject',
                                'updateProjectBackgroundImage',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'The ID of the project',
                },
                {
                    displayName: 'Name',
                    name: 'name',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'project',
                            ],
                            operation: [
                                'createProject',
                                'updateProject',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'Name of the project',
                },
                // Project additional fields - reemplazados por parámetros individuales
                {
                    displayName: 'Background Name',
                    name: 'backgroundName',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['project'],
                            operation: ['createProject', 'updateProject'],
                        },
                    },
                    description: 'Name of the background',
                },
                {
                    displayName: 'Background Type',
                    name: 'backgroundType',
                    type: 'options',
                    options: [
                        {
                            name: 'Gradient',
                            value: 'gradient',
                        },
                        {
                            name: 'Image',
                            value: 'image',
                        },
                    ],
                    default: 'gradient',
                    displayOptions: {
                        show: {
                            resource: ['project'],
                            operation: ['createProject', 'updateProject'],
                        },
                    },
                    description: 'Type of background',
                },
                {
                    displayName: 'Background Image',
                    name: 'backgroundImage',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['project'],
                            operation: ['createProject', 'updateProject'],
                        },
                    },
                    description: 'URL of the background image',
                },
                {
                    displayName: 'Background Image File',
                    name: 'backgroundImageFile',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'project',
                            ],
                            operation: [
                                'updateProjectBackgroundImage',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'File to upload as background image',
                },
                // Board fields
                {
                    displayName: 'Project ID',
                    name: 'projectId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'board',
                            ],
                            operation: [
                                'createBoard',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'The ID of the project to create the board in',
                },
                {
                    displayName: 'Board ID',
                    name: 'boardId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'board',
                            ],
                            operation: [
                                'getBoard',
                                'updateBoard',
                                'deleteBoard',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'The ID of the board',
                },
                {
                    displayName: 'Name',
                    name: 'name',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'board',
                            ],
                            operation: [
                                'createBoard',
                                'updateBoard',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'Name of the board',
                },
                {
                    displayName: 'Position',
                    name: 'position',
                    type: 'number',
                    displayOptions: {
                        show: {
                            resource: [
                                'board',
                            ],
                            operation: [
                                'createBoard',
                                'updateBoard',
                            ],
                        },
                    },
                    default: 1,
                    description: 'Position of the board',
                },
                // Card fields
                {
                    displayName: 'List ID',
                    name: 'listId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'card',
                            ],
                            operation: [
                                'createCard',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'The ID of the list to create the card in',
                },
                {
                    displayName: 'Card ID',
                    name: 'cardId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'card',
                            ],
                            operation: [
                                'getCard',
                                'updateCard',
                                'deleteCard',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'The ID of the card',
                },
                {
                    displayName: 'Name',
                    name: 'name',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'card',
                            ],
                            operation: [
                                'createCard',
                                'updateCard',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'Name of the card',
                },
                // Card additional fields - replaced by individual parameters
                {
                    displayName: 'Description',
                    name: 'description',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['card'],
                            operation: ['createCard', 'updateCard'],
                        },
                    },
                    description: 'Description of the card',
                },
                {
                    displayName: "Type",
                    name: "type",
                    default: "project",
                    type: "options",
                    options: [
                        {
                            name: "Project",
                            value: "project"
                        },
                        {
                            name: "Story",
                            value: "story"
                        }
                    ],
                    displayOptions: {
                        show: {
                            resource: ['card'],
                            operation: ['createCard', 'updateCard'],
                        },
                    }
                },
                {
                    displayName: 'Due Date',
                    name: 'dueDate',
                    type: 'dateTime',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['card'],
                            operation: ['createCard', 'updateCard'],
                        },
                    },
                    description: 'Due date of the card',
                },
                {
                    displayName: 'Position',
                    name: 'position',
                    type: 'number',
                    default: 1,
                    displayOptions: {
                        show: {
                            resource: ['card'],
                            operation: ['createCard', 'updateCard'],
                        },
                    },
                    description: 'Position of the card in the list',
                },
                {
                    displayName: 'Is Due Date Completed',
                    name: 'isDueDateCompleted',
                    type: 'boolean',
                    default: false,
                    displayOptions: {
                        show: {
                            resource: ['card'],
                            operation: ['createCard', 'updateCard'],
                        },
                    },
                    description: 'Whether the due date is completed',
                },
                // Task fields
                {
                    displayName: 'Card ID',
                    name: 'cardId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'card',
                            ],
                            operation: [
                                'createCardTask',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'The ID of the card to create the task in',
                },
                {
                    displayName: 'Task ID',
                    name: 'taskId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'card',
                            ],
                            operation: [
                                'updateCardTask',
                                'deleteCardTask',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'The ID of the task',
                },
                {
                    displayName: 'Task Name',
                    name: 'taskName',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'card',
                            ],
                            operation: [
                                'createCardTask',
                                'updateCardTask',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'Name of the task',
                },
                // Task additional fields
                {
                    displayName: 'Task Position',
                    name: 'taskPosition',
                    type: 'number',
                    default: 1,
                    displayOptions: {
                        show: {
                            resource: ['card'],
                            operation: ['createCardTask', 'updateCardTask'],
                        },
                    },
                    description: 'Position of the task in the card',
                },
                {
                    displayName: 'Is Completed',
                    name: 'taskIsCompleted',
                    type: 'boolean',
                    default: false,
                    displayOptions: {
                        show: {
                            resource: ['card'],
                            operation: ['createCardTask', 'updateCardTask'],
                        },
                    },
                    description: 'Whether the task is completed',
                },
                // User fields
                {
                    displayName: 'User ID',
                    name: 'userId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'user',
                            ],
                            operation: [
                                'getUser',
                                'updateUser',
                                'deleteUser',
                                'updateUserEmail',
                                'updateUserPassword',
                                'updateUserUsername',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'The ID of the user',
                },
                {
                    displayName: 'Email',
                    name: 'email',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'user',
                            ],
                            operation: [
                                'createUser',
                                'updateUser',
                                'updateUserEmail',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'Email of the user',
                },
                {
                    displayName: 'Password',
                    name: 'password',
                    type: 'string',
                    typeOptions: {
                        password: true,
                    },
                    displayOptions: {
                        show: {
                            resource: [
                                'user',
                            ],
                            operation: [
                                'createUser',
                                'updateUserPassword',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'Password of the user',
                },
                {
                    displayName: 'Name',
                    name: 'name',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'user',
                            ],
                            operation: [
                                'createUser',
                                'updateUser',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'Name of the user',
                },
                {
                    displayName: 'Username',
                    name: 'username',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'user',
                            ],
                            operation: [
                                'createUser',
                                'updateUser',
                                'updateUserUsername',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'Username of the user',
                },
                // User additional fields - replaced by individual parameters
                {
                    displayName: 'Phone',
                    name: 'phone',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['user'],
                            operation: ['createUser', 'updateUser'],
                        },
                    },
                    description: 'Phone number of the user',
                },
                {
                    displayName: 'Organization',
                    name: 'organization',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['user'],
                            operation: ['createUser', 'updateUser'],
                        },
                    },
                    description: 'Organization of the user',
                },
                {
                    displayName: 'Language',
                    name: 'language',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['user'],
                            operation: ['createUser', 'updateUser'],
                        },
                    },
                    description: 'Language preference of the user',
                },
                {
                    displayName: 'Subscribe to Own Cards',
                    name: 'subscribeToOwnCards',
                    type: 'boolean',
                    default: true,
                    displayOptions: {
                        show: {
                            resource: ['user'],
                            operation: ['createUser', 'updateUser'],
                        },
                    },
                    description: 'Whether the user should be subscribed to their own cards',
                },
                {
                    displayName: 'Is Admin',
                    name: 'isAdmin',
                    type: 'boolean',
                    default: false,
                    displayOptions: {
                        show: {
                            resource: ['user'],
                            operation: ['createUser', 'updateUser'],
                        },
                    },
                    description: 'Whether the user is an administrator',
                },
                // Operations for Board Memberships
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    displayOptions: {
                        show: {
                            resource: [
                                'boardMembership',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Add Member to Board',
                            value: 'createBoardMembership',
                            description: 'Add a member to a board',
                            action: 'Add a member to a board',
                        },
                        {
                            name: 'Update Board Membership',
                            value: 'updateBoardMembership',
                            description: 'Update a board membership',
                            action: 'Update a board membership',
                        },
                        {
                            name: 'Remove Member from Board',
                            value: 'deleteBoardMembership',
                            description: 'Remove a member from a board',
                            action: 'Remove a member from a board',
                        },
                    ],
                    default: 'createBoardMembership',
                },
                // Board Membership fields
                {
                    displayName: 'Board ID',
                    name: 'boardId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'board',
                            ],
                            operation: [
                                'createBoardMembership',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'ID of the board to which the member will be added',
                },
                {
                    displayName: 'User ID',
                    name: 'userId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'board',
                            ],
                            operation: [
                                'createBoardMembership',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'User ID that will be added as a board member',
                },
                {
                    displayName: 'Membership ID',
                    name: 'membershipId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'board',
                            ],
                            operation: [
                                'updateBoardMembership',
                                'deleteBoardMembership',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'Board Membership ID',
                },
                {
                    displayName: 'Role',
                    name: 'role',
                    type: 'options',
                    displayOptions: {
                        show: {
                            resource: [
                                'board',
                            ],
                            operation: [
                                'createBoardMembership',
                                'updateBoardMembership',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Admin',
                            value: 'admin',
                        },
                        {
                            name: 'Editor',
                            value: 'editor',
                        },
                    ],
                    required: true,
                    default: 'editor',
                    description: "Member's role on the board",
                },
                // Operations for Board Labels
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    displayOptions: {
                        show: {
                            resource: [
                                'boardLabel',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Create a Board Label',
                            value: 'createBoardLabel',
                            description: 'Create a board label',
                            action: 'Create a board label',
                        },
                        {
                            name: 'Update a Board Label',
                            value: 'updateBoardLabel',
                            description: 'Update a board label',
                            action: 'Update a board label',
                        },
                        {
                            name: 'Delete a Board Label',
                            value: 'deleteBoardLabel',
                            description: 'Delete a board label',
                            action: 'Delete a board label',
                        },
                    ],
                    default: 'createBoardLabel',
                },
                // Board Label fields
                {
                    displayName: 'Board ID',
                    name: 'boardId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'board',
                            ],
                            operation: [
                                'createBoardLabel',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'ID of the board where the label will be created',
                },
                {
                    displayName: 'Label ID',
                    name: 'labelId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'board',
                            ],
                            operation: [
                                'updateBoardLabel',
                                'deleteBoardLabel',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'Board label ID',
                },
                {
                    displayName: 'Name',
                    name: 'name',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'board',
                            ],
                            operation: [
                                'createBoardLabel',
                                'updateBoardLabel',
                            ],
                        },
                    },
                    default: '',
                    description: 'Label name',
                },
                {
                    displayName: 'Color',
                    name: 'color',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'board',
                            ],
                            operation: [
                                'createBoardLabel',
                                'updateBoardLabel',
                            ],
                        },
                    },
                    required: true,
                    default: '#4680FF',
                    description: 'Label color in hexadecimal format (for example, #FF0000 for red)',
                },
                {
                    displayName: 'Position',
                    name: 'position',
                    type: 'number',
                    displayOptions: {
                        show: {
                            resource: [
                                'board',
                            ],
                            operation: [
                                'createBoardLabel',
                                'updateBoardLabel',
                            ],
                        },
                    },
                    required: true,
                    default: '0',
                    description: 'Label position in number',
                },
                // Operations for Board Lists
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    displayOptions: {
                        show: {
                            resource: [
                                'boardList',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Create a Board List',
                            value: 'createBoardList',
                            description: 'Create a board list',
                            action: 'Create a board list',
                        },
                        {
                            name: 'Update a Board List',
                            value: 'updateBoardList',
                            description: 'Update a board list',
                            action: 'Update a board list',
                        },
                        {
                            name: 'Delete a Board List',
                            value: 'deleteBoardList',
                            description: 'Delete a board list',
                            action: 'Delete a board list',
                        },
                        {
                            name: 'Sort Cards in a List',
                            value: 'sortBoardList',
                            description: 'Sort cards in a list',
                            action: 'Sort cards in a list',
                        },
                    ],
                    default: 'createBoardList',
                },
                // Board List fields
                {
                    displayName: 'Board ID',
                    name: 'boardId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'board',
                            ],
                            operation: [
                                'createBoardList',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'ID of the board where the list will be created',
                },
                {
                    displayName: 'List ID',
                    name: 'listId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'board',
                            ],
                            operation: [
                                'updateBoardList',
                                'deleteBoardList',
                                'sortBoardList',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'Board list ID',
                },
                {
                    displayName: 'Name',
                    name: 'name',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'board',
                            ],
                            operation: [
                                'createBoardList',
                                'updateBoardList',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'List name',
                },
                {
                    displayName: 'Position',
                    name: 'position',
                    type: 'number',
                    displayOptions: {
                        show: {
                            resource: [
                                'board',
                            ],
                            operation: [
                                'createBoardList',
                                'updateBoardList',
                            ],
                        },
                    },
                    default: 1,
                    description: 'List position on the board',
                },
                {
                    displayName: 'Card IDs',
                    name: 'cardIds',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'board',
                            ],
                            operation: [
                                'sortBoardList',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'Card IDs separated by commas, in the order in which they should be sorted',
                },
                {
                    displayName: 'Color',
                    name: 'color',
                    type: 'options',
                    displayOptions: {
                        show: {
                            resource: [
                                'boardList',
                            ],
                            operation: [
                                'createBoardList',
                                'updateBoardList',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Berry Red',
                            value: 'berry-red',
                        },
                        {
                            name: 'Pumpkin Orange',
                            value: 'pumpkin-orange',
                        },
                        {
                            name: 'Lagoon Blue',
                            value: 'lagoon-blue',
                        },
                        {
                            name: 'Pink Tulip',
                            value: 'pink-tulip',
                        },
                        {
                            name: 'Light Mud',
                            value: 'light-mud',
                        },
                        {
                            name: 'Orange Peel',
                            value: 'orange-peel',
                        },
                        {
                            name: 'Bright Moss',
                            value: 'bright-moss',
                        },
                        {
                            name: 'Antique Blue',
                            value: 'antique-blue',
                        },
                        {
                            name: 'Dark Granite',
                            value: 'dark-granite',
                        },
                        {
                            name: 'Lagune Blue',
                            value: 'lagune-blue',
                        },
                        {
                            name: 'Sunny Grass',
                            value: 'sunny-grass',
                        },
                        {
                            name: 'Morning Sky',
                            value: 'morning-sky',
                        },
                        {
                            name: 'Light Orange',
                            value: 'light-orange',
                        },
                        {
                            name: 'Midnight Blue',
                            value: 'midnight-blue',
                        },
                        {
                            name: 'Tank Green',
                            value: 'tank-green',
                        },
                        {
                            name: 'Gun Metal',
                            value: 'gun-metal',
                        },
                        {
                            name: 'Wet Moss',
                            value: 'wet-moss',
                        },
                        {
                            name: 'Red Burgundy',
                            value: 'red-burgundy',
                        },
                        {
                            name: 'Light Concrete',
                            value: 'light-concrete',
                        },
                        {
                            name: 'Apricot Red',
                            value: 'apricot-red',
                        },
                        {
                            name: 'Desert Sand',
                            value: 'desert-sand',
                        },
                        {
                            name: 'Navy Blue',
                            value: 'navy-blue',
                        },
                        {
                            name: 'Egg Yellow',
                            value: 'egg-yellow',
                        },
                        {
                            name: 'Coral Green',
                            value: 'coral-green',
                        },
                        {
                            name: 'Light Cocoa',
                            value: 'light-cocoa',
                        },
                    ],
                    default: 'berry-red',
                    description: 'Color of the list',
                },
                // Operations for Card Memberships
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    displayOptions: {
                        show: {
                            resource: [
                                'cardMembership',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Add Member to Card',
                            value: 'addCardMember',
                            description: 'Add a member to a card',
                            action: 'Add a member to a card',
                        },
                        {
                            name: 'Remove Member from Card',
                            value: 'removeCardMember',
                            description: 'Remove a member from a card',
                            action: 'Remove a member from a card',
                        },
                    ],
                    default: 'addCardMember',
                },
                // Card Membership fields
                {
                    displayName: 'Card ID',
                    name: 'cardId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'cardMembership',
                            ],
                            operation: [
                                'addCardMember',
                                'removeCardMember',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'The ID of the card',
                },
                {
                    displayName: 'User ID',
                    name: 'userId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'cardMembership',
                            ],
                            operation: [
                                'addCardMember',
                                'removeCardMember',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'The ID of the user to add/remove',
                },
                // Operations for Card Labels
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    displayOptions: {
                        show: {
                            resource: [
                                'cardLabel',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Add Label to Card',
                            value: 'addCardLabel',
                            description: 'Add a label to a card',
                            action: 'Add a label to a card',
                        },
                        {
                            name: 'Remove Label from Card',
                            value: 'removeCardLabel',
                            description: 'Remove a label from a card',
                            action: 'Remove a label from a card',
                        },
                    ],
                    default: 'addCardLabel',
                },
                // Card Label fields
                {
                    displayName: 'Card ID',
                    name: 'cardId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'cardLabel',
                            ],
                            operation: [
                                'addCardLabel',
                                'removeCardLabel',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'The ID of the card',
                },
                {
                    displayName: 'Label ID',
                    name: 'labelId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'cardLabel',
                            ],
                            operation: [
                                'addCardLabel',
                                'removeCardLabel',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'The ID of the label to add/remove',
                },
                // Operations for Card Tasks
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    displayOptions: {
                        show: {
                            resource: [
                                'cardTask',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Create a Task in a Card',
                            value: 'createCardTask',
                            description: 'Create a task in a card',
                            action: 'Create a task in a card',
                        },
                        {
                            name: 'Update a Task',
                            value: 'updateCardTask',
                            description: 'Update a task',
                            action: 'Update a task',
                        },
                        {
                            name: 'Delete a Task',
                            value: 'deleteCardTask',
                            description: 'Delete a task',
                            action: 'Delete a task',
                        },
                    ],
                    default: 'createCardTask',
                },
                // Card Task fields - Removing duplicated fields
                {
                    displayName: 'Card ID',
                    name: 'cardId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'cardTask',
                            ],
                            operation: [
                                'createCardTask',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'The ID of the card to create the task in',
                },
                {
                    displayName: 'Task ID',
                    name: 'taskId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'cardTask',
                            ],
                            operation: [
                                'updateCardTask',
                                'deleteCardTask',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'The ID of the task',
                },
                {
                    displayName: 'Task Name',
                    name: 'taskName',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'cardTask',
                            ],
                            operation: [
                                'createCardTask',
                                'updateCardTask',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'Name of the task',
                },
                // Task additional fields
                {
                    displayName: 'Task Position',
                    name: 'taskPosition',
                    type: 'number',
                    default: 1,
                    displayOptions: {
                        show: {
                            resource: ['cardTask'],
                            operation: ['createCardTask', 'updateCardTask'],
                        },
                    },
                    description: 'Position of the task in the card',
                },
                {
                    displayName: 'Is Completed',
                    name: 'taskIsCompleted',
                    type: 'boolean',
                    default: false,
                    displayOptions: {
                        show: {
                            resource: ['cardTask'],
                            operation: ['createCardTask', 'updateCardTask'],
                        },
                    },
                    description: 'Whether the task is completed',
                },
                // Operations for Card Attachments
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    displayOptions: {
                        show: {
                            resource: [
                                'cardAttachment',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Create an Attachment in a Card',
                            value: 'createCardAttachment',
                            description: 'Create an attachment in a card',
                            action: 'Create an attachment in a card',
                        },
                        {
                            name: 'Update an Attachment',
                            value: 'updateCardAttachment',
                            description: 'Update an attachment',
                            action: 'Update an attachment',
                        },
                        {
                            name: 'Delete an Attachment',
                            value: 'deleteCardAttachment',
                            description: 'Delete an attachment',
                            action: 'Delete an attachment',
                        },
                    ],
                    default: 'createCardAttachment',
                },
                // Card Attachment fields
                {
                    displayName: 'Card ID',
                    name: 'cardId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'card',
                            ],
                            operation: [
                                'createCardAttachment',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'The ID of the card to create the attachment in',
                },
                {
                    displayName: 'Attachment ID',
                    name: 'attachmentId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'card',
                            ],
                            operation: [
                                'updateCardAttachment',
                                'deleteCardAttachment',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'The ID of the attachment',
                },
                {
                    displayName: 'File',
                    name: 'file',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'card',
                            ],
                            operation: [
                                'createCardAttachment',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'File to attach (URL or file path)',
                },
                {
                    displayName: 'Attachment Name',
                    name: 'attachmentName',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'card',
                            ],
                            operation: [
                                'createCardAttachment',
                                'updateCardAttachment',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'Name of the attachment',
                },
                // Operations for Card Actions
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    displayOptions: {
                        show: {
                            resource: [
                                'cardComment',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Get All Actions of a Card',
                            value: 'getAllCardActions',
                            description: 'Get all actions of a card',
                            action: 'Get all actions of a card',
                        },
                        {
                            name: 'Create Comment on a Card',
                            value: 'createCardComment',
                            description: 'Create a comment on a card',
                            action: 'Create a comment on a card',
                        },
                        {
                            name: 'Update Comment on a Card',
                            value: 'updateCardComment',
                            description: 'Update a comment on a card',
                            action: 'Update a comment on a card',
                        },
                        {
                            name: 'Delete Comment from a Card',
                            value: 'deleteCardComment',
                            description: 'Delete a comment from a card',
                            action: 'Delete a comment from a card',
                        },
                    ],
                    default: 'getAllCardActions',
                },
                // Card Action fields
                {
                    displayName: 'Card ID',
                    name: 'cardId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'card',
                            ],
                            operation: [
                                'getAllCardActions',
                                'createCardComment',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'The ID of the card',
                },
                {
                    displayName: 'Comment ID',
                    name: 'commentId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'card',
                            ],
                            operation: [
                                'updateCardComment',
                                'deleteCardComment',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'The ID of the comment',
                },
                {
                    displayName: 'Comment Text',
                    name: 'commentText',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'card',
                            ],
                            operation: [
                                'createCardComment',
                                'updateCardComment',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'The text content of the comment',
                },
                {
                    displayName: 'With Details',
                    name: 'withDetails',
                    type: 'boolean',
                    default: false,
                    displayOptions: {
                        show: {
                            resource: ['card'],
                            operation: ['getAllCardActions'],
                        },
                    },
                    description: 'Whether to include additional details in the response',
                },
                // Operations for Project Managers
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    displayOptions: {
                        show: {
                            resource: [
                                'projectManager',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Add Manager to Project',
                            value: 'addProjectManager',
                            description: 'Add a manager to a project',
                            action: 'Add a manager to a project',
                        },
                        {
                            name: 'Remove Manager from Project',
                            value: 'deleteProjectManager',
                            description: 'Delete a project manager',
                            action: 'Delete a project manager',
                        },
                    ],
                    default: 'addProjectManager',
                },
                // Project Manager fields
                {
                    displayName: 'Project ID',
                    name: 'projectId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'project',
                            ],
                            operation: [
                                'addProjectManager',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'Project ID to which the administrator will be added',
                },
                {
                    displayName: 'User ID',
                    name: 'userId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'project',
                            ],
                            operation: [
                                'addProjectManager',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'User ID that will be added as administrator',
                },
                {
                    displayName: 'Manager ID',
                    name: 'managerId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'project',
                            ],
                            operation: [
                                'deleteProjectManager',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'ID of the project manager to be deleted',
                },
                // Card Member fields
                {
                    displayName: 'Card ID',
                    name: 'cardId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'card',
                            ],
                            operation: [
                                'addCardMember',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'ID of the card where the member will be added',
                },
                {
                    displayName: 'User ID',
                    name: 'userId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'card',
                            ],
                            operation: [
                                'addCardMember',
                                'removeCardMember',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'ID of the user to be added/removed from the card',
                },
                // Card Label fields for the card resource
                {
                    displayName: 'Card ID',
                    name: 'cardId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'card',
                            ],
                            operation: [
                                'addCardLabel',
                                'removeCardLabel',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'ID of the card',
                },
                {
                    displayName: 'Label ID',
                    name: 'labelId',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: [
                                'card',
                            ],
                            operation: [
                                'addCardLabel',
                                'removeCardLabel',
                            ],
                        },
                    },
                    required: true,
                    default: '',
                    description: 'ID of the label to add/remove',
                },
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        const resource = this.getNodeParameter('resource', 0);
        const operation = this.getNodeParameter('operation', 0);
        let responseData;
        for (let i = 0; i < items.length; i++) {
            try {
                if (resource === 'project') {
                    // *********************************************************************
                    //                             PROJECT
                    // *********************************************************************
                    if (operation === 'createProject') {
                        // ----------------------------------
                        //         project:create
                        // ----------------------------------
                        const name = this.getNodeParameter('name', i);
                        const backgroundName = this.getNodeParameter('backgroundName', i);
                        const backgroundType = this.getNodeParameter('backgroundType', i);
                        const backgroundImage = this.getNodeParameter('backgroundImage', i);
                        const body = {
                            name,
                            background: backgroundName,
                            backgroundType,
                            backgroundImage,
                        };
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'POST', '/projects', body);
                    }
                    else if (operation === 'deleteProject') {
                        // ----------------------------------
                        //         project:delete
                        // ----------------------------------
                        const projectId = this.getNodeParameter('projectId', i);
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'DELETE', `/projects/${projectId}`);
                    }
                    else if (operation === 'getProject') {
                        // ----------------------------------
                        //         project:get
                        // ----------------------------------
                        const projectId = this.getNodeParameter('projectId', i);
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'GET', `/projects/${projectId}`);
                    }
                    else if (operation === 'getAllProjects') {
                        // ----------------------------------
                        //         project:getAll
                        // ----------------------------------
                        responseData = await GenericFunctions_1.plankaApiRequestAllItems.call(this, 'GET', '/projects');
                    }
                    else if (operation === 'updateProject') {
                        // ----------------------------------
                        //         project:update
                        // ----------------------------------
                        const projectId = this.getNodeParameter('projectId', i);
                        const name = this.getNodeParameter('name', i);
                        const backgroundName = this.getNodeParameter('backgroundName', i);
                        const backgroundType = this.getNodeParameter('backgroundType', i);
                        const backgroundImage = this.getNodeParameter('backgroundImage', i);
                        const body = {
                            name,
                            background: backgroundName,
                            backgroundType,
                            backgroundImage,
                        };
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'PATCH', `/projects/${projectId}`, body);
                    }
                    else if (operation === 'updateProjectBackgroundImage') {
                        // ----------------------------------
                        //         project:updateBackgroundImage
                        // ----------------------------------
                        const projectId = this.getNodeParameter('projectId', i);
                        const backgroundImageFile = this.getNodeParameter('backgroundImageFile', i);
                        const formData = {
                            file: backgroundImageFile,
                        };
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'PATCH', `/projects/${projectId}/background-image`, formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                            },
                        });
                    }
                }
                else if (resource === 'projectManager') {
                    // *********************************************************************
                    //                             PROJECT MANAGER
                    // *********************************************************************
                    if (operation === 'addProjectManager') {
                        // ----------------------------------
                        //         projectManager:add
                        // ----------------------------------
                        const projectId = this.getNodeParameter('projectId', i);
                        const userId = this.getNodeParameter('userId', i);
                        const body = {
                            userId,
                        };
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'POST', `/projects/${projectId}/managers`, body);
                    }
                    else if (operation === 'deleteProjectManager') {
                        // ----------------------------------
                        //         projectManager:delete
                        // ----------------------------------
                        const managerId = this.getNodeParameter('managerId', i);
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'DELETE', `/project-managers/${managerId}`);
                    }
                }
                else if (resource === 'board') {
                    // *********************************************************************
                    //                             BOARD
                    // *********************************************************************
                    if (operation === 'createBoard') {
                        // ----------------------------------
                        //         board:create
                        // ----------------------------------
                        const projectId = this.getNodeParameter('projectId', i);
                        const name = this.getNodeParameter('name', i);
                        const position = this.getNodeParameter('position', i);
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'POST', `/projects/${projectId}/boards`, {
                            name,
                            position,
                        });
                    }
                    else if (operation === 'deleteBoard') {
                        // ----------------------------------
                        //         board:delete
                        // ----------------------------------
                        const boardId = this.getNodeParameter('boardId', i);
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'DELETE', `/boards/${boardId}`);
                    }
                    else if (operation === 'getBoard') {
                        // ----------------------------------
                        //         board:get
                        // ----------------------------------
                        const boardId = this.getNodeParameter('boardId', i);
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'GET', `/boards/${boardId}`);
                    }
                    else if (operation === 'updateBoard') {
                        // ----------------------------------
                        //         board:update
                        // ----------------------------------
                        const boardId = this.getNodeParameter('boardId', i);
                        const updateFields = {
                            name: this.getNodeParameter('name', i),
                            position: this.getNodeParameter('position', i),
                        };
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'PATCH', `/boards/${boardId}`, updateFields);
                    }
                }
                else if (resource === 'boardMembership') {
                    // *********************************************************************
                    //                             BOARD MEMBERSHIP
                    // *********************************************************************
                    if (operation === 'createBoardMembership') {
                        // ----------------------------------
                        //         boardMembership:create
                        // ----------------------------------
                        const boardId = this.getNodeParameter('boardId', i);
                        const userId = this.getNodeParameter('userId', i);
                        const role = this.getNodeParameter('role', i);
                        const canComment = this.getNodeParameter('canComment', i);
                        const body = {
                            userId,
                            role,
                            canComment,
                        };
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'POST', `/boards/${boardId}/memberships`, body);
                    }
                    else if (operation === 'deleteBoardMembership') {
                        // ----------------------------------
                        //         boardMembership:delete
                        // ----------------------------------
                        const membershipId = this.getNodeParameter('membershipId', i);
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'DELETE', `/boards/membership/${membershipId}`);
                    }
                    else if (operation === 'updateBoardMembership') {
                        // ----------------------------------
                        //         boardMembership:update
                        // ----------------------------------
                        const membershipId = this.getNodeParameter('membershipId', i);
                        const userId = this.getNodeParameter('userId', i);
                        const role = this.getNodeParameter('role', i);
                        const canComment = this.getNodeParameter('canComment', i);
                        const body = {
                            userId,
                            role,
                            canComment,
                        };
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'PATCH', `/boards/membership/${membershipId}`, body);
                    }
                }
                else if (resource === 'boardList') {
                    // *********************************************************************
                    //                             BOARD LIST
                    // *********************************************************************
                    if (operation === 'createBoardList') {
                        // ----------------------------------
                        //         boardList:create
                        // ----------------------------------
                        const boardId = this.getNodeParameter('boardId', i);
                        const name = this.getNodeParameter('name', i);
                        const position = this.getNodeParameter('position', i);
                        const color = this.getNodeParameter('color', i);
                        const body = {
                            name,
                            position,
                            color,
                        };
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'POST', `/boards/${boardId}/lists`, body);
                    }
                    else if (operation === 'deleteBoardList') {
                        // ----------------------------------
                        //         boardList:delete
                        // ----------------------------------
                        const listId = this.getNodeParameter('listId', i);
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'DELETE', `/lists/${listId}`);
                    }
                    else if (operation === 'updateBoardList') {
                        // ----------------------------------
                        //         boardList:update
                        // ----------------------------------
                        const listId = this.getNodeParameter('listId', i);
                        const name = this.getNodeParameter('name', i);
                        const position = this.getNodeParameter('position', i);
                        const color = this.getNodeParameter('color', i);
                        const body = {
                            name,
                            position,
                            color,
                        };
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'PATCH', `/lists/${listId}`, body);
                    }
                    else if (operation === 'sortBoardList') {
                        // ----------------------------------
                        //         boardList:sort
                        // ----------------------------------
                        const listId = this.getNodeParameter('listId', i);
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'POST', `/lists/${listId}/sort`);
                    }
                }
                else if (resource === 'boardLabel') {
                    // *********************************************************************
                    //                             BOARD LABEL
                    // *********************************************************************
                    if (operation === 'createBoardLabel') {
                        // ----------------------------------
                        //         boardLabel:create
                        // ----------------------------------
                        const boardId = this.getNodeParameter('boardId', i);
                        const name = this.getNodeParameter('name', i);
                        const position = this.getNodeParameter('position', i);
                        const color = this.getNodeParameter('color', i);
                        const body = {
                            name,
                            position,
                            color,
                        };
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'POST', `/boards/${boardId}/labels`, body);
                    }
                    else if (operation === 'deleteBoardLabel') {
                        // ----------------------------------
                        //         boardLabel:delete
                        // ----------------------------------
                        const labelId = this.getNodeParameter('labelId', i);
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'DELETE', `/labels/${labelId}`);
                    }
                    else if (operation === 'updateBoardLabel') {
                        // ----------------------------------
                        //         boardLabel:update
                        // ----------------------------------
                        const labelId = this.getNodeParameter('labelId', i);
                        const name = this.getNodeParameter('name', i);
                        const position = this.getNodeParameter('position', i);
                        const color = this.getNodeParameter('color', i);
                        const body = {
                            name,
                            position,
                            color,
                        };
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'PATCH', `/labels/${labelId}`, body);
                    }
                }
                else if (resource === 'card') {
                    // *********************************************************************
                    //                             CARD
                    // *********************************************************************
                    if (operation === 'createCard') {
                        // ----------------------------------
                        //         card:create
                        // ----------------------------------
                        const listId = this.getNodeParameter('listId', i);
                        const name = this.getNodeParameter('name', i);
                        const description = this.getNodeParameter('description', i);
                        const type = this.getNodeParameter('type', i);
                        const dueDate = this.getNodeParameter('dueDate', i);
                        const position = this.getNodeParameter('position', i);
                        const body = {
                            name,
                            description,
                            type,
                            dueDate,
                            position,
                        };
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'POST', `/lists/${listId}/cards`, body);
                    }
                    else if (operation === 'deleteCard') {
                        // ----------------------------------
                        //         card:delete
                        // ----------------------------------
                        const cardId = this.getNodeParameter('cardId', i);
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'DELETE', `/cards/${cardId}`);
                    }
                    else if (operation === 'getCard') {
                        // ----------------------------------
                        //         card:get
                        // ----------------------------------
                        const cardId = this.getNodeParameter('cardId', i);
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'GET', `/cards/${cardId}`);
                    }
                    else if (operation === 'updateCard') {
                        // ----------------------------------
                        //         card:update
                        // ----------------------------------
                        const cardId = this.getNodeParameter('cardId', i);
                        const name = this.getNodeParameter('name', i);
                        const description = this.getNodeParameter('description', i);
                        const dueDate = this.getNodeParameter('dueDate', i);
                        const position = this.getNodeParameter('position', i);
                        const body = {
                            name,
                            description,
                            dueDate,
                            position,
                        };
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'PATCH', `/cards/${cardId}`, body);
                    }
                }
                else if (resource === 'cardTask') {
                    // *********************************************************************
                    //                             TASK
                    // *********************************************************************
                    if (operation === 'createCardTask') {
                        // ----------------------------------
                        //         task:create
                        // ----------------------------------
                        const cardId = this.getNodeParameter('cardId', i);
                        const name = this.getNodeParameter('taskName', i);
                        const position = this.getNodeParameter('taskPosition', i);
                        const isCompleted = this.getNodeParameter('taskIsCompleted', i);
                        const body = {
                            name,
                            position,
                            isCompleted,
                        };
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'POST', `/cards/${cardId}/tasks`, body);
                    }
                    else if (operation === 'updateCardTask') {
                        // ----------------------------------
                        //         task:update
                        // ----------------------------------
                        const taskId = this.getNodeParameter('taskId', i);
                        const name = this.getNodeParameter('taskName', i);
                        const position = this.getNodeParameter('taskPosition', i);
                        const isCompleted = this.getNodeParameter('taskIsCompleted', i);
                        const body = {
                            name,
                            position,
                            isCompleted,
                        };
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'PATCH', `/tasks/${taskId}`, body);
                    }
                    else if (operation === 'deleteCardTask') {
                        // ----------------------------------
                        //         task:delete
                        // ----------------------------------
                        const taskId = this.getNodeParameter('taskId', i);
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'DELETE', `/tasks/${taskId}`);
                    }
                }
                else if (resource === 'cardLabel') {
                    // *********************************************************************
                    //                             CARD LABEL
                    // *********************************************************************
                    if (operation === 'addCardLabel') {
                        // ----------------------------------
                        //         cardLabel:add
                        // ----------------------------------
                        const cardId = this.getNodeParameter('cardId', i);
                        const labelId = this.getNodeParameter('labelId', i);
                        const body = {
                            labelId,
                        };
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'POST', `/cards/${cardId}/labels`, body);
                    }
                    else if (operation === 'removeCardLabel') {
                        // ----------------------------------
                        //         cardLabel:remove
                        // ----------------------------------
                        const cardId = this.getNodeParameter('cardId', i);
                        const labelId = this.getNodeParameter('labelId', i);
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'DELETE', `/cards/${cardId}/labels/${labelId}`);
                    }
                }
                else if (resource === 'cardMembership') {
                    // *********************************************************************
                    //                             CARD MEMBERSHIP
                    // *********************************************************************
                    if (operation === 'addCardMember') {
                        // ----------------------------------
                        //         cardMembership:add
                        // ----------------------------------
                        const cardId = this.getNodeParameter('cardId', i);
                        const userId = this.getNodeParameter('userId', i);
                        const body = {
                            userId,
                        };
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'POST', `/cards/${cardId}/memberships`, body);
                    }
                    else if (operation === 'removeCardMember') {
                        // ----------------------------------
                        //         cardMembership:remove
                        // ----------------------------------
                        const cardId = this.getNodeParameter('cardId', i);
                        const userId = this.getNodeParameter('userId', i);
                        const body = {
                            userId,
                        };
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'DELETE', `/cards/${cardId}/memberships`, body);
                    }
                }
                else if (resource === 'cardAttachment') {
                    // *********************************************************************
                    //                             CARD ATTACHMENT
                    // *********************************************************************
                    if (operation === 'createCardAttachment') {
                        // ----------------------------------
                        //         cardAttachment:create
                        // ----------------------------------
                        const cardId = this.getNodeParameter('cardId', i);
                        const file = this.getNodeParameter('file', i);
                        const name = this.getNodeParameter('attachmentName', i);
                        const formData = {
                            file,
                            name,
                        };
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'POST', `/cards/${cardId}/attachments`, formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                            },
                        });
                    }
                    else if (operation === 'updateCardAttachment') {
                        // ----------------------------------
                        //         cardAttachment:update
                        // ----------------------------------
                        const attachmentId = this.getNodeParameter('attachmentId', i);
                        const name = this.getNodeParameter('attachmentName', i);
                        const body = {
                            name,
                        };
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'PATCH', `/attachments/${attachmentId}`, body);
                    }
                    else if (operation === 'deleteCardAttachment') {
                        // ----------------------------------
                        //         cardAttachment:delete
                        // ----------------------------------
                        const attachmentId = this.getNodeParameter('attachmentId', i);
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'DELETE', `/attachments/${attachmentId}`);
                    }
                }
                else if (resource === 'cardComment') {
                    // *********************************************************************
                    //                             CARD ACTION
                    // *********************************************************************
                    if (operation === 'getAllCardActions') {
                        // ----------------------------------
                        //         cardAction:getAll
                        // ----------------------------------
                        const cardId = this.getNodeParameter('cardId', i);
                        const withDetails = this.getNodeParameter('withDetails', i);
                        const qs = {
                            withDetails,
                        };
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'GET', `/cards/${cardId}/actions`, {}, qs);
                    }
                    else if (operation === 'createCardComment') {
                        // ----------------------------------
                        //         cardAction:createComment
                        // ----------------------------------
                        const cardId = this.getNodeParameter('cardId', i);
                        const text = this.getNodeParameter('commentText', i);
                        const body = {
                            text,
                        };
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'POST', `/cards/${cardId}/comment-actions`, body);
                    }
                    else if (operation === 'updateCardComment') {
                        // ----------------------------------
                        //         cardAction:updateComment
                        // ----------------------------------
                        const commentId = this.getNodeParameter('commentId', i);
                        const text = this.getNodeParameter('commentText', i);
                        const body = {
                            text,
                        };
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'PATCH', `/comment-actions/${commentId}`, body);
                    }
                    else if (operation === 'deleteCardComment') {
                        // ----------------------------------
                        //         cardAction:deleteComment
                        // ----------------------------------
                        const commentId = this.getNodeParameter('commentId', i);
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'DELETE', `/comment-actions/${commentId}`);
                    }
                }
                else if (resource === 'user') {
                    // *********************************************************************
                    //                             USER
                    // *********************************************************************
                    if (operation === 'createUser') {
                        // ----------------------------------
                        //         user:create
                        // ----------------------------------
                        const name = this.getNodeParameter('name', i);
                        const email = this.getNodeParameter('email', i);
                        const password = this.getNodeParameter('password', i);
                        const username = this.getNodeParameter('username', i);
                        const phone = this.getNodeParameter('phone', i);
                        const organization = this.getNodeParameter('organization', i);
                        const language = this.getNodeParameter('language', i);
                        const subscribeToOwnCards = this.getNodeParameter('subscribeToOwnCards', i);
                        const isAdmin = this.getNodeParameter('isAdmin', i);
                        const body = {
                            name,
                            email,
                            password,
                            username,
                            phone,
                            organization,
                            language,
                            subscribeToOwnCards,
                            isAdmin,
                        };
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'POST', '/users', body);
                    }
                    else if (operation === 'deleteUser') {
                        // ----------------------------------
                        //         user:delete
                        // ----------------------------------
                        const userId = this.getNodeParameter('userId', i);
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'DELETE', `/users/${userId}`);
                    }
                    else if (operation === 'getUser') {
                        // ----------------------------------
                        //         user:get
                        // ----------------------------------
                        const userId = this.getNodeParameter('userId', i);
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'GET', `/users/${userId}`);
                    }
                    else if (operation === 'getAllUsers') {
                        // ----------------------------------
                        //         user:getAll
                        // ----------------------------------
                        responseData = await GenericFunctions_1.plankaApiRequestAllItems.call(this, 'GET', '/users');
                    }
                    else if (operation === 'updateUser') {
                        // ----------------------------------
                        //         user:update
                        // ----------------------------------
                        const userId = this.getNodeParameter('userId', i);
                        const name = this.getNodeParameter('name', i);
                        const email = this.getNodeParameter('email', i);
                        const password = this.getNodeParameter('password', i);
                        const username = this.getNodeParameter('username', i);
                        const phone = this.getNodeParameter('phone', i);
                        const organization = this.getNodeParameter('organization', i);
                        const language = this.getNodeParameter('language', i);
                        const subscribeToOwnCards = this.getNodeParameter('subscribeToOwnCards', i);
                        const isAdmin = this.getNodeParameter('isAdmin', i);
                        const body = {
                            name,
                            email,
                            password,
                            username,
                            phone,
                            organization,
                            language,
                            subscribeToOwnCards,
                            isAdmin,
                        };
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'PATCH', `/users/${userId}`, body);
                    }
                    else if (operation === 'updateUserEmail') {
                        // ----------------------------------
                        //         user:updateEmail
                        // ----------------------------------
                        const userId = this.getNodeParameter('userId', i);
                        const email = this.getNodeParameter('email', i);
                        const body = {
                            email,
                        };
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'PATCH', `/users/${userId}/email`, body);
                    }
                    else if (operation === 'updateUserPassword') {
                        // ----------------------------------
                        //         user:updatePassword
                        // ----------------------------------
                        const userId = this.getNodeParameter('userId', i);
                        const password = this.getNodeParameter('password', i);
                        const body = {
                            password,
                        };
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'PATCH', `/users/${userId}/password`, body);
                    }
                    else if (operation === 'updateUserUsername') {
                        // ----------------------------------
                        //         user:updateUsername
                        // ----------------------------------
                        const userId = this.getNodeParameter('userId', i);
                        const username = this.getNodeParameter('username', i);
                        const body = {
                            username,
                        };
                        responseData = await GenericFunctions_1.plankaApiRequest.call(this, 'PATCH', `/users/${userId}/username`, body);
                    }
                }
                if (Array.isArray(responseData)) {
                    returnData.push.apply(returnData, responseData.map(item => ({ json: item })));
                }
                else if (responseData !== undefined) {
                    returnData.push({ json: responseData });
                }
            }
            catch (error) {
                if (this.continueOnFail()) {
                    if (error instanceof Error) {
                        returnData.push({ json: { error: error.message } });
                    }
                    else {
                        returnData.push({ json: { error: 'An unknown error occurred' } });
                    }
                    continue;
                }
                throw error;
            }
        }
        return [returnData];
    }
}
exports.Planka = Planka;
//# sourceMappingURL=Planka.node.js.map