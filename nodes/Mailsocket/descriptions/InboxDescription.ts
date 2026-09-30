import type { INodeProperties } from 'n8n-workflow';

export const inboxOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['inbox'] } },
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new throwaway inbox',
				action: 'Create an inbox',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Soft-delete an inbox',
				action: 'Delete an inbox',
			},
			{
				name: 'List',
				value: 'list',
				description: 'List your inboxes',
				action: 'List inboxes',
			},
		],
		default: 'create',
	},
];

export const inboxFields: INodeProperties[] = [
	{
		displayName: 'Label',
		name: 'label',
		type: 'string',
		default: '',
		description: 'Optional label to identify this inbox',
		displayOptions: { show: { resource: ['inbox'], operation: ['create'] } },
	},
	{
		displayName: 'Inbox ID',
		name: 'inboxId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the inbox to delete',
		displayOptions: { show: { resource: ['inbox'], operation: ['delete'] } },
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: { show: { resource: ['inbox'], operation: ['list'] } },
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		typeOptions: { minValue: 1, maxValue: 500 },
		description: 'Max number of results to return',
		displayOptions: {
			show: { resource: ['inbox'], operation: ['list'], returnAll: [false] },
		},
	},
];
