import NxWelcome from './nx-welcome';
import { mytslib } from '@pnpm-mono/mytslib';
import { mytslib2 } from '@pnpm-mono/mytslib2';

export function App() {
  return (
    <div>
      <NxWelcome title="@pnpm-mono/myapp" />
      {mytslib() || mytslib2()}
    </div>
  );
}

export default App;
