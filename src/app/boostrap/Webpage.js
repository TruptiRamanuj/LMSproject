import logo from "/docs/5.3/assets/brand/bootstrap-logo.svg"
export default function Webpage() {
    return (
        <div>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="Logo" style={{ width: "30px", height: "24px", display: "inline-block", verticalAlign: "middle" }}></img>
                        Bootstrap
                    </a>
                </div>
            </nav>
        </div>
    )
}