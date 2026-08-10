import { CreateWorkspaceForm } from '@/components/workspace/create-workspace-form';

export default function CreateWorkspacePage() {
  return (
    <div className='flex min-h-[calc(100vh-8rem)] items-center justify-center py-8'>
      <CreateWorkspaceForm />
    </div>
  );
}
