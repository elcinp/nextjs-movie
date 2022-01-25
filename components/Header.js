import Link from "next/link";
import Layout from "./Layout";

export default function () {
  return (
    <Layout>
      <nav className="header">
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>

          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>

          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>
        {`
          .header {
            background: #fff;
            border-bottom: 1px solid #ccc;
            // display:flex;
            ul {
              display: flex;
              li {
                a {
                  display: flex;
                  height: 60px;
                  text-decoration: none;
                  align-items: center;
                  padding: 0 20px;
                  list-style-type: none;
                  color:#333
                  
                }
              }
            }
          }
        `}
      </style>
    </Layout>
  );
}
