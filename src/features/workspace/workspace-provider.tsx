'use client';

import type { ReactNode } from 'react';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { getMyWorkspaces } from './workspace.api';
import type { WorkspaceMembership } from './workspace.type';

type WorkspaceContextValue = {
  memberships: WorkspaceMembership[];
  currentMembership: WorkspaceMembership | null;
  isLoading: boolean;
  errorMessage: string | null;
  selectWorkspace: (workspaceId: string) => void;
  refetchWorkspaces: () => Promise<void>;
};

type WorkspaceProviderProps = {
  children: ReactNode;
};

const WorkspaceContext = createContext<WorkspaceContextValue | undefined>(
  undefined
);

export function WorkspaceProvider({ children }: WorkspaceProviderProps) {
  const [memberships, setMemberships] = useState<WorkspaceMembership[]>([]);
  const [activeWorkspaceId, setActiveWorkspaceId] = useState<string | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const refetchWorkspaces = useCallback(async () => {
    try {
      setIsLoading(true);
      setErrorMessage(null);

      const workspaceMemberships = await getMyWorkspaces();

      setMemberships(workspaceMemberships);

      setActiveWorkspaceId((currentWorkspaceId) => {
        const stillExists = workspaceMemberships.some(
          (membership) => membership.workspace.id === currentWorkspaceId
        );

        if (currentWorkspaceId && stillExists) {
          return currentWorkspaceId;
        }

        return workspaceMemberships[0]?.workspace.id ?? null;
      });
    } catch (error) {
      console.error('Unable to load workspaces:', error);

      setErrorMessage('Unable to load your workspaces.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void refetchWorkspaces();
  }, [refetchWorkspaces]);

  const selectWorkspace = useCallback((workspaceId: string) => {
    setActiveWorkspaceId(workspaceId);
  }, []);

  const currentMembership = useMemo(() => {
    return (
      memberships.find(
        (membership) => membership.workspace.id === activeWorkspaceId
      ) ?? null
    );
  }, [activeWorkspaceId, memberships]);

  const value = useMemo<WorkspaceContextValue>(() => {
    return {
      memberships,
      currentMembership,
      isLoading,
      errorMessage,
      selectWorkspace,
      refetchWorkspaces,
    };
  }, [
    currentMembership,
    errorMessage,
    isLoading,
    memberships,
    refetchWorkspaces,
    selectWorkspace,
  ]);

  return (
    <WorkspaceContext.Provider value={value}>
      {children}
    </WorkspaceContext.Provider>
  );
}

export function useWorkspace() {
  const context = useContext(WorkspaceContext);

  if (!context) {
    throw new Error('useWorkspace must be used inside WorkspaceProvider.');
  }

  return context;
}
