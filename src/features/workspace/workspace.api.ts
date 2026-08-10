import { apiClient } from '@/lib/api-client';

import type { ApiSuccessResponse, WorkspaceMembership } from './workspace.type';

export async function getMyWorkspaces() {
  const response =
    await apiClient.get<ApiSuccessResponse<WorkspaceMembership[]>>(
      '/api/workspaces'
    );

  return response.data.data;
}
