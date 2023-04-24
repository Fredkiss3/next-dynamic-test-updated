import Link from 'next/link';
import { Counter } from './counter';
import { ManualPush } from './manual-push';

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <div
          style={{
            display: 'flex',
            gap: `10px`,
            alignItems: 'center',
            padding: '5px',
          }}
        >
          <Link href={`/`}>Link to home</Link>
          <Link prefetch={false} href={`/dynamic`}>
            Link to dynamic page
          </Link>
          <Link href={`/time`}>Link to /time</Link>
          <Link href={`/time-1`}>Link to /time-1</Link>
          <Link href={`/time-2`}>Link to /time-2</Link>
        </div>
        <div
          style={{
            display: 'flex',
            gap: `10px`,
            alignItems: 'center',
            padding: '5px',
          }}
        >
          <ManualPush path={`/`} />
          <ManualPush path={`/dynamic`} />
          <ManualPush path={`/time`} />
          <ManualPush path={`/time-1`} />
          <ManualPush path={`/time-2`} />
        </div>
        {children}
        <div>
          <Counter />
        </div>
      </body>
    </html>
  );
}
