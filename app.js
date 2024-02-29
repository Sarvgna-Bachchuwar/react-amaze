
//nested div and then h1 tag
const parent = React.createElement(
  'div',
  {id: "parent"},
  React.createElement(
    'div',
    {id: "child"},
    [React.createElement(
      'h1',
      {},
      "I am a h1 heading"
    ), React.createElement(
      'h2',
      {},
      "I am a h2 heading"
    )]
  )
)


// const heading= React.createElement(
//   'h1',
//   {id: "heading"},
//   "Hello World from React");
// ReactDOM.render(heading,document.getElementById('root'));

console.log(parent); //gives the object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);