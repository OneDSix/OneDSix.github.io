import * as React from "react"
import { Link, HeadFC } from "gatsby"

import "../style.scss"

export default function NotFoundPage() {
  return (
    <main>
      <h1>Page not found</h1>
      <p>
        Sorry 😔, we couldn't find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export const Head: HeadFC = () => <title>1D6 | Not found</title>
