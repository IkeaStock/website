import { Layout } from "../../components/layout";
function HomePage() {
  return (
    <Layout title="Home" headerContent={(
      <>
        <h1>After Install</h1>
        <p>
            Thanks for installing the bot!
            <br />
            Here is some usefull information about the bot:
            <ul>
                <li><a href="#commands">Commands</a></li>
            </ul>
        </p>
    </>
    )}>
        <details id="commands">
            <summary>Commands</summary>
            <p>
                The bot uses slash commands!
                <br />
                All the params are required and in the correct order.
            </p>
            <ul>
                <li>/check &lt;productId&gt; &lt;countryCodes&gt;</li>
            </ul>
        </details>
    </Layout>
  )
}
  
  export default HomePage