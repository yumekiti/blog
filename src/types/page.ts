import type { Revision } from "./revision";
import type { User } from "./user";

export type Page = {
	_id: string;
	parent: string;
	descendantCount: number;
	isEmpty: boolean;
	status: string;
	grant: number;
	grantedUsers: string[];
	liker: string[];
	seenUsers: string[];
	commentCount: number;
	updatedAt: string;
	path: string;
	creator: User;
	lastUpdateUser: User;
	grantedGroup: string | null;
	createdAt: string;
	__v: number;
	revision: Revision;
	id: string;
};
