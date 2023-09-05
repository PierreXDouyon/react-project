import Child from "./Child"
const testArray = ["one", "two", "three"];
const testArrayOfObjects = [
  {id: 1, name: "one", items: [1,2,3]},
  {id: 2, name: "two", items: [4,5,6]},
  {id: 3, name: "three", items: [7,8,9]},
  {id: 4, name: "four", items: [10,11,12]},
  {id: 5, name: "five", items: [13,14,15]},
  {id: 6, name: "six", items: [16,17,18]},
];

function Parent() {
  return (
    <div>
      <h2>Parent Component</h2>
      <Child className="props-class"/>
      {testArray.map((item, index) => {
        return <Child key={index}name={item}/>
      })}
      {testArrayOfObjects.map((item, index) => {
        return <Child key={item.id}obj={item}/>
      })}
    </div>
  );
}

export default Parent;