export type WorkspaceRole = 'OWNER' | 'ADMIN' | 'MEMBER';

export type Workspace = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image: string | null;
  createdAt: string;
  updatedAt: string;
};

export type WorkspaceMembership = {
  id: string;
  role: WorkspaceRole;
  createdAt: string;
  workspace: Workspace;
};

export type ApiSuccessResponse<T> = {
  success: true;
  message: string;
  data: T;
};
