export default async function Dynamic({ params: { dynamic } }) {
  const d = new Date();
  const time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  console.log(`time from "/${dynamic}": ${time}`);
  return (
    <>
      <h1>path: /[dynamic={dynamic}]</h1>
      <div>
        Dynamic segment current time : <b>{time}</b>
      </div>
    </>
  );
}
