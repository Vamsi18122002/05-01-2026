function A() {
  let [a, seta] = useState([])
  let [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Hello")
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((d) => d.json())
      .then((d) => seta(d))
  }, [])

  return (
    <div>
      <button onClick={()=>setCount(count + 1)}>change</button>
      <button onDoubleClick={()=>setCount(count + 1)}>Double</button>

      <h2>Count: {count}</h2>

      {a.map((b) => {
        return (
          <div key={b.id}>
            <h3>{b.title}</h3>
            <h3>{b.id}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default A;