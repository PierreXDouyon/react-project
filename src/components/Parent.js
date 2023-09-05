import Child from "./Child"
const testArray = ["one", "two", "three"];

function Parent() {
  return (
    <div>
      <h2>Parent</h2>
      <Child />
      {testArray.map((item, index) => {
        return <Child key={index}>{item}</Child>
      })}
    </div>
  );
}

export default Parent;