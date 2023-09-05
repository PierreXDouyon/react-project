function Child (props) {
  return (

      // {<h3>Child Component</h3>
      // <p>{props.name}</p> }
<div className={props.className ? props.className : "default-class"}>
      {/* {props.name ? <h3>{props.name}</h3> : <p>No name Passed</p>} */}
      {props.obj ?  <h3>{props.obj.id} - {props.obj.name}</h3>  :  <p>No object Passed</p> }
      {props.obj ? ( <> <h3> Object: {props.obj.id} - {props.obj.name}</h3> <p>{props.obj.items}</p> </> ) : ( <p>No object Passed</p>)}
    </div>
  );
}

export default Child;