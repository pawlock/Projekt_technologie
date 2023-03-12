function apiTest(){
  console.log('starting api test')
//    let {bookname,author}=this.state;
//  fetch('localhost:3000/add_book', {
//       method: 'post',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         bookname:bookname,
//         author:author,
//       })
//     }).then(response=>response.json()).then(data=>{
//          window.alert(data)
// })
}

export function TestButton () {
  return (
        <button onClick={apiTest}>API Test</button>
  )
}