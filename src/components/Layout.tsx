import { Authenticator } from "@aws-amplify/ui-react"
import { useEffect } from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(function () {
    import("bootstrap")
  }, [])

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="min-h-full">
          <header className="p-3 mb-3 border-bottom">
            <div className="container">
              <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                  <li>
                    <a
                      href="/requests"
                      className="nav-link px-2 link-secondary"
                    >
                      Requests
                    </a>
                  </li>
                </ul>
                <form
                  className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                  role="search"
                >
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search..."
                    aria-label="Search"
                  />
                </form>
                <div className="dropdown text-end">
                  <a
                    href="#"
                    className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://github.com/mdo.png"
                      alt="mdo"
                      width={32}
                      height={32}
                      className="rounded-circle"
                    />
                  </a>
                  <ul className="dropdown-menu text-small">
                    <li>
                      <a className="dropdown-item" href="#">
                        New project...
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
          <div className="container">{children}</div>
        </div>
      )}
    </Authenticator>
  )
}
