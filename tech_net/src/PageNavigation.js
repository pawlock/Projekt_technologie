import ReactLogo from './logo.svg';

export function PageNavigation() {
  return (
    <nav>
      <div style={{ maxHeight: '75px', flexGrow: '1', textAlign: 'left', minWidth: '100px' }}>
        <a href="">
          <img style={{ height: 100 + '%', objectFit: 'contain' }} src={ReactLogo}></img>
        </a>
      </div>
      <a>Books</a>
      <a>History</a>
      <a>Profile</a>
    </nav>
  )
}