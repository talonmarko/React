export default function Navbar(){
    return ( 
  <nav className="nav">
    <a href="/" className="site-title">
      Ravintola Kasarmi
    </a>
    <ul>
      <CustomLink href="/etusivu">Etusivu</CustomLink>
      <CustomLink href="/lorem">Lorem</CustomLink>
      <CustomLink href="/ipsum">Ipsum</CustomLink>
      <CustomLink href="/admin">Admin</CustomLink>
    </ul>
  </nav>
     )
  }

  function CustomLink ({ href, children, ...props }) {
    const path = window.location.pathname

    return (
      <li className={path === href ? "active" : ""}>
        <a href={href} {...props}>
        {children}
        </a>
      </li>
    )
  }