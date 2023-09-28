import { Request } from "./model/Request.js"

export function Request({ request }: { request: Request }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{request.title}</h5>
        <p className="card-text">{request.shortDescription}</p>
        <a href="#" className="btn btn-primary">
          Send offer
        </a>
      </div>
    </div>
  )
}
