function Child (props) {
  return (
    <div>
      {/* <h3>Child Component</h3>
      <p>{props.name}</p> */}
      {props.name ? <p>{props.name}</p> : <p>No name Passed</p>}
    </div>
  )
}

export default Child;