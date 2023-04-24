export const dynamic = 'force-dynamic';

export default async function Dynamic() {
  const d = new Date();
  const time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  console.log(`time from "/dynamic": ${time}`);
  return (
    <>
      <h1>path: /dynamic</h1>
      <div>
        Dynamic Page current time : <b>{time}</b>
      </div>
    </>
  );
}
