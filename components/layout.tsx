export function Layout(props) {
  return (
    <div className="layout" id="backgroundGradient">
      <Header title={props.title}/>
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
function Header(props) {
  return (
    <header>
      <h1>{props.title} | Ikea Stock</h1>
    </header>
  );
}
function Footer() {
    const d = new Date();
    const year = d.getFullYear();
    return (
    <footer>
      <p>&copy; {year} Ikea Stock &amp; Its contributors</p>
    </footer>
  );
}