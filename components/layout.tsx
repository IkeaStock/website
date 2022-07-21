import Image from "next/image";

export function Layout(props) {
  return (
    <div className="layout">
      <Header title={props.title} headerContent={props.headerContent}/>
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
function Header(props) {
  return (
    <header>
      <h1>{props.title} | Ikea Stock</h1>
      <div id="header-content">{props.headerContent}</div>
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