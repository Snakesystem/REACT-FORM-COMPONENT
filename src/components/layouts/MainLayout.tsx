import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="row">
        <div className="col-12">
        <Outlet/>
        </div>
    </div>
  )
}
