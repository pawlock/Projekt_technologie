import BooksImage from './books.jpg';

export function WelcomePage() {
  return (
    <main>
      <h1>Welcome</h1>

      <hr />

      <div style={{ display: 'flex', justifyContent: 'center', justifyItems: 'center' }}>
        <article style={{ width: '50%', margin: 'auto 20px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere rutrum libero, quis iaculis tortor rutrum at. Nulla facilisi.
          Aliquam tempus libero quis aliquam tempor. Morbi lacinia sem eu odio maximus condimentum. Morbi tristique sapien dui,
          vitae accumsan orci interdum vel. Fusce a erat eget ante tincidunt ultrices at vel nibh.
          Ut mollis viverra nunc, eu volutpat velit interdum non.
          Fusce ut lacus sed erat consequat malesuada. Etiam ut lectus non ligula maximus tristique.
        </article>

        <img src={BooksImage} style={{ width: '50%', border: '1px solid black' }} />
      </div>
    </main>
  )
}