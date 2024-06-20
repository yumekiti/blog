import type { User } from "./user";

export type Revision = {
	_id: string;
	format: string;
	pageId: string;
	body: string;
	author: User;
	hasDiffToPrev: boolean;
	createdAt: string;
	__v: number;
};
